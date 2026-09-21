/**
 * Verbindungsdaten für „ask echo" — das Fragefenster unten rechts.
 *
 * Bewusst ein *eigener* Agent, nicht der aus der Produktdemo: Der Demo-Agent
 * ist eine Empfangs-Persona für Kundenanrufe und würde auf „Was macht ihr?"
 * als Telefonistin einer fremden Firma antworten. Hier antwortet aivance über
 * sich selbst, aus einer Wissensbasis, die aus dieser Website gespeist wird.
 *
 * Solange `agentId` leer ist, erscheint das Fenster überhaupt nicht — die
 * Website bleibt dann unverändert. Dasselbe Muster wie bei echoDemo.js.
 *
 * Einrichtung in ElevenLabs (Agent → Security):
 *   1. Agent öffentlich schalten (enable_auth: false) + Hostname-Allowlist
 *      auf ai-vance.de. Ein Schlüssel darf nicht in den Quelltext, und eine
 *      statische Seite auf GitHub Pages hat keinen Server, der ein Token
 *      ausstellen könnte.
 *   2. Override „language" erlauben — davon lebt die englische Fassung.
 *   3. Override „text only" erlauben: Getippte Fragen laufen ohne Mikrofon
 *      über WebSocket, und das SDK meldet das als Override an. Ohne die
 *      Freigabe erzeugt der Agent zu jeder Antwort zusätzlich Sprache, die
 *      niemand hört — und die trotzdem abgerechnet wird.
 *   4. Keine Tools, kein Zugriff auf Kunden- oder Kalenderdaten.
 */
module.exports = {
  agentId: "",

  /* Feste Version, damit ein Update drüben die Seite hier nicht umwirft.
     Dieselbe Datei wie in der Produktdemo — einmal geladen, einmal gecacht. */
  sdkUrl: "https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.24.0/dist/lib.iife.js"
};
