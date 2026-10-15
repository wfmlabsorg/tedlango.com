/**
 * wikilinks-scan.ts — propose wiki concept links for every Adaptive chapter.
 *
 * Fetches all main-namespace titles from wiki.wfmlabs.org, scans each chapter body in
 * content/adaptive/*.md for titles that appear verbatim (case-insensitive, whole phrase,
 * optional plural, hyphen/space/non-breaking-hyphen variants) and prints a JSON proposal:
 *   { "<slug>": { "wiki_page": "...", "candidates": [{ "term", "page", "count" }] } }
 * Curation (exclusions, canonical page choice, the "deeper" list) happens in
 * wikilinks-curate.ts, which writes data/adaptive/wikilinks.json.
 *
 *   bun tools/adaptive-build/wikilinks-scan.ts > /tmp/wikilinks-proposal.json
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const API = "https://wiki.wfmlabs.org/w/api.php";
const CONTENT = join(import.meta.dir, "../../content/adaptive");

async function allTitles(): Promise<string[]> {
  const titles: string[] = [];
  let cont: Record<string, string> = {};
  for (;;) {
    const q = new URLSearchParams({ action: "query", list: "allpages", aplimit: "500", apnamespace: "0", format: "json", ...cont });
    const d: any = await (await fetch(`${API}?${q}`)).json();
    titles.push(...d.query.allpages.map((p: any) => p.title as string));
    if (!d.continue) break;
    cont = d.continue;
  }
  return titles;
}

function escapeRe(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function pattern(base: string): RegExp {
  const body = base.split(/[\s ‐-‒-]+/).map(escapeRe).join("[\\s\\u00a0\\u2010-\\u2012-]+");
  return new RegExp(`(^|[^A-Za-z0-9])(${body})(s?)(?![A-Za-z0-9])`, "gi");
}

const titles = await allTitles();
// group titles by lower-cased base (parenthetical disambiguation stripped); prefer the plain, Title-Cased form
const byBase = new Map<string, string[]>();
for (const t of titles) {
  const base = t.replace(/\s*\(.*?\)\s*$/, "").trim();
  if (base.length < 4) continue;
  const k = base.toLowerCase();
  byBase.set(k, [...(byBase.get(k) ?? []), t]);
}

const out: Record<string, { wiki_page: string | null; candidates: { term: string; page: string; count: number }[] }> = {};
for (const f of readdirSync(CONTENT).filter((f) => f.endsWith(".md") && f !== "_index.md").sort()) {
  const raw = readFileSync(join(CONTENT, f), "utf8");
  const [, fm, body] = raw.split(/^---\s*$/m);
  const slug = /^slug:\s*"?([^"\n]+)"?/m.exec(fm)?.[1] ?? f.replace(/\.md$/, "");
  const wiki = /^wiki_page:\s*"?([^"\n]+)"?/m.exec(fm)?.[1] ?? null;
  // strip headings, code and existing links from the scanned text
  const text = body.replace(/^#.*$/gm, " ").replace(/```[\s\S]*?```/g, " ").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  const candidates: { term: string; page: string; count: number }[] = [];
  for (const [k, group] of byBase) {
    const re = pattern(k);
    let count = 0, first: string | null = null, m: RegExpExecArray | null;
    while ((m = re.exec(text))) { count++; if (!first) first = m[2]; }
    if (!count) continue;
    const page = group.find((t) => !/\(/.test(t) && /^[A-Z]/.test(t) && t.split(" ").every((w) => /^[A-Z0-9]/.test(w) || /^(and|of|the|in|for|a|to|vs|as|an|on)$/.test(w))) ?? group.find((t) => !/\(/.test(t)) ?? group[0];
    candidates.push({ term: first!, page, count });
  }
  candidates.sort((a, b) => b.count - a.count || a.term.localeCompare(b.term));
  out[slug] = { wiki_page: wiki, candidates };
}
console.log(JSON.stringify(out, null, 2));
console.error(`${titles.length} wiki titles · ${Object.keys(out).length} chapters scanned`);
