/* Minimal markdown → HTML for chat replies. Shared by the resume agent (home page) and Ask the Book.
   Globals on purpose: both widgets are plain inline scripts. */
// Markdown to HTML: headers, bold, bullets, numbered lists, paragraphs
function md(text) {
    var escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    var lines = escaped.split('\n');
    var html = '';
    var i = 0;

    while (i < lines.length) {
        var line = lines[i];

        // Skip empty lines
        if (!line.trim()) { i++; continue; }

        // Headers: ## or ###
        var hMatch = line.match(/^(#{1,3})\s+(.+)/);
        if (hMatch) {
            var level = Math.min(hMatch[1].length + 1, 4); // h2-h4 range
            html += '<h' + level + ' class="chat-h">' + inline(hMatch[2]) + '</h' + level + '>';
            i++; continue;
        }

        // Bullet list block
        if (/^\s*[-*]\s/.test(line)) {
            html += '<ul>';
            while (i < lines.length && /^\s*[-*]\s/.test(lines[i])) {
                html += '<li>' + inline(lines[i].replace(/^\s*[-*]\s+/, '')) + '</li>';
                i++;
            }
            html += '</ul>';
            continue;
        }

        // Numbered list block
        if (/^\s*\d+[\.\)]\s/.test(line)) {
            html += '<ol>';
            while (i < lines.length && /^\s*\d+[\.\)]\s/.test(lines[i])) {
                html += '<li>' + inline(lines[i].replace(/^\s*\d+[\.\)]\s+/, '')) + '</li>';
                i++;
            }
            html += '</ol>';
            continue;
        }

        // Paragraph: collect consecutive non-special lines
        var para = [];
        while (i < lines.length && lines[i].trim() && !/^#{1,3}\s/.test(lines[i]) && !/^\s*[-*]\s/.test(lines[i]) && !/^\s*\d+[\.\)]\s/.test(lines[i])) {
            para.push(lines[i]);
            i++;
        }
        if (para.length) {
            html += '<p>' + inline(para.join(' ')) + '</p>';
        }
    }
    return html || '<p>' + inline(escaped) + '</p>';
}

function inline(s) {
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    s = s.replace(/\[([^\]]+)\]\((\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
    s = s.replace(/`(.+?)`/g, '<code>$1</code>');
    return s;
}
