/**
 * Verbindungsdaten der Echo-Live-Demo.
 *
 * `agentId` ist kein Geheimnis: Der Agent ist in ElevenLabs öffentlich
 * geschaltet, damit die statische Website ohne Server eine Verbindung
 * aufbauen kann. Geschützt wird er nicht durch Verschweigen der ID, sondern
 * durch die Herkunftssperre im ElevenLabs-Dashboard (nur ai-vance.de) und
 * dadurch, dass er keinerlei Zugriff auf Kunden- oder Kalenderdaten hat.
 *
 * Solange `agentId` leer ist, wird der Demo-Abschnitt nicht gerendert —
 * die Produktseite bleibt dann unverändert.
 */
module.exports = {
  agentId: "agent_5801m32bpsx2e8er9e0mhd47aqd9",

  /* Das SDK wird erst beim Klick nachgeladen, nicht beim Seitenaufruf.
     Feste Version, damit ein Update drüben die Seite hier nicht umwirft. */
  sdkUrl: "https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.24.0/dist/lib.iife.js",

  /* Die Begrüßung des Agenten schreibt die Marke groß („AIVANCE, Echo am
     Apparat"). Im Transkript der Demo steht sie damit entgegen der Schreibweise
     überall sonst. Statt die Agent-Konfiguration anzufassen — die auch echte
     Anrufe bedient — setzt die Website sie hier beim Verbinden. */
  firstMessage: {
    de: "aivance, Echo am Apparat. Was kann ich für Sie tun?",
    en: "aivance, Echo speaking. How can I help you?"
  }
};
