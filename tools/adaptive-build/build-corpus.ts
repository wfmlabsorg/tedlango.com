#!/usr/bin/env bun
/**
 * Ask the Book corpus — content/adaptive/*.md → workers/book-agent/src/corpus.json.
 *
 * Sections are split on H2/H3 headings and keyed by the same anchor ids Hugo
 * generates, so the model can cite [[slug#anchor]] and the reader can jump to it.
 * If a Hugo build exists (public/adaptive), every anchor is asserted against the
 * rendered HTML so a drift in Hugo's id algorithm fails loudly here, not in prod.
 *
 *   hugo --quiet && bun tools/adaptive-build/build-corpus.ts
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { hugoAnchor } from "./anchors";

const SITE = join(import.meta.dir, "../..");
const CONTENT = join(SITE, "content/adaptive");
const PUBLIC = join(SITE, "public/adaptive");
const OUT = join(SITE, "workers/book-agent/src/corpus.json");
const MAX_TOKENS = 700; // per section part; ~4 chars/token

type Section = { anchor: string; heading: string; level: 2 | 3; parent: string | null; order: number; part?: number; text: string; approxTokens: number };
type Chapter = { slug: string; order: number; chapter: number | null; label: string; title: string; url: string; sections: Section[] };

function frontMatter(src: string): { fm: Record<string, string>; body: string } {
  const m = src.match(/^---\n([\s\S]*?)\n---\n/);
  const fm: Record<string, string> = {};
  for (const line of (m?.[1] ?? "").split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1");
  }
  return { fm, body: src.slice(m?.[0].length ?? 0) };
}

// Plain text of a heading as goldmark sees it (strip markdown emphasis, links, HTML).
const headingText = (s: string) =>
  s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/<[^>]+>/g, "").replace(/[*_`]/g, "").replace(/\\([()[\]])/g, "$1").trim();

// Strip markup the model doesn't need: HTML tags, figure blocks, reference lists, KaTeX delimiters.
function cleanText(md: string): string {
  return md
    .replace(/<figure[\s\S]*?<\/figure>/g, "")
    .replace(/<div id="refs"[\s\S]*$/, "")
    .replace(/<\/?(aside|div|span|p|br|sub|em|strong)[^>]*>/g, "")
    .replace(/\\[()[\]]/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitLong(text: string): string[] {
  if (text.length / 4 <= MAX_TOKENS) return [text];
  const parts: string[] = [];
  let cur = "";
  for (const para of text.split(/\n\s*\n/)) {
    if (cur && (cur.length + para.length) / 4 > MAX_TOKENS) { parts.push(cur.trim()); cur = ""; }
    cur += para + "\n\n";
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

const files = readdirSync(CONTENT).filter((f) => f.endsWith(".md") && f !== "_index.md");
const chapters: Chapter[] = [];
let problems = 0;

for (const f of files) {
  const { fm, body } = frontMatter(readFileSync(join(CONTENT, f), "utf8"));
  if (!fm.slug) continue;
  const slug = fm.slug;
  const url = `/adaptive/${slug}/`;
  const seen = new Map<string, number>();
  const sections: Section[] = [];
  let lastH2: string | null = null;
  let order = 0;

  // Walk headings in document order; the text of a section runs to the next heading of any level.
  const lines = body.split("\n");
  let cur: { heading: string; level: 2 | 3; anchor: string; parent: string | null; buf: string[] } = { heading: fm.title ?? slug, level: 2, anchor: "", parent: null, buf: [] };
  const flush = () => {
    const text = cleanText(cur.buf.join("\n"));
    if (!text) return;
    const parts = splitLong(text);
    parts.forEach((t, i) => sections.push({ anchor: cur.anchor, heading: cur.heading, level: cur.level, parent: cur.parent, order: order++, ...(parts.length > 1 ? { part: i + 1 } : {}), text: t, approxTokens: Math.round(t.length / 4) }));
  };
  for (const line of lines) {
    const h = line.match(/^(#{2,3}) (.+)$/);
    if (h) {
      flush();
      const level = h[1].length as 2 | 3;
      const heading = headingText(h[2]);
      const anchor = hugoAnchor(heading, seen);
      if (level === 2) lastH2 = anchor;
      cur = { heading, level, anchor, parent: level === 3 ? lastH2 : null, buf: [] };
    } else cur.buf.push(line);
  }
  flush();

  // Assert anchors against the rendered page when a build is present.
  const html = join(PUBLIC, slug, "index.html");
  if (existsSync(html)) {
    const rendered = readFileSync(html, "utf8");
    for (const s of sections) {
      if (s.anchor && !new RegExp(`id="?${s.anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"?[ >]`).test(rendered)) {
        console.error(`✗ ${slug}: anchor "${s.anchor}" (${s.heading}) not found in rendered HTML`);
        problems++;
      }
    }
  }

  chapters.push({ slug, order: Number(fm.weight), chapter: fm.chapter === "null" ? null : Number(fm.chapter), label: fm.label, title: fm.title, url, sections });
}

chapters.sort((a, b) => a.order - b.order);
const totalTokens = chapters.reduce((n, c) => n + c.sections.reduce((m, s) => m + s.approxTokens, 0), 0);
writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), chapters }, null, 1) + "\n");
console.log(`${chapters.length} chapters, ${chapters.reduce((n, c) => n + c.sections.length, 0)} sections, ~${totalTokens.toLocaleString()} tokens → ${OUT}`);
if (!existsSync(PUBLIC)) console.warn("(no public/adaptive build found — anchors not verified; run hugo first)");
if (problems) { console.error(`${problems} anchor problem(s)`); process.exit(1); }
