/**
 * wikilinks-curate.ts — turn the scan proposal into data/adaptive/wikilinks.json.
 *
 *   bun tools/adaptive-build/wikilinks-scan.ts > /tmp/proposal.json
 *   bun tools/adaptive-build/wikilinks-curate.ts /tmp/proposal.json
 *
 * Rules: drop generic words and incidental vendor mentions; one link per wiki page per
 * chapter; the link text is the page's base title (the client matches it case-insensitively,
 * with hyphen / non-breaking-hyphen / space variants and an optional plural). "deeper" =
 * the chapter's own concept page + its top concepts by frequency + the Adaptive Concepts hub,
 * each with the wiki page's opening sentence as the blurb. Hand-curated entries already in
 * wikilinks.json (marked "curated": true) are kept as they are.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const API = "https://wiki.wfmlabs.org/w/api.php";
const OUT = join(import.meta.dir, "../../data/adaptive/wikilinks.json");
const HUB = "Adaptive Concepts";
const DEEPER_MAX = 6;
const EXCLUDE = new Set([
  "Technology", "Optimization", "Contact Center", "Call center", "Training and Development", "Real Numbers",
  "Telemarketing", "Assembled", "Cinareo", "Amazon Web Services", "Amazon Connect", "NICE", "Verint",
  "Forecasting Accuracy", // duplicate of Forecast Accuracy
  "Mathematical optimization", // too close to the generic "optimization" in running text
]);
const PREFER: Record<string, string> = { "Erlang-C": "Erlang C", "Erlang-A": "Erlang A" };
const NO_DEEPER = new Set(["foreword", "preface", "acknowledgements"]);
// Pages whose intro the wiki API cannot extract (they open with a template): blurb by hand.
const FALLBACK_BLURB: Record<string, string> = {
  "WFM Labs Maturity Model": "The five-level model at the heart of Adaptive, from spreadsheet-era planning to adaptive orchestration, with the criteria for each level.",
  "Resource Optimization Center (ROC)": "The operating structure that runs forecasting, scheduling and real-time management as one continuous loop.",
};
const PEOPLE_OR_VENDORS = /^(Agner Krarup Erlang|Ric Kosiba|Penny Reynolds|Dr\. James Pipkins|Matt McConnell|Intradiem|Society of Workforce Planning Professionals)$/;

type Cand = { term: string; page: string; count: number };
const proposal: Record<string, { wiki_page: string | null; candidates: Cand[] }> = JSON.parse(readFileSync(process.argv[2], "utf8"));
const existing: Record<string, any> = JSON.parse(readFileSync(OUT, "utf8"));

async function firstSentence(title: string): Promise<string> {
  const q = new URLSearchParams({ action: "query", prop: "extracts", exintro: "1", explaintext: "1", exsentences: "1", titles: title, format: "json", redirects: "1" });
  try {
    const d: any = await (await fetch(`${API}?${q}`)).json();
    const page: any = Object.values(d.query.pages)[0];
    if (page.missing !== undefined) return "";
    const s = (page.extract ?? "").replace(/\s+/g, " ").trim();
    return s.length > 180 ? s.slice(0, 177).replace(/\s+\S*$/, "") + "…" : s;
  } catch { return ""; }
}
const blurbCache = new Map<string, string>();
async function blurb(title: string) { if (!blurbCache.has(title)) blurbCache.set(title, (await firstSentence(title)) || FALLBACK_BLURB[title] || ""); return blurbCache.get(title)!; }

const base = (page: string) => page.replace(/\s*\(.*?\)\s*$/, "").trim();
const out: Record<string, any> = {};
if (existing._comment) out._comment = existing._comment;
for (const [slug, v] of Object.entries(proposal)) {
  if (existing[slug]?.curated) { out[slug] = existing[slug]; continue; }
  const seen = new Set<string>();
  const inline: { term: string; page: string }[] = [];
  for (const c of v.candidates) {
    let page = PREFER[c.page] ?? c.page;
    if (EXCLUDE.has(page) || seen.has(page)) continue;
    seen.add(page);
    inline.push({ term: base(page), page });
  }
  if (inline.length < 2) continue;
  const entry: any = { inline };
  if (!NO_DEEPER.has(slug)) {
    const deeperPages: string[] = [];
    if (v.wiki_page && v.wiki_page !== HUB) deeperPages.push(v.wiki_page);
    for (const c of v.candidates) {
      const page = PREFER[c.page] ?? c.page;
      if (deeperPages.length >= DEEPER_MAX + 1) break;
      if (EXCLUDE.has(page) || PEOPLE_OR_VENDORS.test(page) || deeperPages.includes(page) || page === HUB) continue;
      deeperPages.push(page);
    }
    deeperPages.push(HUB);
    entry.deeper = [];
    for (const p of deeperPages) entry.deeper.push({ page: p, why: await blurb(p) });
  }
  out[slug] = entry;
}
writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
for (const [slug, e] of Object.entries(out)) {
  if (slug.startsWith("_")) continue;
  console.log(`\n## ${slug}${e.curated ? " (hand-curated, kept)" : ""}`);
  console.log(`inline (${e.inline.length}): ` + e.inline.map((l: any) => l.page).join(", "));
  if (e.deeper) console.log(`deeper (${e.deeper.length}): ` + e.deeper.map((d: any) => d.page + (d.why ? "" : " [no blurb]")).join(" · "));
}
