/**
 * Systeme im Betrieb (§ 4 der Leistungs- und Projektübersicht, Stand August 2026).
 *
 * Breite statt Tiefe: zeigt, was läuft, ohne Kundennamen und ohne Zahlen —
 * die belegten Zahlen stehen in den Case Studies. „inArbeit" trennt Betrieb
 * von Entwicklung, damit nichts als fertig gilt, was es nicht ist.
 */
module.exports = {
  stand: "August 2026",
  enStand: "August 2026",
  betrieb: [
    {
      tut: "Tische reservieren, Essen bestellen",
      branche: "Gastronomie",
      art: "Website, Kapazitätsplanung, Kasse",
      en: { tut: "Reserve tables, order food", branche: "Hospitality", art: "Website, capacity planning, POS" }
    },
    {
      tut: "Anrufe annehmen und Termine buchen",
      branche: "Gesundheitsbranche, USA",
      art: "Telefonassistent, Webdesign",
      en: { tut: "Answer calls and book appointments", branche: "Healthcare, USA", art: "Phone assistant, web design" }
    },
    {
      tut: "Firmenwissen durchsuchbar machen",
      branche: "Mittelstand",
      art: "Abfrage mit Fundstelle, ohne Halluzination",
      en: { tut: "Make company knowledge searchable", branche: "SMB", art: "Queries with source location, no hallucination" }
    },
    {
      tut: "In Google und KI-Suche gefunden werden",
      branche: "Gesundheitswesen",
      art: "Suchoptimierung, Sichtbarkeit in KI-Suche",
      en: { tut: "Get found in Google and AI search", branche: "Healthcare", art: "Search optimisation, visibility in AI answers" }
    },
    {
      tut: "Außenauftritt aus einer Hand",
      branche: "Gastronomie, Friseur, Mode",
      art: "Webdesign, Grafik, Video, Imagefilm",
      en: { tut: "Public presence from a single team", branche: "Hospitality, salons, fashion", art: "Web design, graphics, video, brand film" }
    },
    {
      tut: "Laufende Systeme überwachen",
      branche: "Intern",
      art: "Warnt bei Auslastung und Sicherheitslücken",
      en: { tut: "Monitor running systems", branche: "Internal", art: "Alerts on load and security gaps" }
    }
  ],
  inArbeit: [
    {
      tut: "Versicherungsabdeckung vorab automatisiert prüfen",
      branche: "Gesundheitswesen, USA",
      art: "Leistungsabfrage ohne Warteschleife",
      en: { tut: "Check insurance coverage automatically, up front", branche: "Healthcare, USA", art: "Benefit lookup without hold music" }
    },
    {
      tut: "Monatsberichte automatisch erstellen",
      branche: "Logistik",
      art: "Automatisierung, terminierte Berichte",
      en: { tut: "Generate monthly reports automatically", branche: "Logistics", art: "Automation, scheduled reports" }
    },
    {
      tut: "App für Endkunden",
      branche: "Dienstleistung",
      art: "Zugriff auf Leistungen und Termine",
      en: { tut: "Customer-facing app", branche: "Services", art: "Access to services and appointments" }
    },
    {
      tut: "Digitale Kundenkarte",
      branche: "Gastronomie",
      art: "Apple Wallet, Anbindung ans Bestellsystem",
      en: { tut: "Digital loyalty card", branche: "Hospitality", art: "Apple Wallet, tied into the ordering system" }
    }
  ]
};
