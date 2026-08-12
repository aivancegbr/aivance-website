#!/bin/bash
# Rendert tools/og-image.html zu den Social-Bannern (1200×630):
#   #de → src/images/og-image.png
#   #en → src/images/og-image-en.png
#
# Voraussetzung: Site läuft lokal (npm run dev). Die Schriften kommen über
# /fonts/, damit die Banner dieselben Schnitte nutzen wie die Seite.
# Gerendert wird in 2× und heruntergerechnet — das gibt saubere Kanten in
# der Typo, ohne die Datei zu vergrößern.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-8080}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if ! curl -s -o /dev/null --max-time 3 "http://localhost:$PORT/"; then
  echo "Kein Server auf Port $PORT — bitte 'npm run dev' starten (oder PORT=… setzen)." >&2
  exit 1
fi

cp "$ROOT/tools/og-image.html" "$ROOT/_site/__og.html"
render() { # $1 = Fragment, $2 = Zieldatei
  "$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=1200,630 --virtual-time-budget=4000 \
    --screenshot="$ROOT/tools/.og-2x.png" "http://localhost:$PORT/__og.html#$1" 2>/dev/null
  sips -z 630 1200 "$ROOT/tools/.og-2x.png" --out "$ROOT/src/images/$2" > /dev/null
  rm -f "$ROOT/tools/.og-2x.png"
  printf "%-22s %s\n" "$2" "$(sips -g pixelWidth -g pixelHeight "$ROOT/src/images/$2" | awk '/pixel/{printf "%s ", $2}')"
}
render de og-image.png
render en og-image-en.png
rm -f "$ROOT/_site/__og.html"
