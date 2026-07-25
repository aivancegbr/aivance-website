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
    }
  }
];
