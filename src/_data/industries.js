/**
 * Vier Branchenseiten (Template T3, § 7).
 * Rechtsrahmen-Blöcke beschreiben Maßnahmen von AIVANCE — keine Rechtsberatung
 * ("Wir stellen sicher, dass …", nicht "Sie müssen …"). Vor Livegang anwaltlich prüfen (§ 7).
 */
module.exports = [
  {
    slug: "medizin",
    title: "Medizin & Gesundheitswesen",
    kurz: "Praxen",
    hero: "Digitalisierung für Praxen",
    heroSatz: "Weniger Telefonklingeln an der Rezeption, weniger Zettelwirtschaft — und Patientendaten bleiben dort, wo sie hingehören.",
    schmerzpunkte: [
      {
        titel: "Die Rezeption nimmt Terminanfragen zwischen zwei Patienten an",
        text: "Das Telefon klingelt in die Behandlung hinein. Wer nicht durchkommt, ruft beim nächsten Arzt an — oder steht unangemeldet vor der Tür."
      },
      {
        titel: "Befunde, Formulare und Post stapeln sich",
        text: "Eingehende Dokumente werden von Hand gesichtet, gescannt und zugeordnet — Arbeit, die nach Sprechstundenende liegen bleibt."
      },
      {
        titel: "Die Praxis-Website beantwortet keine einzige Patientenfrage",
        text: "Öffnungszeiten veraltet, keine Online-Terminanfrage, Leistungen unauffindbar. Patienten rufen an — siehe Punkt eins."
      },
      {
        titel: "Neue Mitarbeiter finden sich schwer zurecht",
        text: "Abläufe, Hygienepläne und Zuständigkeiten stehen in Ordnern oder nirgends. Einarbeitung bindet die erfahrensten Kräfte."
      }
    ],
    rechtsrahmen: {
      intro: "Ärztinnen und Ärzte unterliegen der Schweigepflicht nach § 203 StGB. Gesundheitsdaten sind besondere Kategorien personenbezogener Daten nach Art. 9 DSGVO. Dienstleister dürfen nur unter erweiterten Bedingungen eingebunden werden — das prägt jede technische Entscheidung in unseren Praxisprojekten.",
      punkte: [
        "Wir stellen sicher, dass jede Datenverarbeitung auf einem Auftragsverarbeitungsvertrag nach Art. 28 DSGVO basiert und wir uns als Mitwirkende im Sinne des § 203 Abs. 3 StGB zur Geheimhaltung verpflichten.",
        "Wir stellen sicher, dass Systeme mit Patientenbezug auf Servern in Deutschland oder der EU laufen und Gesundheitsdaten Ihre Umgebung nicht verlassen.",
        "Wir stellen sicher, dass keine Patientendaten für das Training von KI-Modellen verwendet werden — vertraglich abgesichert über die Anbieterklauseln, die wir auf unserer Seite Datensicherheit benennen.",
        "Wir dokumentieren technische und organisatorische Maßnahmen nach Art. 32 DSGVO und stellen sie Ihnen für Ihr Verzeichnis von Verarbeitungstätigkeiten bereit."
      ],
      hinweis: "Diese Angaben beschreiben unsere technischen und vertraglichen Maßnahmen. Sie sind keine Rechtsberatung."
    },
    leistungen: ["voice-agents", "website-webdesign", "prozessautomatisierung", "wissenssysteme"],
    referenzSlug: null,
    faq: [
      {
        q: "Dürfen wir als Praxis überhaupt einen externen Dienstleister einsetzen?",
        a: "Ja, unter den Bedingungen des § 203 Abs. 3 StGB und der DSGVO: schriftliche Verpflichtung zur Geheimhaltung, Auftragsverarbeitungsvertrag und dokumentierte Schutzmaßnahmen. Genau diese Unterlagen bringen wir zum Erstgespräch mit."
      },
      {
        q: "Nimmt der Telefon-Assistent auch Gesundheitsdaten auf?",
        a: "Nur, was für Terminvereinbarung und Rückruf nötig ist — und nur mit Ansage und Einwilligung des Anrufers. Was der Assistent aufnehmen darf und was nicht, legen Sie fest."
      },
      {
        q: "Was kostet der Einstieg?",
        a: "Das Erstgespräch und die Prozessaufnahme kosten nichts. Danach erhalten Sie ein Festpreisangebot für einen klar abgegrenzten ersten Schritt — meist Telefonentlastung oder Website."
      }
    ],
    meta: {
      title: "Digitalisierung für Praxen — AIVANCE",
      description: "Telefonentlastung, Website und Dokumentenabläufe für Arztpraxen im Rhein-Main-Gebiet — konform mit § 203 StGB und Art. 9 DSGVO."
    },
    en: {
      title: "Medical & Healthcare",
      kurz: "Practices",
      hero: "Digitalization for medical practices",
      heroSatz: "Less phone-ringing at the front desk, less paperwork — and patient data stays where it belongs.",
      schmerzpunkte: [
        {
          titel: "The front desk takes appointment requests between two patients",
          text: "The phone rings into the middle of treatment. Whoever doesn't get through calls the next doctor — or shows up unannounced at the door."
        },
        {
          titel: "Test results, forms and mail pile up",
          text: "Incoming documents are reviewed, scanned and filed by hand — work that is left over after consultation hours end."
        },
        {
          titel: "The practice website doesn't answer a single patient question",
          text: "Outdated opening hours, no online appointment request, services impossible to find. Patients call — see point one."
        },
        {
          titel: "New employees struggle to find their way",
          text: "Procedures, hygiene plans and responsibilities live in binders or nowhere. Onboarding ties up your most experienced staff."
        }
      ],
      rechtsrahmen: {
        intro: "Physicians are bound by professional confidentiality under Section 203 of the German Criminal Code (StGB). Health data is a special category of personal data under Art. 9 GDPR. Service providers may only be involved under extended conditions — and that shapes every technical decision in our practice projects.",
        punkte: [
          "We ensure that every data processing operation is based on a data processing agreement under Art. 28 GDPR and that we commit to confidentiality as contributors within the meaning of Section 203 (3) StGB.",
          "We ensure that systems handling patient data run on servers in Germany or the EU and that health data never leaves your environment.",
          "We ensure that no patient data is used to train AI models — contractually secured through the provider clauses we name on our Data Security page.",
          "We document technical and organizational measures under Art. 32 GDPR and provide them for your record of processing activities."
        ],
        hinweis: "These statements describe our technical and contractual measures. They are not legal advice."
      },
      faq: [
        {
          q: "As a practice, are we even allowed to use an external service provider?",
          a: "Yes, under the conditions of Section 203 (3) StGB and the GDPR: a written confidentiality commitment, a data processing agreement and documented safeguards. We bring exactly these documents to the first meeting."
        },
        {
          q: "Does the phone assistant also record health data?",
          a: "Only what is needed for appointment scheduling and callbacks — and only with an announcement and the caller's consent. You define what the assistant may record and what not."
        },
        {
          q: "What does getting started cost?",
          a: "The introductory call and the process review are free. After that you receive a fixed-price offer for a clearly scoped first step — usually phone relief or the website."
        }
      ],
      meta: {
        title: "Digitalization for Medical Practices — AIVANCE",
        description: "Phone relief, website and document workflows for medical practices in the Rhine-Main region — compliant with Section 203 StGB and Art. 9 GDPR."
      }
    }
  },
  {
    slug: "steuer-finanzberatung",
    title: "Steuer- & Finanzberatung",
    kurz: "Kanzleien",
    hero: "Digitalisierung für Kanzleien",
    heroSatz: "Mandantenpost sortiert sich selbst, Standardfragen beantworten sich selbst — Ihr Team arbeitet an Fällen statt an Ablage.",
    schmerzpunkte: [
      {
        titel: "Eingehende Mandantenpost bindet jeden Morgen eine Fachkraft",
        text: "Belege, Bescheide und Verträge kommen per E-Mail, Post und Portal — und werden von Hand gesichtet und in den richtigen Mandantenordner gelegt."
      },
      {
        titel: "Dieselben Mandantenfragen, jede Woche",
        text: "Wo reiche ich Belege ein? Was fehlt noch? Bis wann? Jede Antwort kostet Minuten, in Summe Tage pro Monat."
      },
      {
        titel: "Fristen und Zuständigkeiten leben in Köpfen und Excel",
        text: "Fällt eine erfahrene Kraft aus, weiß niemand sicher, was bei welchem Mandanten offen ist."
      }
    ],
    rechtsrahmen: {
      intro: "Steuerberaterinnen und Steuerberater unterliegen der Verschwiegenheitspflicht nach § 57 StBerG und § 203 Abs. 1 Nr. 3 StGB. § 62 StBerG regelt die Inanspruchnahme von Dienstleistern und verpflichtet diese zur Verschwiegenheit. Unsere Systeme sind darauf ausgelegt.",
      punkte: [
        "Wir stellen sicher, dass wir uns nach § 62 StBerG schriftlich zur Verschwiegenheit verpflichten und ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO geschlossen wird, bevor wir Zugriff auf Mandantendaten erhalten.",
        "Wir stellen sicher, dass Mandantendaten auf Servern in Deutschland oder der EU verarbeitet werden und keine Daten für das Training von KI-Modellen verwendet werden.",
        "Wir stellen sicher, dass Zugriffe protokolliert werden und ein Rechtekonzept regelt, welcher Mitarbeiter welche Mandate sieht.",
        "Wir dokumentieren die technischen und organisatorischen Maßnahmen nach Art. 32 DSGVO für Ihre eigenen Nachweispflichten."
      ],
      hinweis: "Diese Angaben beschreiben unsere technischen und vertraglichen Maßnahmen. Sie sind keine Rechtsberatung."
    },
    leistungen: ["prozessautomatisierung", "wissenssysteme", "reporting", "website-webdesign"],
    referenzSlug: null,
    faq: [
      {
        q: "Dürfen wir Mandantendaten an einen IT-Dienstleister geben?",
        a: "§ 62 StBerG erlaubt das, wenn der Dienstleister sorgfältig ausgewählt und zur Verschwiegenheit verpflichtet ist. Die schriftliche Verpflichtung und den Auftragsverarbeitungsvertrag bringen wir mit — Sie müssen keine Vorlagen suchen."
      },
      {
        q: "Ersetzt das unsere Kanzleisoftware?",
        a: "Nein — wir bauen um DATEV & Co. herum: Posteingang, Mandantenkommunikation und Auswertungen, die Ihre Fachsoftware nicht abdeckt. Was Sie haben, bleibt."
      },
      {
        q: "Wie schnell sehen wir einen Effekt?",
        a: "Der automatisierte Posteingang ist der übliche erste Schritt und nach 2–4 Wochen produktiv. Die eingesparte Zeit beziffern wir vorher in der Prozessaufnahme."
      }
    ],
    meta: {
      title: "Digitalisierung für Steuerkanzleien — AIVANCE",
      description: "Automatisierter Posteingang, Wissenssysteme und Reporting für Kanzleien im Rhein-Main-Gebiet — konform mit § 62 StBerG und § 203 StGB."
    },
    en: {
      title: "Tax & Financial Advisory",
      kurz: "Firms",
      hero: "Digitalization for tax firms",
      heroSatz: "Client mail sorts itself, routine questions answer themselves — your team works on cases instead of filing.",
      schmerzpunkte: [
        {
          titel: "Incoming client mail ties up a professional every morning",
          text: "Receipts, notices and contracts arrive by email, post and portal — and are reviewed and filed into the right client folder by hand."
        },
        {
          titel: "The same client questions, every week",
          text: "Where do I submit receipts? What is still missing? By when? Every answer costs minutes — in total, days per month."
        },
        {
          titel: "Deadlines and responsibilities live in heads and Excel",
          text: "If an experienced employee is out, nobody knows for sure what is open for which client."
        }
      ],
      rechtsrahmen: {
        intro: "Tax advisors are bound by professional secrecy under Section 57 of the German Tax Advisory Act (StBerG) and Section 203 (1) no. 3 StGB. Section 62 StBerG governs the use of service providers and obliges them to confidentiality. Our systems are designed for exactly that.",
        punkte: [
          "We ensure that we commit to confidentiality in writing under Section 62 StBerG and that a data processing agreement under Art. 28 GDPR is concluded before we receive access to client data.",
          "We ensure that client data is processed on servers in Germany or the EU and that no data is used to train AI models.",
          "We ensure that access is logged and that a permissions concept governs which employee sees which engagements.",
          "We document the technical and organizational measures under Art. 32 GDPR for your own accountability obligations."
        ],
        hinweis: "These statements describe our technical and contractual measures. They are not legal advice."
      },
      faq: [
        {
          q: "Are we allowed to give client data to an IT service provider?",
          a: "Section 62 StBerG permits it if the provider is carefully selected and bound to confidentiality. We bring the written commitment and the data processing agreement with us — you don't have to hunt for templates."
        },
        {
          q: "Does this replace our practice management software?",
          a: "No — we build around DATEV & co.: inbound mail, client communication and analyses your specialist software doesn't cover. What you have stays."
        },
        {
          q: "How quickly will we see an effect?",
          a: "The automated mail intake is the usual first step and is live after 2–4 weeks. We quantify the time saved beforehand in the process review."
        }
      ],
      meta: {
        title: "Digitalization for Tax Firms — AIVANCE",
        description: "Automated mail intake, knowledge systems and reporting for firms in the Rhine-Main region — compliant with Section 62 StBerG and Section 203 StGB."
      }
    }
  },
  {
    slug: "gastronomie",
    title: "Gastronomie",
    kurz: "Gastronomie",
    hero: "Digitalisierung für Gastronomie",
    heroSatz: "Reservierungen, Gästefragen und Ihre Zahlen laufen automatisch — Ihr Team bleibt bei den Gästen.",
    schmerzpunkte: [
      {
        titel: "Reservierungsanfragen kommen mitten im Service",
        text: "Telefon, Instagram-Nachricht, E-Mail — beantwortet wird, wenn gerade jemand Zeit hat. Bis dahin hat der Gast woanders reserviert."
      },
      {
        titel: "Dieselben Fragen, jeden Tag",
        text: "Habt ihr vegane Gerichte? Bis wann ist die Küche offen? Gibt es Parkplätze? Jede Antwort kostet Servicezeit."
      },
      {
        titel: "Die Zahlen kommen Wochen zu spät",
        text: "Wareneinsatz, Umsatz pro Abend, Auslastung — was heute schiefläuft, sehen Sie erst in der Monatsauswertung."
      }
    ],
    rechtsrahmen: {
      intro: "Auch in der Gastronomie gelten klare Regeln: Reservierungs- und Gästedaten sind personenbezogene Daten nach DSGVO, und wo Kassensysteme angebunden werden, greift die Kassensicherungsverordnung (KassenSichV).",
      punkte: [
        "Wir stellen sicher, dass Gäste- und Reservierungsdaten DSGVO-konform verarbeitet werden — mit Auftragsverarbeitungsvertrag, Löschkonzept und Servern in Deutschland oder der EU.",
        "Wir stellen sicher, dass Anbindungen an Ihr Kassensystem dessen Konformität nicht berühren: Wir lesen Auswertungsdaten, wir verändern keine Kassenvorgänge.",
        "Wir stellen sicher, dass Gästekommunikation über WhatsApp & Co. mit Einwilligung und Datenschutzhinweisen umgesetzt wird."
      ],
      hinweis: "Diese Angaben beschreiben unsere technischen und vertraglichen Maßnahmen. Sie sind keine Rechtsberatung."
    },
    leistungen: ["voice-agents", "website-webdesign", "social-media", "reporting"],
    referenzSlug: "gastronomie-chatbot",
    faq: [
      {
        q: "Unsere Gäste sind gemischt — nimmt eine KI ältere Anrufer mit?",
        a: "Der Assistent spricht natürliche Sprache und leitet jederzeit an Ihr Team weiter, wenn der Anrufer das möchte. Im Referenzprojekt sank die Zahl manuell bearbeiteter Anfragen um 78 % — ohne Beschwerden über den Kanal."
      },
      {
        q: "Was bringt mir das an einem vollen Samstagabend konkret?",
        a: "Reservierungsanfragen und Standardfragen beantworten sich selbst, statt im Service unterzugehen. Ihr Team fasst das Telefon nur noch an, wenn ein Mensch gebraucht wird."
      }
    ],
    meta: {
      title: "Digitalisierung für Gastronomie — AIVANCE",
      description: "Reservierungen automatisieren, Gästefragen beantworten, Zahlen live sehen — Digitalisierung für Restaurants im Rhein-Main- und Rhein-Neckar-Gebiet."
    },
    en: {
      title: "Hospitality",
      kurz: "Hospitality",
      hero: "Digitalization for hospitality",
      heroSatz: "Reservations, guest questions and your numbers run automatically — your team stays with the guests.",
      schmerzpunkte: [
        {
          titel: "Reservation requests come in mid-service",
          text: "Phone, Instagram message, email — answered whenever someone happens to have time. By then, the guest has booked elsewhere."
        },
        {
          titel: "The same questions, every day",
          text: "Do you have vegan dishes? How late is the kitchen open? Is there parking? Every answer costs service time."
        },
        {
          titel: "The numbers arrive weeks too late",
          text: "Cost of goods, revenue per night, occupancy — what goes wrong today, you only see in the monthly report."
        }
      ],
      rechtsrahmen: {
        intro: "Clear rules apply in hospitality too: reservation and guest data are personal data under the GDPR, and where POS systems are connected, the German Cash Register Security Ordinance (KassenSichV) applies.",
        punkte: [
          "We ensure that guest and reservation data is processed in compliance with the GDPR — with a data processing agreement, a deletion concept and servers in Germany or the EU.",
          "We ensure that connections to your POS system do not affect its compliance: we read analytics data, we never alter register transactions.",
          "We ensure that guest communication via WhatsApp & co. is implemented with consent and privacy notices."
        ],
        hinweis: "These statements describe our technical and contractual measures. They are not legal advice."
      },
      faq: [
        {
          q: "Our guests are a mixed crowd — does an AI work for older callers?",
          a: "The assistant speaks natural language and hands over to your team at any time if the caller wants that. In our reference project, manually handled inquiries dropped by 78% — with no complaints about the channel."
        },
        {
          q: "What does this concretely do for me on a packed Saturday night?",
          a: "Reservation requests and routine questions answer themselves instead of drowning in service. Your team only picks up the phone when a human is needed."
        }
      ],
      meta: {
        title: "Digitalization for Hospitality — AIVANCE",
        description: "Automate reservations, answer guest questions, see your numbers live — digitalization for restaurants in the Rhine-Main and Rhine-Neckar regions."
      }
    }
  },
  {
    slug: "mittelstand",
    title: "Handwerk & Mittelstand",
    kurz: "Mittelstand",
    hero: "Digitalisierung für Handwerk & Mittelstand",
    heroSatz: "Angebote, Personal und Wissen: Wir digitalisieren die Abläufe, die in wachsenden Betrieben zuerst knirschen.",
    schmerzpunkte: [
      {
        titel: "Das Büro ist der Flaschenhals",
        text: "Angebote, Rechnungen und Terminkoordination laufen über wenige Personen — draußen wird gearbeitet, drinnen stapelt es sich."
      },
      {
        titel: "Wissen hängt an Einzelnen",
        text: "Wie ein Auftrag kalkuliert wird und welcher Kunde welche Sonderabsprache hat, weiß der Chef — und sonst kaum jemand."
      },
      {
        titel: "Neue Mitarbeiter kosten Wochen an Einarbeitung",
        text: "Wer neu anfängt, fragt sich durch. Die erfahrenen Kräfte beantworten dieselben Fragen zum zwanzigsten Mal."
      },
      {
        titel: "Bewerber finden Sie nicht — oder Sie die Bewerber nicht",
        text: "Ohne sichtbaren Auftritt entscheidet Zufall, ob gute Leute auf Sie aufmerksam werden."
      }
    ],
    rechtsrahmen: {
      intro: "Im Mittelstand gilt vor allem die DSGVO — für Kunden-, Mitarbeiter- und Bewerberdaten. Was selbstverständlich klingt, scheitert in der Praxis oft an fehlenden Verträgen und unklaren Zuständigkeiten.",
      punkte: [
        "Wir stellen sicher, dass jede Verarbeitung von Kunden- und Mitarbeiterdaten auf einem Auftragsverarbeitungsvertrag nach Art. 28 DSGVO basiert.",
        "Wir stellen sicher, dass Systeme auf Servern in Deutschland oder der EU laufen und Ihre Daten nicht für KI-Training verwendet werden.",
        "Wir liefern die Dokumentation der technischen und organisatorischen Maßnahmen nach Art. 32 DSGVO mit — auch für Ihre Versicherung oder Ihre Auditoren."
      ],
      hinweis: "Diese Angaben beschreiben unsere technischen und vertraglichen Maßnahmen. Sie sind keine Rechtsberatung."
    },
    leistungen: ["prozessautomatisierung", "wissenssysteme", "individualsoftware", "website-webdesign"],
    referenzSlug: "onboarding-mittelstand",
    faq: [
      {
        q: "Wir sind 12 Leute — lohnt sich das für uns überhaupt?",
        a: "Gerade dann: Bei kleinen Teams schlägt jede eingesparte Bürostunde direkt durch. Wir starten mit einer Prozessaufnahme, die die Einsparung beziffert, bevor Sie etwas beauftragen."
      },
      {
        q: "Wir haben keine IT-Abteilung. Wer betreut das später?",
        a: "Wir. Betrieb, Wartung und ein fester Ansprechpartner sind Teil des Angebots — mit vertraglich vereinbarten Reaktionszeiten statt einer anonymen Hotline."
      }
    ],
    meta: {
      title: "Digitalisierung für Handwerk & Mittelstand — AIVANCE",
      description: "Büroabläufe automatisieren, Wissen sichern, Mitarbeiter finden: Digitalisierung für Betriebe im Rhein-Main-Gebiet und an der Bergstraße."
    },
    en: {
      title: "Trades & SMBs",
      kurz: "SMBs",
      hero: "Digitalization for trades & SMBs",
      heroSatz: "Quotes, staffing and knowledge: we digitize the workflows that strain growing businesses first.",
      schmerzpunkte: [
        {
          titel: "The back office is the bottleneck",
          text: "Quotes, invoices and scheduling run through a few people — the work happens outside, the paper piles up inside."
        },
        {
          titel: "Knowledge depends on individuals",
          text: "How a job is priced and which customer has which special arrangement — the boss knows, and hardly anyone else."
        },
        {
          titel: "New employees cost weeks of onboarding",
          text: "Whoever starts new asks their way through. The experienced staff answer the same questions for the twentieth time."
        },
        {
          titel: "Applicants can't find you — or you can't find the applicants",
          text: "Without a visible presence, chance decides whether good people notice you."
        }
      ],
      rechtsrahmen: {
        intro: "For small and mid-sized businesses, the GDPR is the main framework — for customer, employee and applicant data. What sounds obvious often fails in practice due to missing agreements and unclear responsibilities.",
        punkte: [
          "We ensure that every processing of customer and employee data is based on a data processing agreement under Art. 28 GDPR.",
          "We ensure that systems run on servers in Germany or the EU and that your data is never used for AI training.",
          "We deliver the documentation of the technical and organizational measures under Art. 32 GDPR — also for your insurer or your auditors."
        ],
        hinweis: "These statements describe our technical and contractual measures. They are not legal advice."
      },
      faq: [
        {
          q: "We are 12 people — is this even worth it for us?",
          a: "Especially then: in small teams every saved office hour has a direct impact. We start with a process review that quantifies the savings before you commission anything."
        },
        {
          q: "We have no IT department. Who maintains this later?",
          a: "We do. Operation, maintenance and a dedicated contact are part of the offer — with contractually agreed response times instead of an anonymous hotline."
        }
      ],
      meta: {
        title: "Digitalization for Trades & SMBs — AIVANCE",
        description: "Automate office workflows, secure knowledge, find employees: digitalization for businesses in the Rhine-Main region and along the Bergstrasse."
      }
    }
  }
];
