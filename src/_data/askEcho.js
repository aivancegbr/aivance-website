/**
 * Verbindungsdaten für „ask echo" — das Fragefenster unten rechts.
 *
 * Es läuft über denselben Agenten wie die Live-Demo auf der Produktseite.
 * Systemanweisung und Begrüßung stehen seit dem 21.09.2026 **im Agenten**,
 * nicht mehr hier: Solange die Website den Prompt überschrieb, musste der
 * Override `prompt` freigegeben sein — und damit konnte jeder, der die
 * Agent-ID im Quelltext liest, den öffentlichen Agenten als beliebiges
 * Sprachmodell auf fremde Rechnung fahren. Der Wortlaut der Anweisung steht
 * zum Nachschlagen in ask-echo-agent.md.
 *
 * Die Website sendet nur noch:
 *   language   — trägt die englische Fassung
 *   text_only  — wählt den Textmodus, ohne Mikrofon
 *   first_message: ""  — nur beim Tippen. Der Agent begrüßt sonst auch im
 *                        Textfenster, und die Begrüßung stünde dort nach der
 *                        ersten Frage statt davor.
 *
 * Solange `agentId` leer ist, erscheint das Fenster überhaupt nicht.
 */
module.exports = {
  agentId: "agent_5801m32bpsx2e8er9e0mhd47aqd9",

  /* Feste Version, damit ein Update drüben die Seite hier nicht umwirft.
     Dieselbe Datei wie in der Produktdemo — einmal geladen, einmal gecacht. */
  sdkUrl: "https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.24.0/dist/lib.iife.js"
};
