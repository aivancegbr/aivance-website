// Backt die statischen Renderings des Hero-Geräts aus derselben three.js-Szene,
// die auf Desktop live läuft (src/js3d/phone-scene.js).
// Aufruf: npm run bake:hero3d  →  src/images/hero-device/*.webp
// Braucht Google Chrome (CHROME_PATH oder macOS-Standardpfad) und cwebp
// (libwebp, z. B. brew install webp): Chrome liefert PNG, cwebp komprimiert die
// Farbkanäle verlustbehaftet, Alpha verlustfrei (weiche Schatten würden sonst
// in Stufen brechen).
import { spawn, execFileSync } from "node:child_process";
import { createServer } from "node:http";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { build } from "esbuild";

const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = "src/images/hero-device";
const dir = mkdtempSync(join(tmpdir(), "hero3d-bake-"));
await build({ entryPoints: ["tools/hero-3d-bake-entry.js"], bundle: true, format: "esm", outfile: join(dir, "bake.js") });
writeFileSync(join(dir, "index.html"), '<!doctype html><script type="module" src="bake.js"></script>');

const server = createServer((req, res) => {
  const f = req.url === "/" ? "index.html" : req.url.slice(1);
  let body;
  try { body = readFileSync(join(dir, f)); } catch { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "content-type": f.endsWith(".js") ? "text/javascript" : "text/html" });
  res.end(body);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const port = server.address().port;

const chrome = spawn(CHROME, ["--headless=new", "--remote-debugging-port=9335", "--enable-gpu", "--use-angle=metal",
  `--user-data-dir=${join(dir, "profile")}`, "--no-first-run", "about:blank"], { stdio: "ignore" });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) { await wait(200); try { target = await (await fetch("http://127.0.0.1:9335/json/new", { method: "PUT" })).json(); } catch {} }
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

try {
  await send("Page.enable");
  await send("Page.navigate", { url: `http://127.0.0.1:${port}/` });
  let images;
  for (let i = 0; i < 50 && !images; i++) {
    await wait(200);
    const r = await send("Runtime.evaluate", { expression: "window.bake ? window.bake() : null", returnByValue: true });
    if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description);
    images = r.result?.result?.value;
  }
  if (!images) throw new Error("Bake-Seite hat nicht geladen");
  mkdirSync(OUT, { recursive: true });
  for (const [name, url] of Object.entries(images)) {
    const png = join(dir, `${name}.png`), webp = join(OUT, `${name}.webp`);
    writeFileSync(png, Buffer.from(url.split(",")[1], "base64"));
    execFileSync("cwebp", ["-quiet", "-q", "82", "-alpha_q", "100", "-exact", "-m", "6", png, "-o", webp]);
    console.log(`${name}.webp  ${(readFileSync(webp).length / 1024).toFixed(1)} KB`);
  }
} finally {
  ws.close(); chrome.kill(); server.closeAllConnections(); server.close();
}
