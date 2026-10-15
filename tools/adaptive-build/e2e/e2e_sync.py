"""E2E: two-way audio/page sync + Chapter 6 wiki links, against the local Hugo server."""
import sys, json
from playwright.sync_api import sync_playwright

BASE = "http://localhost:1313"
fails = []
def check(cond, msg):
    print(("  ok  " if cond else "  FAIL") + " " + msg)
    if not cond: fails.append(msg)

with sync_playwright() as p:
    b = p.chromium.launch(args=["--autoplay-policy=no-user-gesture-required", "--mute-audio"])
    ctx = b.new_context()
    page = ctx.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))

    print("[wiki links on chapter 6]")
    page.goto(BASE + "/adaptive/chapter-06-maturity-model/")
    page.wait_for_selector(".book-content[data-wikilinked]")
    links = page.eval_on_selector_all(".book-content a.wiki-link", "els => els.map(a => ({t: a.textContent.replace('↗',''), h: a.href, tgt: a.target, rel: a.rel}))")
    print("   inline wiki links:", len(links))
    for l in links[:40]: print("     ", repr(l["t"]), "→", l["h"].split("/wiki/")[1])
    check(len(links) >= 15, "at least 15 inline wiki links rendered")
    check(all(l["tgt"] == "_blank" and "noopener" in l["rel"] for l in links), "all wiki links open in a new tab with noopener")
    texts = [l["t"].lower() for l in links]
    check(len(texts) == len(set(texts)), "each term linked once only")
    check(any("erlang_c" in l["h"].lower() for l in links), "Erlang‑C (non-breaking hyphen) linked to the Erlang C page")
    check(page.locator(".book-content a.wiki-link abbr.gloss").count() == 0, "no glossary popover nested inside a wiki link")
    deeper = page.eval_on_selector_all(".book-deeper a", "els => els.map(a => [a.textContent, a.target])")
    check(len(deeper) == 9 and all(t == "_blank" for _, t in deeper), "Go deeper section lists 9 new-tab links")
    check(page.locator("h2#deeperTitle").count() == 1, "Go deeper heading present")
    page.goto(BASE + "/adaptive/chapter-07-level-1-initial/")
    page.wait_for_selector(".book-content[data-glossed]")
    check(page.locator(".book-content a.wiki-link").count() == 0 and page.locator(".book-deeper").count() == 0, "chapter 7 (not in pilot) has no wiki links or section")

    print("[audio → page]")
    page.goto(BASE + "/adaptive/chapter-07-level-1-initial/")
    page.wait_for_selector("[data-listen]")
    page.locator("main [data-listen]").first.click()
    page.wait_for_function("document.getElementById('bookPlayer').getAttribute('data-state') !== 'idle'")
    src = page.evaluate("document.getElementById('bookAudio').src")
    check(src.endswith("chapter-07.mp3"), f"Listen loads chapter 7 audio ({src.rsplit('/',1)[-1]})")
    page.locator('#bookPlayer [data-act="next"]').click()
    page.wait_for_function("document.querySelector('main [data-chapter]') && document.querySelector('main [data-chapter]').getAttribute('data-chapter') === 'chapter-08-level-2-foundational'", timeout=10000)
    check("/chapter-08-level-2-foundational/" in page.url, f"player Next moved the page to chapter 8 ({page.url.split('/adaptive/')[1]})")
    src = page.evaluate("document.getElementById('bookAudio').src")
    check(src.endswith("chapter-08.mp3"), "audio is chapter 8")
    check(page.evaluate("document.title").startswith("Level 2"), f"document title updated ({page.evaluate('document.title')[:40]})")
    page.locator('#bookPlayer [data-act="prev"]').click()
    page.wait_for_function("document.querySelector('main [data-chapter]').getAttribute('data-chapter') === 'chapter-07-level-1-initial'", timeout=10000)
    check("/chapter-07-level-1-initial/" in page.url, "player Prev moved the page back to chapter 7")
    # chapter list pick
    page.locator('#bookPlayer [data-act="chapters"]').click()
    page.locator('#bookPlayer [data-chapter-pick="chapter-09-level-3-progressive"]').click()
    page.wait_for_function("document.querySelector('main [data-chapter]').getAttribute('data-chapter') === 'chapter-09-level-3-progressive'", timeout=10000)
    check("/chapter-09-level-3-progressive/" in page.url, "picking chapter 9 from the player list moved the page to chapter 9")

    print("[page → audio]")
    state = page.evaluate("document.getElementById('bookPlayer').getAttribute('data-state')")
    page.locator("main a[href*='/adaptive/chapter-10-level-4-advanced/']").first.click()
    page.wait_for_function("document.querySelector('main [data-chapter]').getAttribute('data-chapter') === 'chapter-10-level-4-advanced'", timeout=10000)
    page.wait_for_function("document.getElementById('bookAudio').src.endsWith('chapter-10.mp3')", timeout=10000)
    check(True, "following a page link to chapter 10 switched the audio to chapter 10")
    state2 = page.evaluate("document.getElementById('bookPlayer').getAttribute('data-state')")
    check(state2 in ("playing", "loading") if state == "playing" else True, f"play state preserved across the switch ({state} → {state2})")
    page.go_back()
    page.wait_for_function("document.querySelector('main [data-chapter]').getAttribute('data-chapter') === 'chapter-09-level-3-progressive'", timeout=10000)
    page.wait_for_function("document.getElementById('bookAudio').src.endsWith('chapter-09.mp3')", timeout=10000)
    check(True, "browser Back returned to chapter 9 text and audio")
    # non-chapter page: audio stays
    page.locator("main a.btn[href='/adaptive/']").first.click()
    page.wait_for_function("document.querySelector('main [data-chapter]') && document.querySelector('main [data-chapter]').getAttribute('data-chapter') === ''", timeout=10000)
    src = page.evaluate("document.getElementById('bookAudio').src")
    check(src.endswith("chapter-09.mp3"), "going to the contents page keeps chapter 9 audio")

    check(not errors, f"no page errors ({errors[:2]})")
    b.close()

print("\n" + ("ALL PASSED" if not fails else f"{len(fails)} FAILED: " + "; ".join(fails)))
sys.exit(1 if fails else 0)
