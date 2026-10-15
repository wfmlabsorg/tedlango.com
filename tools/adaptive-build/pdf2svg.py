#!/usr/bin/env python3
"""Render each single-page PDF figure from the Adaptive LaTeX source to SVG.

Usage: python pdf2svg.py <latex-images-dir> <out-dir>
Text is converted to paths so the figures render identically without the
book's fonts installed.
"""
import pathlib
import sys

import pymupdf

MAX_SVG_BYTES = 600 * 1024
src = pathlib.Path(sys.argv[1])
out = pathlib.Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)

for pdf in sorted(src.rglob("*.pdf")):
    doc = pymupdf.open(pdf)
    page = doc[0]
    svg = page.get_svg_image(text_as_path=True)
    for stale in (out / (pdf.stem + ".svg"), out / (pdf.stem + ".png")):
        stale.unlink(missing_ok=True)
    if len(svg) > MAX_SVG_BYTES:
        # Text-heavy charts explode as paths; a 180-dpi PNG is a third of the size.
        target = out / (pdf.stem + ".png")
        page.get_pixmap(dpi=180, alpha=False).save(target)
    else:
        target = out / (pdf.stem + ".svg")
        target.write_text(svg, encoding="utf-8")
    print(f"{pdf.relative_to(src)} -> {target.name} ({target.stat().st_size // 1024} KB)")
