/* Adaptive — reader shell: soft navigation between chapters, a persistent audiobook
   player, glossary popovers and on-demand KaTeX. Vanilla JS, no dependencies.
   The player lives outside <main>; chapter pages are swapped into <main>. */
(function () {
    'use strict';
    var SECTION = '/adaptive/';
    var STORE_KEY = 'adaptive.player.v1';
    var RATES = [0.8, 1, 1.25, 1.5, 1.75, 2];
    var SKIP = 15;

    var manifest = JSON.parse(document.getElementById('bookManifest').textContent);
    var glossary = JSON.parse(document.getElementById('bookGlossary').textContent || '[]');
    var chapters = manifest.chapters;
    var bySlug = {};
    chapters.forEach(function (c) { bySlug[c.slug] = c; });

    var root = document.getElementById('bookPlayer');
    var audio = document.getElementById('bookAudio');
    var main = document.querySelector('main');
    var el = {
        seek: root.querySelector('.player-seek'), cur: root.querySelector('.player-cur'), dur: root.querySelector('.player-dur'),
        title: root.querySelector('.player-title'), eyebrow: root.querySelector('.player-eyebrow'), goto: root.querySelector('.player-goto'),
        play: root.querySelector('.player-play'), rate: root.querySelector('.player-rate'), list: root.querySelector('.player-chapters'),
        chaptersBtn: root.querySelector('[data-act="chapters"]')
    };

    // ---------- state ----------
    var state = load();
    function load() {
        try { var s = JSON.parse(localStorage.getItem(STORE_KEY)); if (s && s.positions) return s; } catch (e) { /* private mode */ }
        return { slug: null, positions: {}, completed: [], rate: 1, updatedAt: 0 };
    }
    var saveTimer = 0;
    function save(now) {
        state.updatedAt = Date.now();
        if (now) { flush(); return; }
        if (!saveTimer) saveTimer = setTimeout(flush, 5000);
    }
    function flush() {
        saveTimer = 0;
        try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    }

    var current = state.slug && bySlug[state.slug] ? bySlug[state.slug] : null;
    var seeking = false;

    // ---------- helpers ----------
    function fmt(s) {
        s = Math.max(0, Math.floor(s || 0));
        var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
        return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(sec).padStart(2, '0');
    }
    function pageSlug() {
        var a = main.querySelector('[data-chapter]');
        return a ? a.getAttribute('data-chapter') : '';
    }
    function duration() { return (audio.duration && isFinite(audio.duration)) ? audio.duration : (current ? current.duration : 0); }

    // ---------- player ----------
    function loadChapter(slug, autoplay) {
        var c = bySlug[slug];
        if (!c) return;
        var changed = !current || current.slug !== slug;
        if (changed) {
            if (current) rememberPosition();
            current = c;
            state.slug = slug;
            audio.src = c.audio;
            var pos = state.positions[slug] || 0;
            if (pos > c.duration - 5) pos = 0;
            audio.currentTime = 0;
            // Seek once metadata is available; setting currentTime before that is unreliable on iOS.
            audio.addEventListener('loadedmetadata', function once() {
                audio.removeEventListener('loadedmetadata', once);
                if (pos > 0) audio.currentTime = pos;
            });
            if (pos > 0 && audio.readyState >= 1) audio.currentTime = pos;
            el.seek.value = c.duration ? Math.round(pos / c.duration * 1000) : 0;
            el.cur.textContent = fmt(pos);
            el.dur.textContent = fmt(c.duration);
            save(true);
        }
        audio.playbackRate = state.rate || 1;
        renderMeta();
        renderList();
        updateListenButtons();
        if (autoplay) {
            root.setAttribute('data-state', 'loading');
            var p = audio.play();
            if (p && p.catch) p.catch(function () { root.setAttribute('data-state', 'paused'); });
        }
    }
    function rememberPosition() {
        if (!current) return;
        if (audio.currentTime > 1) state.positions[current.slug] = audio.currentTime;
    }
    function toggle() {
        if (!current) { loadChapter(pageSlug() && bySlug[pageSlug()] ? pageSlug() : chapters[0].slug, true); return; }
        if (audio.paused) loadChapter(current.slug, true); else audio.pause();
    }
    function skip(delta) {
        if (!current) return;
        audio.currentTime = Math.min(Math.max(0, audio.currentTime + delta), duration() || Infinity);
    }
    function step(dir, autoplay) {
        if (!current) return;
        var n = chapters[current.order + dir];
        if (n) loadChapter(n.slug, autoplay);
    }
    function cycleRate(dir) {
        var i = RATES.indexOf(state.rate || 1);
        i = Math.min(RATES.length - 1, Math.max(0, (i < 0 ? 1 : i) + dir));
        state.rate = RATES[i];
        audio.playbackRate = state.rate;
        el.rate.textContent = state.rate + '×';
        save();
    }

    function renderMeta() {
        var slugHere = pageSlug();
        if (current) {
            el.eyebrow.textContent = audio.paused ? (state.positions[current.slug] ? 'Resume' : 'Listen') : 'Now playing';
            el.title.textContent = current.label + ' · ' + current.title;
            el.title.href = current.url;
            var elsewhere = slugHere && slugHere !== current.slug;
            el.goto.hidden = !elsewhere;
            el.goto.href = current.url;
        } else {
            el.eyebrow.textContent = 'Audiobook';
            el.title.textContent = 'Adaptive — ' + manifest.author + ' reads the book';
            el.title.href = SECTION;
            el.goto.hidden = true;
        }
        el.play.textContent = audio.paused ? '▶' : '❚❚';
        el.play.setAttribute('aria-label', audio.paused ? 'Play' : 'Pause');
        el.rate.textContent = (state.rate || 1) + '×';
        root.setAttribute('data-state', !current ? 'idle' : audio.paused ? 'paused' : 'playing');
        document.body.classList.add('has-player');
    }
    function renderList() {
        el.list.innerHTML = chapters.map(function (c) {
            var pos = state.positions[c.slug];
            var done = state.completed.indexOf(c.slug) >= 0;
            var extra = done ? '<small class="done">✓ finished</small>' : pos ? '<small>' + fmt(pos) + ' / ' + fmt(c.duration) + '</small>' : '<small>' + fmt(c.duration) + '</small>';
            return '<button type="button" data-chapter-pick="' + c.slug + '"' + (current && current.slug === c.slug ? ' class="is-active"' : '') + '>' +
                '<small>' + c.label + '</small><span>' + c.title + '</span>' + extra + '</button>';
        }).join('');
    }
    function updateListenButtons() {
        main.querySelectorAll('[data-listen]').forEach(function (b) {
            var slug = b.getAttribute('data-listen');
            var pos = state.positions[slug];
            var isCur = current && current.slug === slug;
            if (b.classList.contains('book-toc-play')) {
                var item = b.closest('.book-toc-item');
                if (item) {
                    item.classList.toggle('is-current', !!isCur);
                    item.classList.toggle('is-done', state.completed.indexOf(slug) >= 0);
                }
                if (isCur && !audio.paused) b.textContent = '❚❚ playing';
                else if (pos) b.textContent = '▶ resume ' + fmt(pos);
                return;
            }
            if (isCur && !audio.paused) b.textContent = '❚❚ Pause';
            else if (pos && pos > 5) b.textContent = '▶ Resume · ' + fmt(pos);
            else b.textContent = '▶ Listen to this chapter';
        });
        var start = main.querySelector('[data-start-reading]');
        if (start && current) { start.textContent = 'Continue reading'; start.href = current.url; }
        var listen = main.querySelector('[data-start-listening]');
        if (listen && current) { listen.setAttribute('data-listen', current.slug); listen.textContent = '▶ Resume listening'; }
    }

    // MediaSession (lock screen / headphones)
    function updateSession() {
        if (!('mediaSession' in navigator) || !current) return;
        try {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: current.label + ' · ' + current.title, artist: manifest.author, album: manifest.title,
                artwork: [{ src: location.origin + manifest.cover, sizes: '512x512', type: 'image/png' }]
            });
        } catch (e) { /* ignore */ }
    }
    if ('mediaSession' in navigator) {
        var ms = navigator.mediaSession;
        var handlers = {
            play: function () { toggle(); }, pause: function () { audio.pause(); },
            seekbackward: function () { skip(-SKIP); }, seekforward: function () { skip(SKIP); },
            previoustrack: function () { step(-1, true); }, nexttrack: function () { step(1, true); },
            seekto: function (d) { if (d && typeof d.seekTime === 'number') audio.currentTime = d.seekTime; }
        };
        Object.keys(handlers).forEach(function (k) { try { ms.setActionHandler(k, handlers[k]); } catch (e) { /* unsupported */ } });
    }
    function positionState() {
        if (!('mediaSession' in navigator) || !navigator.mediaSession.setPositionState || !duration()) return;
        try { navigator.mediaSession.setPositionState({ duration: duration(), playbackRate: audio.playbackRate, position: Math.min(audio.currentTime, duration()) }); } catch (e) { /* ignore */ }
    }

    // ---------- audio events ----------
    audio.addEventListener('play', function () { renderMeta(); renderList(); updateListenButtons(); updateSession(); });
    audio.addEventListener('pause', function () { rememberPosition(); save(true); renderMeta(); updateListenButtons(); });
    audio.addEventListener('ratechange', positionState);
    audio.addEventListener('timeupdate', function () {
        if (!current || seeking) return;
        var d = duration();
        el.cur.textContent = fmt(audio.currentTime);
        if (d) { el.seek.value = Math.round(audio.currentTime / d * 1000); el.dur.textContent = fmt(d); }
        rememberPosition();
        save();
        positionState();
    });
    audio.addEventListener('ended', function () {
        if (!current) return;
        if (state.completed.indexOf(current.slug) < 0) state.completed.push(current.slug);
        delete state.positions[current.slug];
        save(true);
        var next = chapters[current.order + 1];
        if (next) loadChapter(next.slug, true); else { renderMeta(); renderList(); }
    });
    audio.addEventListener('error', function () { root.setAttribute('data-state', 'paused'); el.eyebrow.textContent = 'Audio unavailable — try again'; });

    el.seek.addEventListener('input', function () { seeking = true; el.cur.textContent = fmt(el.seek.value / 1000 * duration()); });
    el.seek.addEventListener('change', function () { seeking = false; if (current) audio.currentTime = el.seek.value / 1000 * duration(); });

    root.addEventListener('click', function (e) {
        var pick = e.target.closest('[data-chapter-pick]');
        if (pick) { loadChapter(pick.getAttribute('data-chapter-pick'), true); closeList(); return; }
        var b = e.target.closest('[data-act]');
        if (!b) return;
        switch (b.getAttribute('data-act')) {
            case 'toggle': toggle(); break;
            case 'back': skip(-SKIP); break;
            case 'fwd': skip(SKIP); break;
            case 'prev': step(-1, !audio.paused); break;
            case 'next': step(1, !audio.paused); break;
            case 'rate': cycleRate(state.rate >= 2 ? -5 : 1); break;
            case 'chapters': el.list.hidden ? openList() : closeList(); break;
            case 'ask': document.dispatchEvent(new CustomEvent('adaptive:ask')); break;
        }
    });
    function openList() { renderList(); el.list.hidden = false; el.chaptersBtn.setAttribute('aria-expanded', 'true'); }
    function closeList() { el.list.hidden = true; el.chaptersBtn.setAttribute('aria-expanded', 'false'); }
    document.addEventListener('click', function (e) { if (!el.list.hidden && !root.contains(e.target)) closeList(); });

    // Listen buttons inside swapped content (delegated).
    main.addEventListener('click', function (e) {
        var b = e.target.closest('[data-listen]');
        if (!b) return;
        e.preventDefault();
        var slug = b.getAttribute('data-listen');
        if (current && current.slug === slug && !audio.paused) audio.pause(); else loadChapter(slug, true);
    });

    // Keyboard shortcuts (never while typing or on focused controls).
    document.addEventListener('keydown', function (e) {
        var t = e.target;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.tagName === 'BUTTON' || t.isContentEditable)) return;
        switch (e.key) {
            case ' ': case 'k': e.preventDefault(); toggle(); break;
            case 'j': case 'ArrowLeft': skip(-SKIP); break;
            case 'l': case 'ArrowRight': skip(SKIP); break;
            case ',': cycleRate(-1); break;
            case '.': cycleRate(1); break;
            case 'N': step(1, !audio.paused); break;
            case 'P': step(-1, !audio.paused); break;
        }
    });
    window.addEventListener('pagehide', function () { rememberPosition(); flush(); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) { rememberPosition(); flush(); } });

    // ---------- content enhancements (run on every page render) ----------
    function enhance() {
        if (root.getAttribute('data-agent')) main.querySelectorAll('[data-ask]').forEach(function (b) { b.hidden = false; });
        decorateGlossary();
        renderMath();
        updateListenButtons();
        renderMeta();
    }
    var SKIP_TAGS = { A: 1, CODE: 1, PRE: 1, H1: 1, H2: 1, H3: 1, H4: 1, ABBR: 1, SCRIPT: 1, STYLE: 1, FIGCAPTION: 1, BUTTON: 1 };
    function decorateGlossary() {
        var content = main.querySelector('.book-content');
        if (!content || !glossary.length || content.getAttribute('data-glossed')) return;
        content.setAttribute('data-glossed', '1');
        var seen = {};
        var terms = glossary.filter(function (g) { return g.term.length >= 3 && !/\(/.test(g.term); })
            .sort(function (a, b) { return b.term.length - a.term.length; });
        var re = new RegExp('\\b(' + terms.map(function (g) { return g.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b');
        var defs = {}; terms.forEach(function (g) { defs[g.term] = g.definition; });
        var walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                for (var p = n.parentNode; p && p !== content; p = p.parentNode) { if (SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT; }
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(function (node) {
            var text = node.nodeValue, m, out = document.createDocumentFragment(), last = 0, hit = false;
            var local = new RegExp(re.source, 'g');
            while ((m = local.exec(text))) {
                if (seen[m[1]]) continue;
                seen[m[1]] = true; hit = true;
                out.appendChild(document.createTextNode(text.slice(last, m.index)));
                var abbr = document.createElement('abbr');
                abbr.className = 'gloss'; abbr.textContent = m[1]; abbr.setAttribute('data-def', defs[m[1]]); abbr.setAttribute('tabindex', '0');
                out.appendChild(abbr);
                last = m.index + m[1].length;
            }
            if (hit) { out.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(out, node); }
        });
    }
    main.addEventListener('click', function (e) {
        var g = e.target.closest('.gloss');
        main.querySelectorAll('.gloss.open').forEach(function (o) { if (o !== g) o.classList.remove('open'); });
        if (g) g.classList.toggle('open');
    });
    function renderMath() {
        var page = main.querySelector('[data-math]');
        if (!page) return;
        var go = function () {
            if (window.renderMathInElement) window.renderMathInElement(page, { delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }], throwOnError: false });
        };
        if (window.renderMathInElement) return go();
        if (document.getElementById('katexCss')) return; // loading
        var css = document.createElement('link'); css.id = 'katexCss'; css.rel = 'stylesheet';
        css.href = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.21/katex.min.css'; document.head.appendChild(css);
        var s1 = document.createElement('script'); s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.21/katex.min.js';
        s1.onload = function () {
            var s2 = document.createElement('script'); s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.21/contrib/auto-render.min.js';
            s2.onload = go; document.head.appendChild(s2);
        };
        document.head.appendChild(s1);
    }

    // ---------- soft navigation ----------
    history.scrollRestoration = 'manual';
    var scrollPositions = {};
    function softLink(a) {
        if (!a || a.target || a.hasAttribute('download') || a.getAttribute('data-pjax') === 'false') return null;
        var href = a.getAttribute('href'); if (!href) return null;
        var url;
        try { url = new URL(a.href, location.href); } catch (e) { return null; }
        if (url.origin !== location.origin || url.pathname.indexOf(SECTION) !== 0) return null;
        if (/\.(mp3|json|xml|pdf|svg|png)$/i.test(url.pathname)) return null;
        if (url.pathname === location.pathname && url.hash) return null; // same-page anchor: let the browser scroll
        return url;
    }
    document.addEventListener('click', function (e) {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        var a = e.target.closest('a[href]');
        var url = softLink(a);
        if (!url) return;
        e.preventDefault();
        navigate(url.href, true);
    });
    document.addEventListener('mouseover', function (e) {
        var a = e.target.closest('a[href]'); var url = softLink(a);
        if (url && !a.__prefetched) { a.__prefetched = true; fetch(url.href, { credentials: 'same-origin' }).catch(function () { }); }
    });
    window.addEventListener('popstate', function () {
        navigate(location.href, false);
    });
    function navigate(href, push) {
        scrollPositions[location.href] = window.scrollY;
        fetch(href, { credentials: 'same-origin', headers: { 'X-Requested-With': 'adaptive' } }).then(function (r) {
            if (!r.ok || !/text\/html/.test(r.headers.get('content-type') || '')) throw new Error('bad response');
            return r.text().then(function (html) { return { html: html, url: r.url || href }; });
        }).then(function (res) {
            var doc = new DOMParser().parseFromString(res.html, 'text/html');
            var newMain = doc.querySelector('main');
            if (!newMain || !doc.getElementById('bookPlayer')) throw new Error('not a book page');
            main.innerHTML = newMain.innerHTML;
            document.title = doc.title;
            swapMeta(doc, 'link[rel="canonical"]', 'href');
            swapMeta(doc, 'meta[name="description"]', 'content');
            swapMeta(doc, 'meta[property="og:url"]', 'content');
            if (push) history.pushState({ adaptive: true }, '', res.url);
            var hash = new URL(res.url).hash;
            var target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
            if (target) target.scrollIntoView();
            else if (!push && scrollPositions[res.url] != null) window.scrollTo(0, scrollPositions[res.url]);
            else window.scrollTo(0, 0);
            if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
            main.focus({ preventScroll: true });
            closeList();
            enhance();
            if (typeof gtag === 'function') gtag('event', 'page_view', { page_location: res.url, page_title: doc.title });
            document.dispatchEvent(new CustomEvent('adaptive:navigated', { detail: { url: res.url } }));
        }).catch(function () { location.href = href; });
    }
    function swapMeta(doc, sel, attr) {
        var src = doc.querySelector(sel), dst = document.querySelector(sel);
        if (src && dst) dst.setAttribute(attr, src.getAttribute(attr));
    }
    if (history.state == null) history.replaceState({ adaptive: true }, '', location.href);

    // ---------- boot ----------
    if (current) { audio.src = current.audio; audio.playbackRate = state.rate || 1; var p0 = state.positions[current.slug]; if (p0) { el.seek.value = Math.round(p0 / current.duration * 1000); el.cur.textContent = fmt(p0); el.dur.textContent = fmt(current.duration); } }
    renderList();
    enhance();
    // Deep links from the wiki: ?listen=1 preloads this chapter (no autoplay without a gesture).
    if (/[?&]listen=1/.test(location.search) && bySlug[pageSlug()]) loadChapter(pageSlug(), false);
    var hashTarget = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (hashTarget) hashTarget.scrollIntoView();
})();
