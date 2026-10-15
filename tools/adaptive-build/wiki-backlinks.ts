#!/usr/bin/env bun
/**
 * Wiki ↔ book backlinks for wiki.wfmlabs.org.
 *
 * Creates Template:Adaptive online, drops {{Adaptive online|…}} onto each of the
 * 12 Adaptive Concepts pages, adds an "Online edition" note to the hub, and logs
 * one Project:Change Log row.
 *
 *   sops exec-env ~/pai/secrets.yaml 'bun tools/adaptive-build/wiki-backlinks.ts'          # dry run: prints diffs
 *   sops exec-env ~/pai/secrets.yaml 'bun tools/adaptive-build/wiki-backlinks.ts --apply'  # edits the wiki
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { loginFromEnv } from "/home/tedla/pai/Tools/wfmwiki/wfmwiki-mw.ts";

const APPLY = process.argv.includes("--apply");
const CONTENT = join(import.meta.dir, "../../content/adaptive");
const TEMPLATE = "Template:Adaptive online";
const HUB = "Adaptive Concepts";
const TODAY = new Date().toISOString().slice(0, 10);

const TEMPLATE_TEXT = `<includeonly><div class="adaptive-online" style="float:right; clear:right; width:270px; margin:0 0 1em 1.25em; padding:0.75em 1em; border:1px solid #c8d1dc; border-radius:8px; background:#f6f8fa; font-size:90%; line-height:1.45;">
<span style="font-size:80%; letter-spacing:0.08em; text-transform:uppercase; color:#57606a;">From the book</span><br />
'''''Adaptive'', {{{label}}}'''<br />
This concept page draws on {{{label}}} of ''Adaptive: Building Workforce Systems for an (Unpredictable) Future'' — free to read and listen to online.<br />
[https://tedlango.com/adaptive/{{{slug}}}/ Read the chapter] · [https://tedlango.com/adaptive/{{{slug}}}/?listen=1 Listen ({{{duration}}})] · [https://tedlango.com/adaptive/ Ask the Book]
</div></includeonly><noinclude>
Box linking an Adaptive Concepts page to its chapter in the online edition of ''Adaptive'' at tedlango.com/adaptive/.

Usage: <code><nowiki>{{Adaptive online|label=Chapter 7|slug=chapter-07-level-1-initial|duration=1h 20m}}</nowiki></code>

Maintained by TARS from the book's chapter front matter ([skill:WFMWiki]).
[[Category:Templates]]</noinclude>`;

type Page = { slug: string; label: string; chapter: number; duration: string; wiki: string };
function pages(): Page[] {
  const out: Page[] = [];
  for (const f of readdirSync(CONTENT)) {
    if (!f.endsWith(".md")) continue;
    const fm = readFileSync(join(CONTENT, f), "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
    const get = (k: string) => fm.match(new RegExp(`^${k}: "?(.*?)"?$`, "m"))?.[1];
    const chapter = Number(get("chapter"));
    if (!chapter || !get("wiki_page")) continue;
    const s = Number(get("audio_duration") ?? 0), h = Math.floor(s / 3600), m = Math.round((s % 3600) / 60);
    out.push({ slug: get("slug")!, label: get("label")!, chapter, duration: h ? `${h}h ${m}m` : `${m} min`, wiki: get("wiki_page")! });
  }
  return out.sort((a, b) => a.chapter - b.chapter);
}

function insertBox(text: string, box: string): string | null {
  if (text.includes("{{Adaptive online")) return null;
  // Keep a leading [[File:…]] thumbnail first; the box goes right after it (or at the very top).
  const lines = text.split("\n");
  let i = 0;
  while (i < lines.length && /^\s*$/.test(lines[i])) i++;
  if (/^\[\[File:/i.test(lines[i] ?? "")) i++;
  lines.splice(i, 0, box);
  return lines.join("\n");
}

const mw = await loginFromEnv();
const plan: { title: string; text: string; summary: string; createOnly?: boolean }[] = [];

// 1. Template
const existing = await mw.getPageWikitext(TEMPLATE);
if (existing !== TEMPLATE_TEXT) plan.push({ title: TEMPLATE, text: TEMPLATE_TEXT, summary: `TARS: ${existing ? "update" : "create"} Adaptive online box template [skill:WFMWiki]` });

// 2. Concept pages
const list = pages();
for (const p of list) {
  const cur = await mw.getPageWikitext(p.wiki);
  if (cur == null) { console.error(`✗ missing wiki page: ${p.wiki}`); continue; }
  const next = insertBox(cur, `{{Adaptive online|label=${p.label}|slug=${p.slug}|duration=${p.duration}}}`);
  if (next) plan.push({ title: p.wiki, text: next, summary: `TARS: link to the online edition of Adaptive (${p.label}, read + listen) [skill:WFMWiki]` });
}

// 3. Hub
const hub = (await mw.getPageWikitext(HUB))!;
const NOTE = "== Online edition ==\nThe full text of ''Adaptive'' and the author-narrated audiobook are free at [https://tedlango.com/adaptive/ tedlango.com/adaptive] — read and listen chapter by chapter, with each chapter linking back to its concept page here, and an ''Ask the Book'' guide that answers from the text and jumps to the passage. Every page in this series carries a box pointing to its chapter.";
if (!hub.includes("== Online edition ==")) {
  const idx = hub.indexOf("== How the series relates to existing pages ==");
  const next = idx >= 0 ? hub.slice(0, idx) + NOTE + "\n\n" + hub.slice(idx) : hub + "\n\n" + NOTE;
  plan.push({ title: HUB, text: next, summary: "TARS: Adaptive Concepts hub → online edition (read, listen, Ask the Book) [skill:WFMWiki]" });
}

// 4. Change log row
const cl = (await mw.getPageWikitext("Project:Change Log"))!;
const hdr = "! Date !! Page !! Change !! Editor !! Notes";
const at = cl.indexOf(hdr);
if (at >= 0 && !cl.includes("online edition of ''Adaptive''")) {
  const eol = cl.indexOf("\n", at);
  const row = `\n|-\n| ${TODAY} || [[${HUB}]] || Backlinks || TARS || Linked all 12 Adaptive Concepts pages to the free online edition of ''Adaptive'' (tedlango.com/adaptive: text + audiobook + Ask the Book) via the new [[${TEMPLATE}]] box; hub gained an "Online edition" section.`;
  plan.push({ title: "Project:Change Log", text: cl.slice(0, eol) + row + cl.slice(eol), summary: "TARS: log Adaptive online-edition backlinks [skill:WFMWiki]" });
}

console.log(`${APPLY ? "APPLYING" : "DRY RUN"} — ${plan.length} edit(s)\n`);
for (const e of plan) {
  console.log(`• ${e.title}\n  ${e.summary}`);
  if (!APPLY) {
    const added = e.text.split("\n").filter((l) => l.includes("Adaptive online") || l.startsWith("== Online edition") || l.includes("online edition of ''Adaptive''"));
    for (const l of added.slice(0, 3)) console.log(`  + ${l.slice(0, 160)}`);
  } else {
    const r = await mw.edit({ title: e.title, text: e.text, summary: e.summary, bot: true });
    console.log(`  → ${r.result}${r.nochange ? " (no change)" : ""} rev ${r.newrevid ?? "-"}`);
  }
}
