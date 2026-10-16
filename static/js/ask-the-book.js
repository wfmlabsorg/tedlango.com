/* Ask the Book — slide-in chat panel grounded in the book text.
   Talks to the book-agent Worker (SSE), renders citations as deep links (book) or wiki links that
   soft-navigate through book-player.js so audio keeps playing. */
(function () {
    'use strict';
    var root = document.getElementById('bookPlayer');
    var AGENT = root && root.getAttribute('data-agent');
    var panel = document.getElementById('askBook');
    if (!AGENT || !panel) return;

    var askBtn = root.querySelector('[data-act="ask"]');
    var msgs = panel.querySelector('.agent-messages');
    var input = panel.querySelector('.agent-input');
    var send = panel.querySelector('.agent-send');
    var suggestions = panel.querySelector('.agent-suggestions');
    var history = [];
    var busy = false;
    askBtn.hidden = false;

    function open() { panel.hidden = false; document.body.classList.add('ask-open'); askBtn.setAttribute('aria-expanded', 'true'); setTimeout(function () { input.focus(); }, 50); }
    function close() { panel.hidden = true; document.body.classList.remove('ask-open'); askBtn.setAttribute('aria-expanded', 'false'); }
    document.addEventListener('adaptive:ask', function () { panel.hidden ? open() : close(); });
    panel.querySelector('.ask-close').addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) close(); });
    // Delegated: "Ask about this chapter" buttons inside swapped content.
    document.querySelector('main').addEventListener('click', function (e) {
        var b = e.target.closest('[data-ask]');
        if (!b) return;
        e.preventDefault();
        open();
        var q = b.getAttribute('data-ask');
        if (q) ask(q);
    });

    function currentChapter() {
        var a = document.querySelector('main [data-chapter]');
        return a && a.getAttribute('data-chapter') || null;
    }

    function addMsg(role, html) {
        var div = document.createElement('div');
        div.className = 'agent-msg agent-msg-' + role;
        div.innerHTML = '<div class="agent-msg-content">' + html + '</div>';
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
        return div.firstChild;
    }

    // Hide a trailing, still-open [[ marker while streaming; strip complete markers (the server numbers them in `done`).
    function liveText(t) { return t.replace(/\[\[[^\]]*\]\]/g, '').replace(/\s*\[\[[^\]]*$/, ''); }

    function renderFinal(el, text, citations) {
        var html = md(text).replace(/\[(\d+)\]/g, function (m, n) {
            var c = citations[n - 1];
            if (!c) return '';
            var ext = c.source === 'wiki' ? ' target="_blank" rel="noopener"' : '';
            return '<a class="cite' + (c.source === 'wiki' ? ' cite-wiki' : '') + '" href="' + c.url + '"' + ext + ' title="' + (c.chapterLabel + ' · ' + c.heading).replace(/"/g, '&quot;') + '">' + n + '</a>';
        });
        if (citations.length) {
            html += '<div class="cite-list">' + citations.map(function (c) {
                if (c.source === 'wiki') {
                    return '<a class="cite-chip cite-chip-wiki" href="' + c.url + '" target="_blank" rel="noopener"><span class="cite-n">' + c.n + '</span><span><strong>' + escapeHtml(c.chapterLabel) + '</strong> · ' + escapeHtml(c.heading) + '</span><span class="cite-go">Open on the wiki ↗</span></a>';
                }
                return '<a class="cite-chip" href="' + c.url + '"><span class="cite-n">' + c.n + '</span><span><strong>' + c.chapterLabel + '</strong> · ' + escapeHtml(c.heading) + '</span><span class="cite-go">Jump to passage →</span></a>';
            }).join('') + '</div>';
        }
        el.innerHTML = html;
        msgs.scrollTop = msgs.scrollHeight;
    }
    function escapeHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

    function ask(question) {
        question = (question || input.value).trim();
        if (!question || busy) return;
        busy = true; send.disabled = true; input.value = '';
        if (suggestions) suggestions.hidden = true;
        addMsg('user', '<p>' + escapeHtml(question) + '</p>');
        var el = addMsg('assistant', '<p class="thinking-text">Reading the book…</p>');
        var full = '';
        var payload = { question: question, history: history.slice(-6), chapter: currentChapter(), stream: true };

        fetch(AGENT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
            .then(function (res) {
                if (!res.ok) return res.json().then(function (j) { throw new Error(j.error || ('HTTP ' + res.status)); }, function () { throw new Error('HTTP ' + res.status); });
                var reader = res.body.getReader(), dec = new TextDecoder(), buf = '', done = false;
                function pump() {
                    return reader.read().then(function (r) {
                        if (r.done) { if (!done) finish(null); return; }
                        buf += dec.decode(r.value, { stream: true });
                        var parts = buf.split('\n\n'); buf = parts.pop();
                        parts.forEach(function (chunk) {
                            var ev = (chunk.match(/^event: (.+)$/m) || [])[1];
                            var dataLine = (chunk.match(/^data: (.+)$/m) || [])[1];
                            if (!ev || !dataLine) return;
                            var data = JSON.parse(dataLine);
                            if (ev === 'delta') { full += data.text; el.innerHTML = md(liveText(full)); msgs.scrollTop = msgs.scrollHeight; }
                            else if (ev === 'done') { done = true; finish(data); }
                            else if (ev === 'error') { done = true; throw new Error(data.error); }
                        });
                        return pump();
                    });
                }
                return pump();
            })
            .catch(function (err) {
                el.innerHTML = '<p class="thinking-text">' + escapeHtml(err.message || 'Something went wrong. Try again.') + '</p>';
                busy = false; send.disabled = false;
            });

        function finish(data) {
            var text = data ? data.text : liveText(full);
            var cites = data ? data.citations : [];
            renderFinal(el, text, cites);
            history.push({ role: 'user', content: question }, { role: 'assistant', content: text.replace(/\s\[\d+\]/g, '') });
            busy = false; send.disabled = false;
            if (typeof gtag === 'function') gtag('event', 'ask_the_book', { chapter: currentChapter() || 'home', cold: data && data.usage ? data.usage.cacheRead === 0 : undefined });
        }
    }

    send.addEventListener('click', function () { ask(); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); } });
    panel.querySelectorAll('.agent-chip').forEach(function (chip) {
        chip.addEventListener('click', function () { ask(chip.getAttribute('data-q') || chip.textContent); });
    });
    // Citation links: close nothing — the reader can keep the panel open while the page swaps underneath.
})();
