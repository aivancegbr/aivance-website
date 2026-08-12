#!/bin/bash
# Rendert tools/favicon.html zu den Icons:
#   #tile  → src/images/favicon.png (192, auch apple-touch-icon)
#          → src/images/logo.png    (1024, Organization-Logo in JSON-LD)
#   #small → src/images/favicon-32.png (32)
# Voraussetzung: Site läuft lokal (npm run dev).
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-8080}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if ! curl -s -o /dev/null --max-time 3 "http://localhost:$PORT/"; then
  echo "Kein Server auf Port $PORT — bitte 'npm run dev' starten." >&2; exit 1
fi

cp "$ROOT/tools/favicon.html" "$ROOT/_site/__icon.html"
# Achtung: Chrome klemmt --window-size auf eine Mindestgröße (~500 px) und
# BESCHNEIDET dann den Screenshot statt zu skalieren. Unter 512 px Renderkante
# kommt deshalb nur die leere Ecke der Fläche heraus — immer groß rendern und
# mit sips herunterrechnen.
shot() { # $1 Fragment, $2 Renderkante (>= 512), $3 Zielkante, $4 Datei
  "$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=$2,$2 --virtual-time-budget=3000 \
    --screenshot="$ROOT/tools/.icon.png" "http://localhost:$PORT/__icon.html#$1" 2>/dev/null
  sips -z $3 $3 "$ROOT/tools/.icon.png" --out "$ROOT/src/images/$4" > /dev/null
  rm -f "$ROOT/tools/.icon.png"
  # Smoke-Test: eine einfarbige Fläche komprimiert auf wenige hundert Byte.
  bytes=$(stat -f%z "$ROOT/src/images/$4")
  if [ "$bytes" -lt 800 ]; then
    echo "FEHLER: $4 ist nur ${bytes} B — vermutlich eine leere Fläche (Renderkante zu klein?)." >&2
    exit 1
  fi
  printf "%-22s %s (%s B)\n" "$4" "$(sips -g pixelWidth -g pixelHeight "$ROOT/src/images/$4" | awk '/pixel/{printf "%s ", $2}')" "$bytes"
}
shot tile  768  192 favicon.png
shot tile  1024 1024 logo.png
shot small 512  32  favicon-32.png
rm -f "$ROOT/_site/__icon.html"
