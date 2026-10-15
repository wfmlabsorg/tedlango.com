/**
 * Ask the Book — Cloudflare Worker.
 *
 * POST { question, history?, chapter?, stream? }
 *   stream:true  → text/event-stream with `delta` / `done` / `error` events
 *   stream:false → { answer, citations, usage }
 *
 * The whole book sits in the system prompt behind a 1-hour prompt cache; the
 * model cites [[slug#anchor]] markers which are validated against the corpus
 * and turned into reader deep links. Abuse controls: origin allowlist, input
 * caps, per-IP rate limit binding, max_tokens, and a spend-capped API key.
 */
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT, lookupCitation } from "./prompt";
import { neon } from "@neondatabase/serverless";

interface Env {
  ANTHROPIC_API_KEY: string;
  MODEL?: string;
  NEON_DATABASE_URL?: string; // optional: when set, every answered question is recorded (no IP, no identity)
  RL?: { limit(opts: { key: string }): Promise<{ success: boolean }> };
}

const ALLOWED_ORIGINS = new Set([
  "https://tedlango.com",
  "https://www.tedlango.com",
  "http://localhost:1313",
  "http://127.0.0.1:1313",
]);

const MAX_QUESTION = 500;
const MAX_HISTORY_TURNS = 6;
const MAX_HISTORY_CHARS = 4000;
const MAX_BODY = 16 * 1024;
const MAX_CITATIONS = 4;
const MARKER = /\[\[([a-z0-9-]+(?:#[a-z0-9_-]+)?)\]\]/g;

type Turn = { role: "user" | "assistant"; content: string };
type Citation = { n: number; slug: string; anchor: string; chapterLabel: string; chapterTitle: string; heading: string; url: string };

function corsFor(request: Request): Record<string, string> {
  const origin = request.headers.get("Origin") ?? "";
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
  if (ALLOWED_ORIGINS.has(origin)) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function isAllowedRequest(request: Request): boolean {
  const origin = request.headers.get("Origin");
  if (origin) return ALLOWED_ORIGINS.has(origin);
  const referer = request.headers.get("Referer");
  if (!referer) return false;
  try { return ALLOWED_ORIGINS.has(new URL(referer).origin); } catch { return false; }
}

const json = (body: unknown, status: number, headers: Record<string, string>) =>
  new Response(JSON.stringify(body), { status, headers: { ...headers, "Content-Type": "application/json" } });

/** Replace [[key]] markers with numbered [n] references; drop markers that are not real sections. */
function resolveCitations(text: string): { text: string; citations: Citation[] } {
  const citations: Citation[] = [];
  const index = new Map<string, number>();
  const out = text.replace(MARKER, (_m, key: string) => {
    const hit = lookupCitation(key);
    if (!hit) return "";
    if (!index.has(key)) {
      if (citations.length >= MAX_CITATIONS) return "";
      index.set(key, citations.length + 1);
      citations.push({ n: citations.length + 1, ...hit });
    }
    return ` [${index.get(key)}]`;
  });
  return { text: out.replace(/\s+([.,;:])/g, "$1").replace(/ {2,}/g, " ").trim(), citations };
}

function buildMessages(question: string, history: Turn[], chapter: string | null): Anthropic.MessageParam[] {
  const msgs: Anthropic.MessageParam[] = history.map((t) => ({ role: t.role, content: t.content }));
  const context = chapter ? `(The reader is currently on the page "${chapter}".)\n\n` : "";
  msgs.push({ role: "user", content: context + question });
  return msgs;
}

function validate(body: any): { question: string; history: Turn[]; chapter: string | null; stream: boolean } | string {
  const question = typeof body?.question === "string" ? body.question.trim() : "";
  if (!question) return "question is required";
  if (question.length > MAX_QUESTION) return `Question too long (${MAX_QUESTION} char max)`;
  const rawHistory = Array.isArray(body.history) ? body.history.slice(-MAX_HISTORY_TURNS) : [];
  const history: Turn[] = [];
  let chars = 0;
  for (const t of rawHistory) {
    if (!t || (t.role !== "user" && t.role !== "assistant") || typeof t.content !== "string") continue;
    const content = t.content.trim().slice(0, MAX_HISTORY_CHARS);
    chars += content.length;
    if (chars > MAX_HISTORY_CHARS) break;
    if (content) history.push({ role: t.role, content });
  }
  // The API requires alternating roles starting with user; drop a leading assistant turn.
  while (history.length && history[0].role !== "user") history.shift();
  const chapter = typeof body.chapter === "string" && /^[a-z0-9-]{1,80}$/.test(body.chapter) ? body.chapter : null;
  return { question, history, chapter, stream: body.stream !== false };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const cors = corsFor(request);
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") {
      return json({ name: "Ask the Book — Adaptive", usage: 'POST {"question": "...", "history": [], "chapter": "slug", "stream": true}', book: "https://tedlango.com/adaptive/", rateLimit: env.RL ? "bound" : "unbound" }, 200, cors);
    }
    if (!isAllowedRequest(request)) return json({ error: "Forbidden" }, 403, cors);

    const len = Number(request.headers.get("Content-Length") ?? "0");
    if (len > MAX_BODY) return json({ error: "Request too large" }, 413, cors);

    if (env.RL) {
      const ip = request.headers.get("CF-Connecting-IP") ?? "anon";
      const { success } = await env.RL.limit({ key: ip });
      console.log(JSON.stringify({ event: "ratelimit", ip, success }));
      if (!success) return json({ error: "Too many questions — give it a minute." }, 429, { ...cors, "Retry-After": "60" });
    }

    let body: any;
    try { body = await request.json(); } catch { return json({ error: "Body must be JSON" }, 400, cors); }
    const input = validate(body);
    if (typeof input === "string") return json({ error: input }, 400, cors);

    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY, maxRetries: 1 });
    const startedAt = Date.now();
    const params = {
      model: env.MODEL || "claude-opus-5-5",
      max_tokens: 1024,
      output_config: { effort: "low" as const },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default" as const,
      system: [{ type: "text" as const, text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" as const, ttl: "1h" as const } }],
      messages: buildMessages(input.question, input.history, input.chapter),
    };

    if (!input.stream) {
      try {
        const msg = await client.beta.messages.create(params);
        const raw = msg.content.filter((b) => b.type === "text").map((b) => (b as any).text).join("");
        const { text, citations } = resolveCitations(raw);
        logUsage(msg.usage, msg.stop_reason);
        ctx.waitUntil(record(env, { input, model: params.model, answer: text || declined(msg.stop_reason), citations, usage: usageOf(msg.usage), stop: msg.stop_reason, latencyMs: Date.now() - startedAt, streamed: false }));
        return json({ answer: text || declined(msg.stop_reason), citations, usage: usageOf(msg.usage), stopReason: msg.stop_reason }, 200, cors);
      } catch (err: any) {
        console.error("book-agent error", err?.status, err?.message);
        return json({ error: "Something went wrong. Try again." }, 502, cors);
      }
    }

    // Streaming: forward raw text deltas (the client hides partial [[ markers), then the resolved citations.
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const enc = new TextEncoder();
    const send = (event: string, data: unknown) => writer.write(enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
    (async () => {
      try {
        const stream = client.beta.messages.stream(params);
        let full = "";
        for await (const ev of stream) {
          if (ev.type === "content_block_delta" && ev.delta.type === "text_delta") {
            full += ev.delta.text;
            await send("delta", { text: ev.delta.text });
          }
        }
        const final = await stream.finalMessage();
        const { text, citations } = resolveCitations(full);
        logUsage(final.usage, final.stop_reason);
        ctx.waitUntil(record(env, { input, model: params.model, answer: text || declined(final.stop_reason), citations, usage: usageOf(final.usage), stop: final.stop_reason, latencyMs: Date.now() - startedAt, streamed: true }));
        await send("done", { text: text || declined(final.stop_reason), citations, usage: usageOf(final.usage), stopReason: final.stop_reason });
      } catch (err: any) {
        console.error("book-agent stream error", err?.status, err?.message);
        await send("error", { error: "Something went wrong. Try again." });
      } finally {
        await writer.close();
      }
    })();
    return new Response(readable, { headers: { ...cors, "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "X-Accel-Buffering": "no" } });
  },
};

const declined = (stop: string | null) =>
  stop === "refusal" ? "I can't help with that one — ask me something about the book." : "I wasn't able to answer that from the book. Try asking about a chapter, a maturity level, or a concept.";

function usageOf(u: any) {
  return { input: u?.input_tokens ?? 0, cacheRead: u?.cache_read_input_tokens ?? 0, cacheWrite: u?.cache_creation_input_tokens ?? 0, output: u?.output_tokens ?? 0 };
}
function logUsage(u: any, stop: string | null) {
  const x = usageOf(u);
  console.log(JSON.stringify({ event: "answer", stop, ...x, cold: x.cacheRead === 0 }));
}

/**
 * Record an answered question in Neon (table book_questions, schema/001_book_questions.sql).
 * Raw signal feed for "what do readers ask?" — stores the question, chapter context, the answer
 * and its citations, plus usage. Deliberately no IP, user agent or session id. Runs after the
 * response is sent (ctx.waitUntil) and never affects the reader if it fails.
 */
type RecordArgs = {
  input: { question: string; history: Turn[]; chapter: string | null };
  model: string; answer: string; citations: Citation[];
  usage: { input: number; cacheRead: number; cacheWrite: number; output: number };
  stop: string | null; latencyMs: number; streamed: boolean;
};
async function record(env: Env, a: RecordArgs): Promise<void> {
  if (!env.NEON_DATABASE_URL) return;
  try {
    const sql = neon(env.NEON_DATABASE_URL);
    const cites = a.citations.map((c) => ({ slug: c.slug, anchor: c.anchor, heading: c.heading, url: c.url }));
    await sql`
      INSERT INTO book_questions (question, chapter, history_turns, answer, citations, stop_reason, model,
                                  input_tokens, cache_read, cache_write, output_tokens, cold, latency_ms, streamed)
      VALUES (${a.input.question}, ${a.input.chapter ?? null}, ${a.input.history.length}, ${a.answer}, ${JSON.stringify(cites)}::jsonb,
              ${a.stop}, ${a.model}, ${a.usage.input}, ${a.usage.cacheRead}, ${a.usage.cacheWrite}, ${a.usage.output},
              ${a.usage.cacheRead === 0}, ${a.latencyMs}, ${a.streamed})`;
  } catch (err: any) {
    console.error("book-agent record error", err?.message);
  }
}
