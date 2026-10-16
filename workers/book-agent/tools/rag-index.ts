/**
 * Build / refresh the Ask the Book retrieval store (table rag_chunks, schema/002).
 *
 *   cd workers/book-agent
 *   sops exec-env ~/pai/secrets.yaml 'bun tools/rag-index.ts'            # book + wiki
 *   sops exec-env ~/pai/secrets.yaml 'bun tools/rag-index.ts --source book'
 *   sops exec-env ~/pai/secrets.yaml 'bun tools/rag-index.ts --dry-run'  # count chunks, no writes
 *
 * Needs: NEON_DATABASE_URL, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_AI_TOKEN.
 *
 * Book  → one chunk per anchored section of src/corpus.json (regenerate that first
 *         with `bun tools/adaptive-build/build-corpus.ts` after a chapter edit).
 * Wiki  → every main-namespace article on wiki.wfmlabs.org (TextExtracts plain text),
 *         split by heading, long sections split again at ~1600 chars.
 * Idempotent: rows are keyed by chunk_key and only re-embedded when the content hash
 * changes; chunks that disappeared from a source are deleted.
 */
import { neon } from "@neondatabase/serverless";
import { createHash } from "node:crypto";
import corpus from "../src/corpus.json";

const WIKI_API = "https://wiki.wfmlabs.org/w/api.php";
const WIKI_BASE = "https://wiki.wfmlabs.org/wiki/";
const EMBED_MODEL = "@cf/baai/bge-m3";
const MAX_CHUNK_CHARS = 1600;
const MIN_CHUNK_CHARS = 120;
const SKIP_HEADINGS = /^(references?|see also|external links?|notes?|further reading|sources?|citations?)$/i;

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const only = process.argv.includes("--source") ? process.argv[process.argv.indexOf("--source") + 1] : null;

const { NEON_DATABASE_URL, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_AI_TOKEN } = process.env;
if (!dryRun && (!NEON_DATABASE_URL || !CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_AI_TOKEN)) {
  console.error("Missing NEON_DATABASE_URL / CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_AI_TOKEN");
  process.exit(1);
}

type Chunk = { source: "book" | "wiki"; doc_key: string; chunk_key: string; cite_key: string; title: string; label: string | null; heading: string | null; url: string; ord: number; text: string };

const sha = (s: string) => createHash("sha256").update(s).digest("hex").slice(0, 32);
const clean = (s: string) => s.replace(/ /g, " ").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

// ---------- book ----------
function bookChunks(): Chunk[] {
  const out: Chunk[] = [];
  for (const ch of (corpus as any).chapters) {
    for (const s of ch.sections) {
      const anchorKey = s.anchor ? `${ch.slug}#${s.anchor}` : ch.slug;
      out.push({
        source: "book",
        doc_key: ch.slug,
        chunk_key: s.part ? `${anchorKey}~${s.part}` : anchorKey,
        cite_key: anchorKey,
        title: ch.title,
        label: ch.label,
        heading: s.heading,
        url: s.anchor ? `${ch.url}#${s.anchor}` : ch.url,
        ord: s.order ?? 0,
        text: clean(s.text),
      });
    }
  }
  return out;
}

// ---------- wiki ----------
async function wikiPages(): Promise<{ pageid: number; title: string }[]> {
  const pages: { pageid: number; title: string }[] = [];
  let cont: Record<string, string> = {};
  do {
    const u = new URL(WIKI_API);
    u.search = new URLSearchParams({ action: "query", list: "allpages", apnamespace: "0", apfilterredir: "nonredirects", aplimit: "500", format: "json", ...cont }).toString();
    const j = await (await fetch(u)).json();
    for (const p of j.query.allpages) pages.push({ pageid: p.pageid, title: p.title });
    cont = j.continue ?? {};
  } while (Object.keys(cont).length);
  return pages;
}

async function wikiExtract(pageid: number): Promise<string> {
  const u = new URL(WIKI_API);
  u.search = new URLSearchParams({ action: "query", prop: "extracts", explaintext: "1", exsectionformat: "wiki", pageids: String(pageid), format: "json" }).toString();
  const j = await (await fetch(u)).json();
  return j.query?.pages?.[pageid]?.extract ?? "";
}

const anchorOf = (heading: string) => encodeURIComponent(heading.trim().replace(/\s+/g, "_")).replace(/%3A/g, ":");

function splitLong(text: string): string[] {
  if (text.length <= MAX_CHUNK_CHARS) return [text];
  const paras = text.split(/\n\s*\n/);
  const out: string[] = [];
  let cur = "";
  for (const p of paras) {
    if (cur && cur.length + p.length + 2 > MAX_CHUNK_CHARS) { out.push(cur); cur = ""; }
    cur = cur ? `${cur}\n\n${p}` : p;
    while (cur.length > MAX_CHUNK_CHARS * 1.5) { out.push(cur.slice(0, MAX_CHUNK_CHARS)); cur = cur.slice(MAX_CHUNK_CHARS); }
  }
  if (cur) out.push(cur);
  return out;
}

function wikiChunksFor(page: { pageid: number; title: string }, extract: string): Chunk[] {
  const lines = clean(extract).split("\n");
  const sections: { heading: string | null; text: string }[] = [{ heading: null, text: "" }];
  for (const line of lines) {
    const m = /^(={2,})\s*(.+?)\s*\1\s*$/.exec(line);
    if (m) sections.push({ heading: m[2], text: "" });
    else sections[sections.length - 1].text += line + "\n";
  }
  const out: Chunk[] = [];
  let n = 0;
  const pageUrl = WIKI_BASE + encodeURIComponent(page.title.replace(/ /g, "_")).replace(/%3A/g, ":").replace(/%2C/g, ",").replace(/%28/g, "(").replace(/%29/g, ")");
  for (const s of sections) {
    if (s.heading && SKIP_HEADINGS.test(s.heading)) continue;
    const body = clean(s.text);
    if (body.length < MIN_CHUNK_CHARS) continue;
    for (const piece of splitLong(body)) {
      out.push({
        source: "wiki",
        doc_key: page.title,
        chunk_key: `wiki:${page.pageid}:${n}`,
        cite_key: "", // assigned after insert: wiki-<id>
        title: page.title,
        label: null,
        heading: s.heading,
        url: s.heading ? `${pageUrl}#${anchorOf(s.heading)}` : pageUrl,
        ord: n,
        text: piece,
      });
      n++;
    }
  }
  return out;
}

async function wikiChunks(): Promise<Chunk[]> {
  const pages = await wikiPages();
  console.log(`wiki: ${pages.length} articles`);
  const out: Chunk[] = [];
  let done = 0;
  const queue = [...pages];
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const p = queue.shift()!;
      let extract = "";
      for (let attempt = 0; attempt < 3 && !extract; attempt++) {
        try { extract = await wikiExtract(p.pageid); } catch { await Bun.sleep(500 * (attempt + 1)); }
      }
      out.push(...wikiChunksFor(p, extract));
      if (++done % 100 === 0) console.log(`  fetched ${done}/${pages.length}`);
    }
  }));
  return out;
}

// ---------- embeddings ----------
async function embedBatch(texts: string[]): Promise<number[][]> {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${EMBED_MODEL}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${CLOUDFLARE_AI_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ text: texts }),
  });
  const j = await res.json();
  if (!j.success) throw new Error(`embedding failed: ${JSON.stringify(j.errors)}`);
  return j.result.data;
}
const embedText = (c: Chunk) => `${c.title}${c.heading && c.heading !== c.title ? ` › ${c.heading}` : ""}\n\n${c.text}`.slice(0, 6000);

// ---------- main ----------
const sources = only ? [only] : ["book", "wiki"];
const chunks: Chunk[] = [];
if (sources.includes("book")) chunks.push(...bookChunks());
if (sources.includes("wiki")) chunks.push(...(await wikiChunks()));
const counts = chunks.reduce((a, c) => ({ ...a, [c.source]: (a[c.source] ?? 0) + 1 }), {} as Record<string, number>);
console.log("chunks:", counts, "total chars:", chunks.reduce((a, c) => a + c.text.length, 0));
if (dryRun) process.exit(0);

const sql = neon(NEON_DATABASE_URL!);
const existing = new Map<string, string>();
for (const row of await sql`SELECT chunk_key, content_hash FROM rag_chunks WHERE source = ANY(${sources})`) existing.set(row.chunk_key, row.content_hash);

const withHash = chunks.map((c) => ({ ...c, hash: sha(embedText(c) + "|" + c.url + "|" + c.cite_key) }));
const changed = withHash.filter((c) => existing.get(c.chunk_key) !== c.hash);
const present = new Set(withHash.map((c) => c.chunk_key));
const stale = [...existing.keys()].filter((k) => !present.has(k));
console.log(`to embed/upsert: ${changed.length} · unchanged: ${withHash.length - changed.length} · stale to delete: ${stale.length}`);

const BATCH = 40;
for (let i = 0; i < changed.length; i += BATCH) {
  const batch = changed.slice(i, i + BATCH);
  let vectors: number[][] = [];
  for (let attempt = 0; attempt < 3; attempt++) {
    try { vectors = await embedBatch(batch.map(embedText)); break; } catch (e) { if (attempt === 2) throw e; await Bun.sleep(1500 * (attempt + 1)); }
  }
  await sql.transaction(batch.map((c, k) => sql`
    INSERT INTO rag_chunks (source, doc_key, chunk_key, cite_key, title, label, heading, url, ord, text, content_hash, embedding, updated_at)
    VALUES (${c.source}, ${c.doc_key}, ${c.chunk_key}, ${c.cite_key}, ${c.title}, ${c.label}, ${c.heading}, ${c.url}, ${c.ord}, ${c.text}, ${c.hash}, ${JSON.stringify(vectors[k])}::vector, now())
    ON CONFLICT (chunk_key) DO UPDATE SET
      doc_key = EXCLUDED.doc_key, cite_key = EXCLUDED.cite_key, title = EXCLUDED.title, label = EXCLUDED.label, heading = EXCLUDED.heading,
      url = EXCLUDED.url, ord = EXCLUDED.ord, text = EXCLUDED.text, content_hash = EXCLUDED.content_hash, embedding = EXCLUDED.embedding, updated_at = now()`));
  console.log(`  upserted ${Math.min(i + BATCH, changed.length)}/${changed.length}`);
}
if (stale.length) await sql`DELETE FROM rag_chunks WHERE chunk_key = ANY(${stale})`;
// Wiki cite keys are the row id (short, unambiguous for the model to copy).
await sql`UPDATE rag_chunks SET cite_key = 'wiki-' || id WHERE source = 'wiki' AND cite_key <> 'wiki-' || id`;

const summary = await sql`SELECT source, count(*)::int AS n, sum(length(text))::int AS chars FROM rag_chunks GROUP BY source ORDER BY source`;
console.table(summary);
