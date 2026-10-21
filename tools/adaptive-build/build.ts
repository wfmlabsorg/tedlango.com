#!/usr/bin/env bun
/**
 * Adaptive online edition — content pipeline.
 *
 * LaTeX source (~/cloud/projects/adaptive-book) → content/adaptive/*.md,
 * data/adaptive/glossary.json. Idempotent; re-run after any source change.
 *
 *   bun tools/adaptive-build/build.ts            # all units
 *   bun tools/adaptive-build/build.ts 1 7        # only chapters 1 and 7
 *
 * Requires pandoc ≥ 3 on PATH. Figures are produced separately by pdf2svg.py.
 */
import { $ } from "bun";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const HOME = process.env.HOME!;
const LATEX = join(HOME, "cloud/projects/adaptive-book/01-source/Adaptive LaTeX");
const CHAPTERS_TXT = join(HOME, "cloud/projects/adaptive-book-audio-ebook/Audiobook/chapters.txt");
const SITE = join(import.meta.dir, "../..");
const OUT = join(SITE, "content/adaptive");
const DATA = join(SITE, "data/adaptive");
const BASE_URL = "/adaptive/";

// ---------------------------------------------------------------------------
// Book structure
// ---------------------------------------------------------------------------

type Unit = {
  key: string;            // "foreword" | "chapter7" | ...
  slug: string;
  label: string;          // "Foreword" | "Chapter 7"
  chapter: number | null;
  weight: number;
  part: string | null;
  audio: string | null;   // file name in R2 (adaptive/<audio>)
  audioTitle: string | null; // title in chapters.txt
  wiki: string | null;
  hero: string | null;    // static/img/book/<hero>.svg
  files: string[];        // tex files relative to LATEX, in include order
};

const CHAPTER_SLUGS: Record<number, string> = {
  1: "chapter-01-evolution-of-work", 2: "chapter-02-historical-context", 3: "chapter-03-change-drivers",
  4: "chapter-04-frameworks", 5: "chapter-05-variance-and-volatility", 6: "chapter-06-maturity-model",
  7: "chapter-07-level-1-initial", 8: "chapter-08-level-2-foundational", 9: "chapter-09-level-3-progressive",
  10: "chapter-10-level-4-advanced", 11: "chapter-11-level-5-pioneering", 12: "chapter-12-journey-forward",
};
const WIKI: Record<number, string> = {
  1: "The Collaborative Intelligence Era", 2: "The Four Eras of Workforce Management", 3: "The Ten Change Drivers",
  4: "Framework Selection for Workforce Transformation", 5: "Variance and Volatility in Service Operations",
  6: "The Maturity Model as a Transformation Framework", 7: "Level 1: The Excel Foundation",
  8: "Level 2: Structured Workforce Management", 9: "Level 3: The Automation Layer",
  10: "Level 4: Planning in Distributions", 11: "Level 5: Adaptive Orchestration", 12: "The Maturity Diagnostic and Pathways",
};
const HERO: Record<number, string> = {
  1: "evolution-of-work", 2: "four-eras", 3: "change-drivers", 4: "grpit-framework", 5: "moving-target",
  6: "maturity-model", 7: "deterministic-dna", 8: "operations-whiplash", 9: "crossing-chasm",
  10: "ecosystem", 11: "adaptive-loop", 12: "quickstart-30-60-90",
};
const PART_I = "Part I — Adaptive Foundations: Context, Drivers, and Frameworks";
const PART_II = "Part II — The Five-Level Playbook to Enterprise Orchestration";

function readUnits(): Unit[] {
  const ebook = readFileSync(join(LATEX, "ebook.tex"), "utf8");
  const includes = [...ebook.matchAll(/\\(?:include|input)\{([^}]+)\}/g)].map((m) => m[1]).filter((p) => !p.startsWith("lib/"));
  const chapterFiles: Record<number, string[]> = {};
  for (const inc of includes) {
    const m = inc.match(/^chapters\/chapter(\d+)\//);
    if (m && existsSync(join(LATEX, inc + ".tex"))) (chapterFiles[+m[1]] ??= []).push(inc + ".tex");
  }
  const units: Unit[] = [
    { key: "foreword", slug: "foreword", label: "Foreword", chapter: null, weight: 1, part: null, audio: "foreword.mp3", audioTitle: "Foreword", wiki: null, hero: "core-tension", files: ["foreword.tex"] },
    { key: "preface", slug: "preface", label: "Preface", chapter: null, weight: 2, part: null, audio: "preface.mp3", audioTitle: "Preface", wiki: null, hero: "pace-of-change", files: ["preface.tex"] },
  ];
  for (let n = 1; n <= 12; n++) {
    units.push({
      key: `chapter${n}`, slug: CHAPTER_SLUGS[n], label: `Chapter ${n}`, chapter: n, weight: 10 + n,
      part: n <= 6 ? PART_I : PART_II, audio: `chapter-${String(n).padStart(2, "0")}.mp3`,
      audioTitle: `Chapter ${n}:`, wiki: WIKI[n], hero: HERO[n], files: chapterFiles[n],
    });
  }
  units.push(
    { key: "acknowledgements", slug: "acknowledgements", label: "Acknowledgments", chapter: null, weight: 30, part: null, audio: null, audioTitle: null, wiki: null, hero: null, files: ["acknowledgements.tex"] },
    { key: "companion", slug: "wfm-labs-companion", label: "Appendix", chapter: null, weight: 31, part: null, audio: null, audioTitle: null, wiki: "Adaptive Concepts", hero: "results-compound", files: ["chapters/appendix/wfmlabs-companion.tex"] },
  );
  return units;
}

// Durations (seconds) from the FFMETADATA chapter list used to build the M4B.
function readDurations(): Map<string, number> {
  const txt = readFileSync(CHAPTERS_TXT, "utf8");
  const out = new Map<string, number>();
  for (const block of txt.split("[CHAPTER]").slice(1)) {
    const start = +block.match(/START=(\d+)/)![1], end = +block.match(/END=(\d+)/)![1];
    const title = block.match(/title=(.*)/)![1].trim();
    out.set(title, Math.round((end - start) / 1000));
  }
  return out;
}
function durationFor(u: Unit, d: Map<string, number>): number | null {
  if (!u.audioTitle) return null;
  for (const [t, s] of d) if (t === u.audioTitle || t.startsWith(u.audioTitle + " ")) return s;
  throw new Error(`no duration for ${u.key}`);
}

import { hugoAnchor } from "./anchors";

const plainText = (s: string) =>
  s.replace(/\\(?:emph|textbf|textit|mbox|text)\{([^}]*)\}/g, "$1")
    .replace(/\\(?:cref|Cref|ref|label)\{[^}]*\}/g, "")
    .replace(/\\[a-zA-Z]+\s*/g, "").replace(/[{}]/g, "").replace(/\s+/g, " ").trim();

// ---------------------------------------------------------------------------
// Cross-reference index: label → { url, text }
// ---------------------------------------------------------------------------
type Ref = { url: string; text: string };

function indexLabels(units: Unit[]): Map<string, Ref> {
  const refs = new Map<string, Ref>();
  for (const u of units) {
    const page = BASE_URL + u.slug + "/";
    const seen = new Map<string, number>();
    let fig = 0, tab = 0;
    const src = u.files.map((f) => readFileSync(join(LATEX, f), "utf8")).join("\n");
    // Walk the source once so heading anchors get the same duplicate suffixes Hugo assigns.
    const re = /\\(chapter|section|subsection|subsubsection)\*?\{((?:[^{}]|\{[^{}]*\})*)\}\s*(?:\\label\{([^}]+)\})?|\\caption\{((?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*)\}\s*\\label\{((?:fig|tab)[^}]*)\}|\\begin\{(figure|table)\}|\\label\{((?:fig|tab)[^}]*)\}/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(src))) {
      if (m[1]) {
        const title = plainText(m[2]);
        if (m[1] === "chapter") { if (m[3]) refs.set(m[3], { url: page, text: u.chapter ? `Chapter ${u.chapter}` : title }); continue; }
        const anchor = hugoAnchor(title, seen);
        if (m[3]) refs.set(m[3], { url: `${page}#${anchor}`, text: `“${title}”` });
      } else if (m[6]) {
      } else {
        const label = m[5] ?? m[7];
        const kind = label.startsWith("fig") ? "Figure" : "Table";
        const n = kind === "Figure" ? ++fig : ++tab;
        const num = u.chapter ? `${u.chapter}.${n}` : String(n);
        refs.set(label, { url: `${page}#${label.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`, text: `${kind} ${num}` });
      }
    }
  }
  return refs;
}

// ---------------------------------------------------------------------------
// LaTeX pre-processing (before pandoc)
// ---------------------------------------------------------------------------
function preprocess(tex: string): string {
  // tcolorbox: pandoc drops the options (and the title). Lift the title into the box body.
  tex = tex.replace(/\\begin\{tcolorbox\}\s*\[([\s\S]*?)\]/g, (_m, opts: string) => {
    const t = opts.match(/title=\{((?:[^{}]|\{[^{}]*\})*)\}/);
    const title = t ? t[1].replace(/\\hfill[\s\S]*$/, "").replace(/\\(small|large|bfseries|normalsize)\b/g, "").trim() : "";
    return `\\begin{tcolorbox}` + (title ? `\n\\textbf{${title}}\\par\n` : "\n");
  });
  tex = tex.replace(/\\begin\{tcolorbox\}\s*\\small\b/g, "\\begin{tcolorbox}");
  tex = tex.replace(/\\addcontentsline\{[^}]*\}\{[^}]*\}\{[^}]*\}/g, "");
  // enumitem options make pandoc drop \item[label]s; the lists render fine without them.
  tex = tex.replace(/\\begin\{(description|itemize|enumerate)\}\s*\[[^\]]*\]/g, "\\begin{$1}");
  // \cref{a,b,c} → one reference per label so each becomes its own link.
  tex = tex.replace(/\\[cC]ref\{([^}]*,[^}]*)\}/g, (_m, list: string) => {
    const parts = list.split(",").map((l) => `\\cref{${l.trim()}}`);
    return parts.length === 2 ? parts.join(" and ") : parts.slice(0, -1).join(", ") + ", and " + parts.at(-1);
  });
  // tabularx column specs (X columns, >{…} prefixes, multi-line) trip pandoc; plain tabular with the same column count is enough for HTML.
  tex = tex.replace(/\\begin\{tabularx\}\{[^}]*\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, (_m, spec: string) => `\\begin{tabular}{${"l".repeat(countColumns(spec))}}`)
    .replace(/\\end\{tabularx\}/g, "\\end{tabular}");
  tex = tex.replace(/\\begin\{tabular\}\{((?:[^{}]|\{[^{}]*\})*>\{(?:[^{}]|\{[^{}]*\})*\}(?:[^{}]|\{[^{}]*\})*)\}/g, (_m, spec: string) => `\\begin{tabular}{${"l".repeat(countColumns(spec))}}`);
  tex = tex.replace(/\\safeincludegraphics/g, "\\includegraphics");
  // Pandoc keeps the glossary arrow macro verbatim.
  tex = tex.replace(/\\ra\b/g, "$\\rightarrow$");
  return tex;
}

function countColumns(spec: string): number {
  const cleaned = spec.replace(/>\{(?:[^{}]|\{[^{}]*\})*\}/g, "").replace(/@\{[^}]*\}/g, "").replace(/\|/g, "");
  return (cleaned.match(/[lcrX]|p\{[^}]*\}/g) ?? []).length || 1;
}

async function pandoc(tex: string): Promise<string> {
  const proc = Bun.spawn(
    ["pandoc", "-f", "latex", "-t", "gfm", "--wrap=none", "--citeproc", "--bibliography", join(LATEX, "bibliography.bib"), "-M", "link-citations=false", "-M", "suppress-bibliography=false"],
    { stdin: new Blob([tex]), stdout: "pipe", stderr: "pipe", cwd: LATEX },
  );
  const [out, err] = await Promise.all([new Response(proc.stdout).text(), new Response(proc.stderr).text()]);
  if ((await proc.exited) !== 0) throw new Error(err);
  if (err.trim()) console.warn(err.trim());
  return out;
}

// ---------------------------------------------------------------------------
// Markdown post-processing (after pandoc)
// ---------------------------------------------------------------------------
const inlineMd = (s: string) =>
  s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");

function postprocess(md: string, u: Unit, refs: Map<string, Ref>): { body: string; title: string; math: boolean } {
  // Title comes from the first H1; the page template renders it.
  const h1 = md.match(/^# (.+)$/m);
  const title = h1 ? h1[1].replace(/\s*\{#.*\}\s*$/, "").trim() : u.label;
  if (h1) md = md.replace(h1[0], "");

  // Figures: <figure id="fig:x"> … <embed src="images/…pdf" /> … <figcaption>…</figcaption></figure>
  // (some figures carry a title paragraph before the image).
  md = md.replace(/<figure id="([^"]+)">([\s\S]*?)<\/figure>/g, (_m, label: string, inner: string) => {
    const ref = refs.get(label);
    const id = label.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
    const cap = inner.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1].trim() ?? "";
    const alt = cap.replace(/[*_`]/g, "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    let body = inner.replace(/<embed src="images\/[^"]*\/([^"/]+)\.pdf"[^>]*\/>/g, (_e, name: string) => `<img src="/img/adaptive/${figureFile(name)}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy">`);
    if (cap) body = body.replace(/<figcaption>[\s\S]*?<\/figcaption>/, `<figcaption>${ref ? `<strong>${ref.text}.</strong> ` : ""}${inlineMd(cap)}</figcaption>`);
    return `<figure class="book-figure" id="${id}">${body.trim() ? "\n" + body.trim() + "\n" : ""}</figure>`;
  });
  // Any remaining embeds (figures without a label).
  md = md.replace(/<embed src="images\/[^"]*\/([^"/]+)\.pdf"[^>]*\/>/g, (_e, name: string) => `<img src="/img/adaptive/${figureFile(name)}" alt="" loading="lazy">`);

  // Table captions: pandoc emits them as a trailing paragraph without an anchor; give labelled tables an id.
  md = md.replace(/<a href="#((?:sec|fig|tab|chap|ch|app):[^"]+)" data-reference-type="[^"]*" data-reference="[^"]*">[^<]*<\/a>/g,
    (_m, label: string) => {
      const ref = refs.get(label);
      if (!ref) { console.warn(`  unresolved \\cref{${label}} in ${u.key}`); return "the referenced section"; }
      return `[${ref.text}](${ref.url})`;
    });
  // \hyperref[label]{text} arrives as [text](#label); resolve it like \cref.
  md = md.replace(/\]\(#((?:sec|fig|tab|chap|ch|app):[^)\s]+)\)/g, (m, label: string) => {
    const ref = refs.get(label);
    if (!ref) { console.warn(`  unresolved \\hyperref[${label}] in ${u.key}`); return m; }
    return `](${ref.url})`;
  });
  // "Table~\ref{…}" → "Table [Table 6.1](…)": drop the doubled word.
  md = md.replace(/\b(Table|Figure|Chapter|Section)[ \u00a0]\[\1 /g, "[$1 "); // "~" arrives as a no-break space
  // Labelled tables arrive wrapped in <div id="tab:x">; use the same slug the cross-reference links point at.
  md = md.replace(/<div id="(tab:[^"]+)">/g, (_m, label: string) => `<div class="book-table" id="${label.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}">`);

  // LaTeX \cite glued to the preceding word → "internet(Narayanan and Kapoor 2025)". Add the space.
  md = md.replace(/([\p{L}\p{N}])\((?=[A-Z][^()\n]{0,80}?\b(?:19|20)\d{2}[a-z]?[);,])/gu, "$1 (");

  // Description-list items arrive as "Label.  \nText" (hard break); bold the label.
  md = md.replace(/^([A-Z][^\n*<]{1,70}[.:])  \n(?=\S)/gm, "**$1**  \n");

  // Callouts and wrappers.
  md = md.replace(/<div class="tcolorbox">/g, '<aside class="callout">');
  md = md.replace(/<div class="samepage">\s*/g, "").replace(/<div class="center">\s*/g, "");
  // Close the aside: pandoc closes every div with </div>; walk and pair them.
  md = pairDivs(md);

  // Bibliography block → References heading, keep CSL markup for styling.
  md = md.replace(/<div id="refs" class="references csl-bib-body hanging-indent"[^>]*>/, '## References\n\n<div id="refs" class="references csl-bib-body">');

  md = md.replace(/<!-- -->/g, "");
  // Literal dollars (pandoc writes "\$") must not pair up with the $…$ of a neighbouring inline formula
  // ("the \$\(\sim\)20M gap" became a display-math block that swallowed the rest of the section). Hide them first.
  md = md.replace(/\\\$/g, "\uE000");
  // Symbol-only inline math → Unicode so most pages never need KaTeX; everything else → \( \) and \[ \] so goldmark
  // passthrough + KaTeX can render it without treating "$2.4M" as math. One left-to-right pass: "$$" opens display
  // math only at a delimiter position, so adjacent inline formulas ("P$_{85}$$\ge$80/30") are never mistaken for one.
  const SYM: Record<string, string> = { "\\rightarrow": "→", "\\to": "→", "\\downarrow": "↓", "\\uparrow": "↑", "\\Rightarrow": "⇒", "\\leftarrow": "←", "\\sim": "~", "\\pm": "±", "\\times": "×", "\\approx": "≈", "\\div": "÷", "\\le": "≤", "\\ge": "≥", "\\leq": "≤", "\\geq": "≥", "\\neq": "≠", "\\infty": "∞", "\\lambda": "λ", "\\mu": "μ", "\\sigma": "σ", "\\Delta": "Δ", "\\cdot": "·" };
  md = md.replace(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g, (_m, disp: string | undefined, inl: string | undefined) => {
    if (disp !== undefined) return `\\[${disp.trim()}\\]`;
    let t = inl!.replace(/\\%/g, "%").replace(/\\,/g, " ");
    for (const [k, v] of Object.entries(SYM).sort((x, y) => y[0].length - x[0].length)) t = t.split(k).join(v); // longest first: \geq before \ge
    const sub = t.match(/^_\{([^{}]*)\}$/);
    if (sub) return `<sub>${sub[1]}</sub>`;
    if (/\\/.test(t) || /[_^]/.test(t)) return `\\(${inl}\\)`; // real math: leave for KaTeX
    t = t.replace(/\{([^{}]{0,3})\}/g, "$1"); // LaTeX spacing braces: FC{=}100, 85%{+}, 312{,}500, 155{-}170
    return t.replace(/\s*([=<>≈])\s*/g, " $1 ").replace(/\s+/g, " ").trim();
  });
  md = md.replace(/\uE000/g, "\\$");
  // Prose in square brackets (an editorial translation, "[ ] Yes / [ ] No" checkboxes) arrives as \[…\], which KaTeX
  // would render as display math and strip the spaces. Unescape spans that contain no math syntax.
  md = md.replace(/\\\[([^\]\n]*)\\\]/g, (m, c: string) => (/[\\$=^_]/.test(c) ? m : `[${c}]`));
  const math = /\\[(\[]/.test(md);

  // Tidy
  md = md.replace(/\n{3,}/g, "\n\n").trim() + "\n";
  return { body: md, title, math };
}

// pdf2svg.py writes .svg, or .png for figures whose vector form is too heavy.
const figureFile = (name: string) => (existsSync(join(SITE, "static/img/adaptive", `${name}.png`)) ? `${name}.png` : `${name}.svg`);

// Replace the closing </div> that matches an opened <aside class="callout"> with </aside>;
// drop closers whose opener was removed (samepage/center).
function pairDivs(md: string): string {
  const stack: string[] = [];
  return md.replace(/<aside class="callout">|<div\b[^>]*>|<\/div>/g, (tag) => {
    if (tag.startsWith("<aside")) { stack.push("aside"); return tag; }
    if (tag.startsWith("<div")) { stack.push("div"); return tag; }
    const top = stack.pop();
    if (top === "aside") return "</aside>";
    if (top === "div") return tag;
    return ""; // orphan closer from an unwrapped div
  });
}

function describe(body: string): string {
  const para = body.split(/\n\s*\n/).find((p) => /^[A-Za-z*“"]/.test(p.trim()) && !p.startsWith("#") && !p.startsWith("<")) ?? "";
  const txt = para.replace(/<[^>]+>/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`]/g, "").replace(/\s+/g, " ").trim();
  if (txt.length <= 180) return txt;
  return txt.slice(0, 177).replace(/\s+\S*$/, "") + "…";
}

const yaml = (v: unknown) => JSON.stringify(v);

// ---------------------------------------------------------------------------
// Glossary
// ---------------------------------------------------------------------------
function buildGlossary(): { term: string; definition: string }[] {
  const tex = readFileSync(join(LATEX, "chapters/glossary.tex"), "utf8");
  const clean = (s: string) =>
    s.replace(/\\textsuperscript\{TM\}/g, "™").replace(/\$\\div\$/g, "÷").replace(/\$\\ra\$/g, "→").replace(/\\slash\b\s*/g, "/")
      .replace(/\\(?:textit|emph|textbf)\{([^}]*)\}/g, "$1").replace(/\\%/g, "%").replace(/\\&/g, "&").replace(/~/g, " ")
      .replace(/\\[a-zA-Z]+\s*/g, "").replace(/[{}]/g, "").replace(/\s+/g, " ").trim();
  const out: { term: string; definition: string }[] = [];
  const re = /\\glsitem\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(tex))) out.push({ term: clean(m[1]), definition: clean(m[2]) });
  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const only = new Set(process.argv.slice(2).map(Number).filter(Boolean));
const units = readUnits();
const durations = readDurations();
const refs = indexLabels(units);
mkdirSync(OUT, { recursive: true });
mkdirSync(DATA, { recursive: true });

for (const u of units) {
  if (only.size && !(u.chapter && only.has(u.chapter))) continue;
  const tex = preprocess(u.files.map((f) => readFileSync(join(LATEX, f), "utf8")).join("\n\n"));
  const { body, title, math } = postprocess(await pandoc(tex), u, refs);
  const duration = durationFor(u, durations);
  const fm = [
    "---",
    `title: ${yaml(title)}`,
    `label: ${yaml(u.label)}`,
    `chapter: ${u.chapter ?? "null"}`,
    `weight: ${u.weight}`,
    `slug: ${yaml(u.slug)}`,
    `description: ${yaml(describe(body))}`,
    u.part ? `part: ${yaml(u.part)}` : null,
    u.audio ? `audio_file: ${yaml(u.audio)}` : null,
    duration ? `audio_duration: ${duration}` : null,
    u.wiki ? `wiki_page: ${yaml(u.wiki)}` : null,
    u.hero ? `hero: ${yaml(`/img/book/${u.hero}.svg`)}` : null,
    math ? "math: true" : null,
    "type: adaptive",
    "---",
  ].filter(Boolean).join("\n");
  writeFileSync(join(OUT, `${u.slug}.md`), `${fm}\n\n${body}`);
  console.log(`${u.slug}: ${body.split(/\s+/).length} words${math ? ", math" : ""}${duration ? `, ${Math.round(duration / 60)} min audio` : ""}`);
}

if (!only.size) {
  const glossary = buildGlossary();
  writeFileSync(join(DATA, "glossary.json"), JSON.stringify(glossary, null, 2) + "\n");
  console.log(`glossary: ${glossary.length} terms`);
}
