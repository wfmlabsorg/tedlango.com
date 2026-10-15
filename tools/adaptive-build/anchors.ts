// ---------------------------------------------------------------------------
// Hugo anchor ids ("github" auto-id style): letters/digits lowercased, space
// and '-' → '-', '_' kept, everything else dropped; duplicates get -1, -2…
// ---------------------------------------------------------------------------
export function hugoAnchor(text: string, seen?: Map<string, number>): string {
  let id = "";
  for (const ch of text.normalize("NFC")) {
    if (/[\p{L}\p{N}]/u.test(ch)) id += ch.toLowerCase();
    else if (ch === " " || ch === "-") id += "-";
    else if (ch === "_") id += "_";
  }
  if (!seen) return id;
  const n = seen.get(id) ?? 0;
  seen.set(id, n + 1);
  return n === 0 ? id : `${id}-${n}`;
}
