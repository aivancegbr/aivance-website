#!/bin/bash
# Rendert tools/og-image.html zu src/images/og-image.png (1200×630).
# Voraussetzung: Site läuft lokal (npm run dev) — die Schriften werden über
# /fonts/ geladen, damit das Banner dieselben Schnitte nutzt wie die Seite.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-8080}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cp "$ROOT/tools/og-image.html" "$ROOT/_site/__og.html"
# 2× rendern und herunterrechnen → saubere Kanten in der Typo
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1200,630 --virtual-time-budget=4000 \
  --screenshot="$ROOT/tools/.og-2x.png" "http://localhost:$PORT/__og.html" 2>/dev/null
sips -z 630 1200 "$ROOT/tools/.og-2x.png" --out "$ROOT/src/images/og-image.png" > /dev/null
rm -f "$ROOT/_site/__og.html" "$ROOT/tools/.og-2x.png"
sips -g pixelWidth -g pixelHeight "$ROOT/src/images/og-image.png" | tail -2
