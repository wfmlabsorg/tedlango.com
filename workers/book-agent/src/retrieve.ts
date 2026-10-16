/**
 * Retrieval for Ask the Book: embed the question with Workers AI (bge-m3) and run a
 * hybrid search over rag_chunks in Neon — pgvector cosine + Postgres full text, fused
 * with reciprocal rank fusion. Book and wiki are queried separately so each source
 * gets its own slot budget. If the embedding call fails, keyword search still runs.
 */
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

export type Passage = {
  id: number;
  source: "book" | "wiki";
  citeKey: string;
  docKey: string;
  title: string;
  label: string | null;
  heading: string | null;
  url: string;
  text: string;
  score: number;
};

export type RetrieveEnv = {
  NEON_DATABASE_URL?: string;
  CF_ACCOUNT_ID?: string;
  CF_AI_TOKEN?: string;
};

const EMBED_MODEL = "@cf/baai/bge-m3";
const CANDIDATES = 30; // per ranking leg
const RRF_K = 60;
const CHAPTER_BOOST = 0.004; // ≈ a few RRF ranks: prefer the chapter the reader is on when it is also relevant

export async function embed(env: RetrieveEnv, text: string): Promise<number[] | null> {
  if (!env.CF_ACCOUNT_ID || !env.CF_AI_TOKEN) { console.error("embed: CF_ACCOUNT_ID / CF_AI_TOKEN not set"); return null; }
  try {
    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/ai/run/${EMBED_MODEL}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${env.CF_AI_TOKEN}`, "Content-Type": "application/json" },
      body: JSON.stringify({ text: [text] }),
      signal: AbortSignal.timeout(6000),
    });
    const j: any = await res.json();
    if (!j?.success) { console.error("embed: Workers AI returned", res.status, JSON.stringify(j?.errors ?? j).slice(0, 300)); return null; }
    return j.result.data[0] as number[];
  } catch (err: any) {
    console.error("embed error", err?.message);
    return null;
  }
}

async function search(sql: NeonQueryFunction<false, false>, source: "book" | "wiki", vec: number[] | null, question: string, chapter: string | null, limit: number): Promise<Passage[]> {
  const v = vec ? JSON.stringify(vec) : null;
  const rows = (await sql`
    WITH q AS (SELECT ${v}::vector(1024) AS v, websearch_to_tsquery('english', ${question}) AS tq),
    vec AS (
      SELECT id, row_number() OVER (ORDER BY embedding <=> (SELECT v FROM q)) AS rnk
      FROM rag_chunks WHERE source = ${source} AND (SELECT v FROM q) IS NOT NULL
      ORDER BY embedding <=> (SELECT v FROM q) LIMIT ${CANDIDATES}),
    kw AS (
      SELECT id, row_number() OVER (ORDER BY ts_rank_cd(tsv, (SELECT tq FROM q)) DESC) AS rnk
      FROM rag_chunks WHERE source = ${source} AND tsv @@ (SELECT tq FROM q)
      LIMIT ${CANDIDATES})
    SELECT c.id, c.source, c.cite_key, c.doc_key, c.title, c.label, c.heading, c.url, c.text,
           (coalesce(1.0 / (${RRF_K} + vec.rnk), 0) + coalesce(1.0 / (${RRF_K} + kw.rnk), 0)
            + CASE WHEN ${chapter}::text IS NOT NULL AND c.doc_key = ${chapter} THEN ${CHAPTER_BOOST}::float ELSE 0::float END)::float AS score
    FROM rag_chunks c
    LEFT JOIN vec ON vec.id = c.id
    LEFT JOIN kw  ON kw.id  = c.id
    WHERE vec.id IS NOT NULL OR kw.id IS NOT NULL
    ORDER BY score DESC, c.ord
    LIMIT ${limit}`) as any[];
  return rows.map((r: any) => ({ id: r.id, source: r.source, citeKey: r.cite_key, docKey: r.doc_key, title: r.title, label: r.label, heading: r.heading, url: r.url, text: r.text, score: r.score }));
}

/** Top passages from each source. `query` is the question plus a little recent context for embedding. */
export async function retrieve(env: RetrieveEnv, query: string, question: string, chapter: string | null, slots = { book: 8, wiki: 4 }): Promise<{ book: Passage[]; wiki: Passage[]; embedded: boolean }> {
  if (!env.NEON_DATABASE_URL) return { book: [], wiki: [], embedded: false };
  const sql = neon(env.NEON_DATABASE_URL);
  const vec = await embed(env, query);
  const [book, wiki] = await Promise.all([
    search(sql, "book", vec, question, chapter, slots.book),
    search(sql, "wiki", vec, question, null, slots.wiki),
  ]);
  return { book, wiki, embedded: vec !== null };
}

const escapeAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** The retrieved passages as the model sees them. Book first, then wiki. */
export function passagesXml(book: Passage[], wiki: Passage[]): string {
  const one = (p: Passage) => {
    const where = p.source === "book"
      ? `${p.label ?? p.title}${p.heading && p.heading !== p.title ? ` · ${p.heading}` : ""}`
      : `WFM Labs wiki · ${p.title}${p.heading ? ` › ${p.heading}` : ""}`;
    return `<passage key="${p.citeKey}" source="${p.source}" where="${escapeAttr(where)}">\n${p.text}\n</passage>`;
  };
  return [...book.map(one), ...wiki.map(one)].join("\n");
}
