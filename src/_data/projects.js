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
    untertitel: "Vollautomatisierter KI-Assistent · Rhein-Main-Gebiet",
    branche: "gastronomie",
    brancheLabel: "Gastronomie · Rhein-Main",
    cluster: ["software", "automatisierung"],
    status: "Abgeschlossen",
    anonym: true,
    teaser: {
      zahl: "78 %",
      zahlLabel: "weniger manuelle Anfragen pro Woche",
      text: "Ein Restaurant beantwortet Reservierungen und Gästefragen automatisch — über WhatsApp und Website."
    },
    ausgangslage:
      "Ein wachsendes Restaurant im Rhein-Main-Gebiet kämpfte täglich mit hunderten manuell bearbeiteten Anfragen zu Reservierungen, Öffnungszeiten und Speisekarten. Das Team verlor wertvolle Zeit — besonders in Stoßzeiten.",
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
      { wert: "78 %", label: "weniger manuelle Anfragen", detail: "von 340 auf 75 pro Woche" },
      { wert: "95 %", label: "Gästezufriedenheit", detail: "basierend auf 48 Bewertungen" },
      { wert: "0,3 s", label: "Antwortzeit", detail: "vorher 2–6 Stunden manuell" }
    ],
    ergebnisZeitraum: "Messbare Ergebnisse nach 90 Tagen",
    zitat: {
      text: "Seit AIVANCE können wir uns endlich auf das Wesentliche konzentrieren: unsere Gäste. Die KI beantwortet Anfragen schneller und präziser, als wir es je manuell konnten.",
      autor: "Inhaber, Restaurant",
      ort: "Rhein-Main-Gebiet · Gastronomie"
    },
    bild: "/images/gastrodashboard.jpeg",
    bildAlt: "Manager-Dashboard des AIVANCE-Gastronomie-Systems mit Auslastung und Umsatz in Echtzeit",
    meta: {
      title: "Gastronomie: 78 % weniger manuelle Anfragen — AIVANCE",
      description: "Case Study: KI-Assistent für ein Restaurant im Rhein-Main-Gebiet — 78 % weniger manuelle Anfragen, Antwortzeit von Stunden auf 0,3 Sekunden."
    },
    en: {
      title: "Hospitality Chatbot & Customer Service",
      untertitel: "Fully automated AI assistant · Rhine-Main region",
      brancheLabel: "Hospitality · Rhine-Main",
      status: "Completed",
      teaser: {
        zahl: "78 %",
        zahlLabel: "manual inquiries per week",
        text: "A restaurant answers reservations and guest questions automatically — via WhatsApp and its website."
      },
      ausgangslage:
        "A growing restaurant in the Rhine-Main region struggled daily with hundreds of manually handled inquiries about reservations, opening hours and menus. The team lost valuable time — especially at peak hours.",
      loesung:
        "AIVANCE implemented an AI assistant built on a knowledge system and integrated it into the existing infrastructure — via the WhatsApp Business API and the website. The assistant knows the menu, availability and house rules in real time.",
      gebaut: [
        "Knowledge system with real-time indexing of the menu and reservation data",
        "WhatsApp Business API integration with automatic reservation confirmation",
        "Manager dashboard with real-time occupancy, revenue and review analytics",
        "Automatic escalation routing to staff for complex inquiries"
      ],
      tech: ["RAG system", "WhatsApp API", "n8n automation", "OpenAI GPT-4o", "Vector database"],
      ergebnisse: [
        { wert: "78 %", label: "fewer manual inquiries", detail: "from 340 to 75 per week" },
        { wert: "95 %", label: "guest satisfaction", detail: "based on 48 reviews" },
        { wert: "0.3 s", label: "response time", detail: "previously 2–6 hours manually" }
      ],
      ergebnisZeitraum: "Measurable results after 90 days",
      zitat: {
        text: "Since AIVANCE, we can finally focus on what matters: our guests. The AI answers inquiries faster and more precisely than we ever could manually.",
        autor: "Owner, restaurant",
        ort: "Rhine-Main region · Hospitality"
      },
      bildAlt: "Manager dashboard of the AIVANCE hospitality system with real-time occupancy and revenue",
      meta: {
        title: "Hospitality: 78 % Fewer Manual Inquiries — AIVANCE",
        description: "Case study: AI assistant for a restaurant in the Rhine-Main region — 78% fewer manual inquiries, response time down from hours to 0.3 seconds."
      }
    }
  },
  {
    slug: "onboarding-mittelstand",
    nummer: "02",
    title: "Onboarding-System für Mittelständler",
    untertitel: "Wissenssystem · Rhein-Main-Gebiet · HR",
    branche: "mittelstand",
    brancheLabel: "Mittelstand · Rhein-Main",
    cluster: ["software"],
    status: "Abgeschlossen",
    anonym: true,
    teaser: {
      zahl: "50 %",
      zahlLabel: "weniger Onboarding-Zeit",
      text: "Neue Mitarbeitende bekommen Antworten sofort — statt das HR-Team mit denselben Fragen zu binden."
    },
    ausgangslage:
      "Ein mittelständisches Unternehmen im Rhein-Main-Gebiet verlor pro neuem Mitarbeitenden durchschnittlich 3–4 Arbeitstage durch manuelles Onboarding — vom HR-Team bis zur Führungskraft. Repetitive Fragen zu Prozessen, Tools und Richtlinien blockierten das Team täglich.",
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
      { wert: "80 %", label: "weniger HR-Anfragen", detail: "Self-Service durch KI-Assistent" },
      { wert: "50 %", label: "weniger Onboarding-Zeit", detail: "Einarbeitung pro Eintritt halbiert" },
      { wert: "96 %", label: "Zufriedenheit", detail: "Feedback neuer Mitarbeitender" }
    ],
    ergebnisZeitraum: "Messbare Ergebnisse nach 60 Tagen",
    zitat: {
      text: "Unser HR-Team wurde täglich mit denselben Fragen überflutet. AIVANCE hat das vollständig gelöst. Neue Kollegen fühlen sich ab Tag 1 gut betreut, und die Implementierung war schneller als erwartet.",
      autor: "HR-Leitung",
      ort: "Mittelständisches Unternehmen · Rhein-Main-Gebiet"
    },
    bild: null,
    bildAlt: null,
    meta: {
      title: "Mittelstand: 50 % weniger Onboarding-Zeit — AIVANCE",
      description: "Case Study: Onboarding-Wissenssystem für einen Mittelständler — 80 % weniger HR-Anfragen, Onboarding-Zeit halbiert."
    },
    en: {
      title: "Onboarding System for a Mid-Sized Company",
      untertitel: "Knowledge system · Rhine-Main region · HR",
      brancheLabel: "SMB · Rhine-Main",
      status: "Completed",
      teaser: {
        zahl: "50 %",
        zahlLabel: "less onboarding time",
        text: "New hires get answers instantly — instead of tying up the HR team with the same questions."
      },
      ausgangslage:
        "A mid-sized company in the Rhine-Main region lost an average of 3–4 working days per new hire to manual onboarding — from the HR team up to the line manager. Repetitive questions about processes, tools and policies blocked the team daily.",
      loesung:
        "AIVANCE built an onboarding knowledge system that indexes the company's entire knowledge base. New employees get precise answers instantly — via Slack, Teams or the web — without opening a ticket.",
      gebaut: [
        "Knowledge index across all company policies, processes and HR documents",
        "Slack bot with a personalized onboarding plan and automatic progress tracking",
        "Notion integration: knowledge base always in sync and up to date",
        "HR dashboard: overview of all ongoing onboardings and open tasks"
      ],
      tech: ["RAG system", "Notion API", "Slack bot", "Claude", "n8n workflows"],
      ergebnisse: [
        { wert: "80 %", label: "fewer HR inquiries", detail: "self-service via AI assistant" },
        { wert: "50 %", label: "less onboarding time", detail: "ramp-up time per hire cut in half" },
        { wert: "96 %", label: "satisfaction", detail: "feedback from new employees" }
      ],
      ergebnisZeitraum: "Measurable results after 60 days",
      zitat: {
        text: "Our HR team was flooded with the same questions every day. AIVANCE solved that completely. New colleagues feel well looked after from day one, and the implementation was faster than expected.",
        autor: "Head of HR",
        ort: "Mid-sized company · Rhine-Main region"
      },
      meta: {
        title: "SMB: Onboarding Time Cut by 3 Days — AIVANCE",
        description: "Case study: onboarding knowledge system for a mid-sized company — 80% fewer HR inquiries, onboarding time cut in half."
      }
    }
  },
  {
    slug: "praxis-online-sichtbarkeit",
    nummer: "03",
    title: "Online-Sichtbarkeit für eine Gesundheitspraxis",
    untertitel: "Website-Relaunch, SEO & Live-Dashboard · New York, USA",
    branche: "medizin",
    brancheLabel: "Gesundheitswesen · USA",
    cluster: ["sichtbarkeit"],
    status: "Laufende Betreuung",
    anonym: true,
    teaser: {
      zahl: "128 %",
      zahlLabel: "mehr Klicks aus der Google-Suche",
      text: "Eine Gesundheitspraxis wird online endlich so gefunden, wie es ihrem Ruf entspricht — mehr Anrufe, mehr Anfragen, mehr Patienten."
    },
    ausgangslage:
      "Eine renommierte Gesundheitspraxis im Raum New York mit anspruchsvollem Patientenstamm war online praktisch unsichtbar. Die Website bestand aus einer einzigen Seite, wichtige Leistungen hatten keine eigenen Unterseiten, und Google meldete Indexierungsfehler. Wer nach den Kernleistungen der Praxis suchte, fand die Konkurrenz.",
    loesung:
      "AIVANCE hat die Website technisch und inhaltlich neu aufgestellt: eigene, suchoptimierte Seiten für jede Kernleistung, Behebung aller Indexierungsfehler in der Google Search Console, strukturierte Daten (FAQ-Schema) und ein Blog mit CMS, über das die Praxis ohne Entwickler publiziert. Die monatlichen Google-Kennzahlen laufen in ein Live-Dashboard, das automatisch aktualisiert wird.",
    gebaut: [
      "Fünf suchoptimierte Leistungsseiten mit lokalem SEO-Fokus und FAQ-Schema",
      "Technisches SEO: Indexierungsfehler behoben, Canonicals, Sitemap, Redirects",
      "Blog mit CMS — neue Artikel gehen ohne Entwickler live",
      "Live-Performance-Dashboard mit monatlich automatisch aktualisierten Google-Kennzahlen"
    ],
    tech: ["React", "Technisches SEO", "FAQ-Schema", "Headless CMS", "Google Search Console"],
    ergebnisse: [
      { wert: "128 %", label: "mehr Google-Klicks", detail: "organische Suche, Monat zu Monat" },
      { wert: "+32 %", label: "Patientenanrufe", detail: "über das Google-Unternehmensprofil" },
      { wert: "+233 %", label: "Chat-Anfragen", detail: "Anfragequote pro Besucher verdoppelt" }
    ],
    ergebnisZeitraum: "Messbare Ergebnisse innerhalb von 3 Monaten",
    sichtbarkeit: {
      eyebrow: "SUCHSICHTBARKEIT · VERIFIZIERT",
      headline: "Sichtbarkeit zählt nur, wenn sie die richtigen Menschen erreicht.",
      intro: "Nach dem Start der neuen Website meldete Google für die Seite zur Behandlung von Sportverletzungen 855 % mehr Impressionen als üblich. Noch aussagekräftiger war, was danach geschah: Die Praxis hörte direkt von neuen Sportlerinnen und Sportlern, die angaben, sie über die Website gefunden zu haben.",
      bild: "/images/aivance-healthcare-search-visibility-855.png",
      bildWebp: "/images/aivance-healthcare-search-visibility-855.webp",
      bildAlt: "Google-Suchleistungsnachweis mit 855 % mehr Impressionen als üblich für eine Seite zur Behandlung von Sportverletzungen",
      quelle: "SRC 02 · GOOGLE-SUCHLEISTUNGSBENACHRICHTIGUNG",
      zitat: "Ich glaube, die sportliche Ausrichtung der Website funktioniert. Wir gewinnen mehr Sportlerinnen und Sportler, und sie sagen, dass sie wegen der Website zu uns kommen. Großartige Arbeit!",
      attribution: "Kundenfeedback · US-Gesundheitsprojekt",
      changedTitle: "Was sich verändert hat",
      changed: [
        "Suchmaschinenoptimierung",
        "Stärkere Struktur der Leistungsseiten und relevantere Inhalte",
        "Technische Performance-Verbesserungen",
        "Lokale Suchmaschinenoptimierung",
        "Strukturierte Inhalte für KI-gestützte Such- und Antwortsysteme",
        "Klarere Positionierung für Sportler und aktive Menschen"
      ],
      closing: [
        "Das war mehr als ein visuelles Redesign. Die Website wurde neu aufgebaut, damit die Praxis leichter gefunden, verstanden und kontaktiert werden kann — heute über die klassische Suche und künftig auch über KI-generierte Empfehlungen, wenn sich das Suchverhalten weiterentwickelt.",
        "Das Ergebnis ist eine klarere Marke, deutlich stärkere Sichtbarkeit in der Suche und neue Kunden, die ausdrücklich sagen, dass sie die Praxis über die Website gefunden haben."
      ],
      statement: "Eine starke Website sollte ein Unternehmen nicht nur repräsentieren. Sie sollte den richtigen Menschen helfen, es zu finden."
    },
    bild: null,
    bildAlt: null,
    meta: {
      title: "Gesundheitspraxis: +128 % Google-Klicks — AIVANCE",
      description: "Wie AIVANCE die Google- und KI-Sichtbarkeit einer US-Praxis steigerte: 128 % mehr Suchklicks und 855 % mehr Impressionen auf einer Leistungsseite."
    },
    en: {
      title: "Online Visibility for a Healthcare Practice",
      untertitel: "Website relaunch, SEO & live dashboard · New York, USA",
      brancheLabel: "Healthcare · USA",
      status: "Ongoing engagement",
      teaser: {
        zahl: "128 %",
        zahlLabel: "more clicks from Google Search",
        text: "A medical practice is finally found online the way its reputation deserves — more calls, more inquiries, more patients."
      },
      ausgangslage:
        "A well-established medical practice in the New York area with a demanding patient base was practically invisible online. The website consisted of a single page, key services had no dedicated subpages, and Google reported indexing errors. Anyone searching for the practice's core services found the competition.",
      loesung:
        "AIVANCE rebuilt the website technically and editorially: dedicated, search-optimized pages for every core service, all indexing errors fixed in Google Search Console, structured data (FAQ schema), and a blog with a CMS the practice publishes through without a developer. The monthly Google metrics flow into a live dashboard that updates automatically.",
      gebaut: [
        "Five search-optimized service pages with local SEO focus and FAQ schema",
        "Technical SEO: indexing errors fixed, canonicals, sitemap, redirects",
        "Blog with CMS — new articles go live without a developer",
        "Live performance dashboard with automatically updated monthly Google metrics"
      ],
      tech: ["React", "Technical SEO", "FAQ schema", "Headless CMS", "Google Search Console"],
      ergebnisse: [
        { wert: "128 %", label: "more Google clicks", detail: "organic search, month over month" },
        { wert: "+32 %", label: "patient calls", detail: "via the Google Business Profile" },
        { wert: "+233 %", label: "chat inquiries", detail: "inquiry rate per visitor doubled" }
      ],
      ergebnisZeitraum: "Measurable results within 3 months",
      sichtbarkeit: {
        eyebrow: "SEARCH VISIBILITY · VERIFIED",
        headline: "Visibility only matters when it reaches the right audience.",
        intro: "After the new website launched, Google Search reported 855% more impressions than usual for the practice’s sports treatment page. The stronger signal was what happened next: the practice began hearing directly from new athletes who said they had found it through the website.",
        bildAlt: "Google Search performance evidence showing 855% more impressions than usual for a sports treatment page",
        quelle: "SRC 02 · GOOGLE SEARCH PERFORMANCE NOTIFICATION",
        zitat: "I think the athletic feel of the website is working. We’re getting more athletes, and they say they’re coming because of the website. Great job!",
        attribution: "Client feedback · US healthcare project",
        changedTitle: "What changed",
        changed: [
          "Search engine optimization",
          "Stronger service-page structure and content relevance",
          "Technical performance improvements",
          "Local search optimization",
          "Structured content for AI-powered search and answer engines",
          "Clearer positioning toward athletes and active clients"
        ],
        closing: [
          "This was more than a visual redesign. The website was rebuilt to make the practice easier to discover, understand and contact—through traditional search today and through AI-generated recommendations as search behavior evolves.",
          "The result is a clearer brand, significantly stronger search visibility and new customers who explicitly say they found the practice through the website."
        ],
        statement: "A strong website should not only represent a business. It should help the right people find it."
      },
      meta: {
        title: "Healthcare Practice: +128 % Google Clicks — AIVANCE",
        description: "How AIVANCE improved Google and AI-search visibility for a US healthcare practice: 128% more search clicks and 855% more impressions on a key service page."
      }
    }
  }
];
