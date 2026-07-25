/**
 * Case Studies (Template T4, § 7).
 * Struktur aus bestehender projekte.html übernommen, ergänzt um
 * Branchen- und Cluster-Tags für die filterbare Übersicht.
 * Namensnennung: gemischt — diese beiden Cases bleiben anonym (Kundenwunsch).
 */
module.exports = [
  {
    slug: "gastronomie-chatbot",
    nummer: "01",
    title: "Gastronomie-Chatbot & Kundenservice",
    untertitel: "Vollautomatisierter KI-Assistent · Rhein-Neckar-Region",
    branche: "gastronomie",
    brancheLabel: "Gastronomie · Rhein-Neckar",
    cluster: ["software", "automatisierung"],
    status: "Abgeschlossen",
    anonym: true,
    teaser: {
      zahl: "−78 %",
      zahlLabel: "manuelle Anfragen pro Woche",
      text: "Ein Restaurant beantwortet Reservierungen und Gästefragen automatisch — über WhatsApp und Website."
    },
    ausgangslage:
      "Ein wachsendes Restaurant im Rhein-Neckar-Gebiet kämpfte täglich mit hunderten manuell bearbeiteten Anfragen zu Reservierungen, Öffnungszeiten und Speisekarten. Das Team verlor wertvolle Zeit — besonders in Stoßzeiten.",
    loesung:
      "AIVANCE implementierte einen KI-Assistenten auf Basis eines Wissenssystems, der in die bestehende Infrastruktur integriert wurde — über die WhatsApp Business API und die Website. Der Assistent kennt Speisekarte, Verfügbarkeiten und Hausregeln in Echtzeit.",
    gebaut: [
      "Wissenssystem mit Echtzeit-Indexierung der Speisekarte und Reservierungsdaten",
      "WhatsApp-Business-API-Integration mit automatischer Reservierungsbestätigung",
      "Manager-Dashboard mit Echtzeit-Auslastung, Umsatz und Bewertungsanalyse",
      "Automatisches Eskalations-Routing an Mitarbeiter bei komplexen Anfragen"
    ],
    tech: ["RAG-System", "WhatsApp API", "n8n Automation", "OpenAI GPT-4o", "Vektor-Datenbank"],
    ergebnisse: [
      { wert: "−78 %", label: "manuelle Anfragen", detail: "von 340 auf 75 pro Woche" },
      { wert: "95 %", label: "Gästezufriedenheit", detail: "basierend auf 48 Bewertungen" },
      { wert: "0,3 s", label: "Antwortzeit", detail: "vorher 2–6 Stunden manuell" }
    ],
    ergebnisZeitraum: "Messbare Ergebnisse nach 90 Tagen",
    zitat: {
      text: "Seit AIVANCE können wir uns endlich auf das Wesentliche konzentrieren: unsere Gäste. Die KI beantwortet Anfragen schneller und präziser, als wir es je manuell konnten.",
      autor: "Inhaber, Restaurant",
      ort: "Rhein-Neckar-Region · Gastronomie"
    },
    bild: "/images/gastrodashboard.jpeg",
    bildAlt: "Manager-Dashboard des AIVANCE-Gastronomie-Systems mit Auslastung und Umsatz in Echtzeit",
    meta: {
      title: "Gastronomie: −78 % manuelle Anfragen — AIVANCE",
      description: "Case Study: KI-Assistent für ein Restaurant im Rhein-Neckar-Gebiet — 78 % weniger manuelle Anfragen, Antwortzeit von Stunden auf 0,3 Sekunden."
    }
  },
  {
    slug: "onboarding-mittelstand",
    nummer: "02",
    title: "Onboarding-System für Mittelständler",
    untertitel: "Wissenssystem · Rhein-Neckar-Region · HR",
    branche: "mittelstand",
    brancheLabel: "Mittelstand · Rhein-Neckar",
    cluster: ["software"],
    status: "Abgeschlossen",
    anonym: true,
    teaser: {
      zahl: "−3 Tage",
      zahlLabel: "Onboarding-Zeit pro Mitarbeiter",
      text: "Neue Mitarbeitende bekommen Antworten sofort — statt das HR-Team mit denselben Fragen zu binden."
    },
    ausgangslage:
      "Ein mittelständisches Unternehmen im Rhein-Neckar-Gebiet verlor pro neuem Mitarbeitenden durchschnittlich 3–4 Arbeitstage durch manuelles Onboarding — vom HR-Team bis zur Führungskraft. Repetitive Fragen zu Prozessen, Tools und Richtlinien blockierten das Team täglich.",
    loesung:
      "AIVANCE baute ein Onboarding-Wissenssystem, das die gesamte Wissensbasis des Unternehmens indexiert. Neue Mitarbeitende erhalten sofort präzise Antworten — über Slack, Teams oder Web — ohne ein Ticket zu öffnen.",
    gebaut: [
      "Wissens-Index über alle Unternehmensrichtlinien, Prozesse und HR-Dokumente",
      "Slack-Bot mit personalisiertem Onboarding-Plan und automatischer Fortschrittsverfolgung",
      "Notion-Integration: Wissensbasis synchron und immer aktuell",
      "HR-Dashboard: Überblick über alle laufenden Onboardings und offene Aufgaben"
    ],
    tech: ["RAG-System", "Notion API", "Slack Bot", "Claude", "n8n Workflows"],
    ergebnisse: [
      { wert: "−80 %", label: "HR-Anfragen", detail: "Self-Service durch KI-Assistent" },
      { wert: "−3 Tage", label: "Onboarding-Zeit", detail: "von 7 auf 4 Tage reduziert" },
      { wert: "96 %", label: "Zufriedenheit", detail: "Feedback neuer Mitarbeitender" }
    ],
    ergebnisZeitraum: "Messbare Ergebnisse nach 60 Tagen",
    zitat: {
      text: "Unser HR-Team wurde täglich mit denselben Fragen überflutet. AIVANCE hat das vollständig gelöst. Neue Kollegen fühlen sich ab Tag 1 gut betreut, und die Implementierung war schneller als erwartet.",
      autor: "HR-Leitung",
      ort: "Mittelständisches Unternehmen · Rhein-Neckar-Region"
    },
    bild: null,
    bildAlt: null,
    meta: {
      title: "Mittelstand: Onboarding-Zeit −3 Tage — AIVANCE",
      description: "Case Study: Onboarding-Wissenssystem für einen Mittelständler — 80 % weniger HR-Anfragen, Onboarding von 7 auf 4 Tage verkürzt."
    }
  }
];
