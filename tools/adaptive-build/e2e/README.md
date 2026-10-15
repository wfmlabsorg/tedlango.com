# Adaptive reader — browser end-to-end checks

Run against a local `hugo server -p 1313` with the Playwright venv (`~/.venvs/adaptive`).
Headless Chromium on this box needs NSS libs that are not installed system-wide:

```
apt-get download libnss3 libnspr4 && dpkg -x libnss3_*.deb libs && dpkg -x libnspr4_*.deb libs
LD_LIBRARY_PATH=$PWD/libs/usr/lib/x86_64-linux-gnu ~/.venvs/adaptive/bin/python -I e2e_sync.py
```

- `e2e_sync.py` — two-way audio/page sync (player controls move the page; page links switch the audio) and the Chapter 6 wiki-link pilot (inline new-tab links + "Go deeper" section).
