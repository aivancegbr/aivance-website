/**
 * Die drei Leistungscluster (§ 2 des Briefings).
 * Reihenfolge = Reihenfolge im Mega-Menü und auf /leistungen/.
 */
module.exports = [
  {
    slug: "sichtbarkeit",
    title: "Sichtbarkeit",
    claim: "Außenwirkung und Marke",
    heroSatz:
      "Website, Bildmaterial und Social Media aus einer Hand — abgestimmt statt zusammengestückelt.",
    beschreibung:
      "Ihr Auftritt entsteht bei uns als Ganzes: Die Website nutzt die Fotos, die wir vor Ort machen. Die Social-Media-Beiträge verlinken auf Seiten, die es wirklich gibt. Niemand koordiniert drei Dienstleister — Sie sprechen mit einem.",
    verzahnung:
      "Sichtbarkeit endet bei uns nicht beim Design: Kontaktanfragen aus der Website landen direkt in Ihren Systemen (Automatisierung), und Inhalte kommen aus denselben Datenquellen, die auch Ihre Software nutzt (Software & Systeme).",
    stichpunkte: [
      "Website & Webdesign",
      "Foto, Video & Schnitt",
      "Social-Media-Management",
      "SEO & KI-Sichtbarkeit"
    ],
    services: ["website-webdesign", "foto-video", "social-media", "seo-ki-sichtbarkeit"],
    meta: {
      title: "Sichtbarkeit — AIVANCE",
      description: "Website, Foto & Video und Social Media aus einer Hand — abgestimmt statt zusammengestückelt. Für Unternehmen im Rhein-Main-Gebiet."
    },
    en: {
      title: "Visibility",
      claim: "Public image and brand",
      heroSatz:
        "Website, imagery and social media from a single source — coordinated instead of pieced together.",
      beschreibung:
        "Your public presence is created as one coherent whole: the website uses the photos we take on site, and your social media posts link to pages that actually exist. Nobody has to coordinate three vendors — you talk to one.",
      verzahnung:
        "For us, visibility doesn't end at design: contact requests from your website land directly in your systems (Automation), and content comes from the same data sources your software uses (Software & Systems).",
      stichpunkte: [
        "Website & web design",
        "Photo, video & editing",
        "Social media management",
        "SEO & AI visibility"
      ],
      meta: {
        title: "Visibility — AIVANCE",
        description: "Website, photo & video and social media from a single source — coordinated instead of pieced together. For businesses in the Rhine-Main region."
      }
    }
  },
  {
    slug: "software",
    title: "Software & Systeme",
    claim: "Individuelle Lösungen",
    heroSatz:
      "Software, die zu Ihren Abläufen passt — statt Abläufe, die sich einer Standardsoftware beugen.",
    beschreibung:
      "Wir bauen Systeme, die Ihre konkreten Probleme lösen: eine Anwendung für Ihren Sonderfall, ein Wissenssystem, das Ihre Dokumente durchsuchbar macht, oder einen Telefon-Assistenten, der Anrufe entgegennimmt, wenn niemand Zeit hat.",
    verzahnung:
      "Jedes System, das wir bauen, ist anschlussfähig: Es liefert Daten an Ihr Reporting (Automatisierung) und Inhalte an Ihre Website (Sichtbarkeit). Sie kaufen kein Inselsystem.",
    stichpunkte: [
      "Individualsoftware",
      "Wissenssysteme (RAG/DMS)",
      "Voice Agents"
    ],
    services: ["individualsoftware", "wissenssysteme", "voice-agents"],
    meta: {
      title: "Software & Systeme — AIVANCE",
      description: "Individualsoftware, Wissenssysteme und Voice Agents für den Mittelstand — DSGVO-konform betrieben, Hosting in Deutschland und der EU."
    },
    en: {
      title: "Software & Systems",
      claim: "Custom-built solutions",
      heroSatz:
        "Software that fits your workflows — instead of workflows bent to fit off-the-shelf software.",
      beschreibung:
        "We build systems that solve your specific problems: an application for your special case, a knowledge system that makes your documents searchable, or a phone assistant that answers calls when nobody has time.",
      verzahnung:
        "Every system we build is designed to connect: it feeds data into your reporting (Automation) and content into your website (Visibility). You are not buying an isolated silo.",
      stichpunkte: [
        "Custom software",
        "Knowledge systems (RAG/DMS)",
        "Voice agents"
      ],
      meta: {
        title: "Software & Systems — AIVANCE",
        description: "Custom software, knowledge systems and voice agents for mid-sized companies — GDPR-compliant operation, hosted in Germany and the EU."
      }
    }
  },
  {
    slug: "automatisierung",
    title: "Automatisierung",
    claim: "Prozesse und Daten",
    heroSatz:
      "Wiederkehrende Arbeit läuft automatisch — Ihre Zahlen kommen zu Ihnen, nicht umgekehrt.",
    beschreibung:
      "Rechnungen zuordnen, Berichte zusammenstellen, Daten zwischen Systemen abtippen: Diese Arbeit kostet jede Woche Stunden. Wir automatisieren sie — mit klaren Regeln, nachvollziehbar und mit Ihnen abgestimmt.",
    verzahnung:
      "Automatisierung wirkt am stärksten, wenn die Systeme zusammenpassen: Anfragen aus Ihrer Website (Sichtbarkeit) und Daten aus Ihren Systemen (Software & Systeme) fließen in dieselben Abläufe.",
    stichpunkte: [
      "Prozessautomatisierung",
      "KPI & Reporting",
      "Integrationen & API"
    ],
    services: ["prozessautomatisierung", "reporting", "integrationen"],
    meta: {
      title: "Automatisierung — AIVANCE",
      description: "Prozessautomatisierung, KPI-Reporting und Systemintegrationen für Unternehmen im Rhein-Main-Gebiet — nachvollziehbar und DSGVO-konform."
    },
    en: {
      title: "Automation",
      claim: "Processes and data",
      heroSatz:
        "Recurring work runs automatically — your numbers come to you, not the other way around.",
      beschreibung:
        "Matching invoices, compiling reports, retyping data between systems: this work costs hours every week. We automate it — with clear rules, fully traceable and agreed with you.",
      verzahnung:
        "Automation works best when the systems fit together: inquiries from your website (Visibility) and data from your systems (Software & Systems) flow into the same workflows.",
      stichpunkte: [
        "Process automation",
        "KPIs & reporting",
        "Integrations & API"
      ],
      meta: {
        title: "Automation — AIVANCE",
        description: "Process automation, KPI reporting and system integrations for businesses in the Rhine-Main region — transparent and GDPR-compliant."
      }
    }
  }
];
