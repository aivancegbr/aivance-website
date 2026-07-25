/**
 * Neun Leistungsdetailseiten (Template T2, § 7).
 * Zeitrahmen pro Leistung ehrlich und einzeln (§ 8 "Geschwindigkeit").
 */
module.exports = [
  /* ── Cluster: Sichtbarkeit ── */
  {
    slug: "website-webdesign",
    cluster: "sichtbarkeit",
    title: "Website & Webdesign",
    navTitle: "Website & Webdesign",
    card: "Eine Website, die Anfragen bringt — schnell, barrierearm und von Ihnen selbst pflegbar.",
    heroSatz: "Wir bauen Websites, die laden, gefunden werden und Anfragen erzeugen — nicht nur gut aussehen.",
    fuerWen: [
      "Ihre Website ist mehrere Jahre alt, auf dem Handy schwer bedienbar oder bringt keine Anfragen.",
      "Sie gründen oder positionieren sich neu und brauchen einen Auftritt, der zum Angebot passt.",
      "Sie wollen Texte und Bilder künftig selbst ändern können, ohne für jede Zeile eine Agentur zu beauftragen."
    ],
    umfang: [
      "Konzept und Seitenstruktur auf Basis Ihrer Zielgruppe",
      "Design und Umsetzung, mobil zuerst",
      "Texte in Zusammenarbeit mit Ihnen — in der Sprache Ihrer Kunden",
      "Suchmaschinen-Grundlagen: Meta-Angaben, strukturierte Daten, Sitemap",
      "Ladezeit-Optimierung: komprimierte Bilder, selbst gehostete Schriften",
      "DSGVO-konforme Einbindung von Formularen und Karten",
      "Einweisung, damit Sie Inhalte selbst pflegen können"
    ],
    ablauf: [
      { phase: "Erstgespräch & Konzept", dauer: "Woche 1", text: "Ziele, Zielgruppe, Seitenstruktur. Sie bekommen ein konkretes Angebot mit Festpreis." },
      { phase: "Design & Inhalte", dauer: "Woche 2–3", text: "Wir gestalten, Sie liefern Inhalte zu — oder wir erstellen sie gemeinsam, inklusive Fotos." },
      { phase: "Umsetzung & Test", dauer: "Woche 3–5", text: "Entwicklung, Test auf allen Geräten, Korrekturschleife mit Ihnen." },
      { phase: "Livegang & Einweisung", dauer: "ab Woche 5", text: "Umzug auf Ihre Domain, Einweisung, 30 Tage Nachbetreuung inklusive." }
    ],
    zeitrahmen: "Realistisch sind 4–6 Wochen bis zum Livegang. Der häufigste Verzögerungsgrund sind fehlende Inhalte — deshalb erstellen wir Texte und Fotos auf Wunsch mit.",
    faq: [
      {
        q: "Was passiert mit meiner bestehenden Website und Domain?",
        a: "Ihre Domain bleibt Ihre. Wir übernehmen den Umzug, richten Weiterleitungen von alten Adressen ein und stellen sicher, dass Ihre Platzierung in Suchmaschinen nicht verloren geht."
      },
      {
        q: "Kann ich Inhalte später selbst ändern?",
        a: "Ja. Wir bauen die Seite so, dass Sie Texte, Bilder und Öffnungszeiten selbst pflegen können, und weisen Sie ein. Für größere Änderungen sind wir weiter ansprechbar."
      },
      {
        q: "Wie lange dauert es wirklich?",
        a: "4–6 Wochen, wenn Inhalte rechtzeitig da sind. Wir sagen Ihnen in der ersten Woche, welcher Termin realistisch ist — und halten ihn."
      }
    ],
    kombiniert: ["foto-video", "social-media", "prozessautomatisierung"],
    meta: {
      title: "Website & Webdesign für Unternehmen — AIVANCE",
      description: "Websites für Praxen, Kanzleien und Betriebe im Rhein-Main-Gebiet: schnell, mobil, selbst pflegbar. Livegang realistisch in 4–6 Wochen."
    }
  },
  {
    slug: "foto-video",
    cluster: "sichtbarkeit",
    title: "Foto, Video & Schnitt",
    navTitle: "Foto, Video & Schnitt",
    card: "Echte Bilder aus Ihrem Betrieb statt Stockfotos — für Website, Social Media und Bewerbung.",
    heroSatz: "Wir fotografieren und filmen bei Ihnen vor Ort — und liefern Material, das Website und Social Media direkt verwenden können.",
    fuerWen: [
      "Ihre Website zeigt Stockfotos, die jeder Wettbewerber auch verwendet.",
      "Sie brauchen regelmäßig Material für Social Media, haben aber niemanden, der es produziert.",
      "Sie suchen Personal und wollen zeigen, wie es bei Ihnen wirklich aussieht."
    ],
    umfang: [
      "Foto-Termine bei Ihnen vor Ort: Team, Räume, Arbeitssituationen, Produkte",
      "Videoaufnahmen inklusive Ton — vom Imagefilm bis zum kurzen Social-Media-Clip",
      "Schnitt, Farbkorrektur und Untertitel",
      "Formate passend zum Kanal: Website-Header, Instagram, LinkedIn, Bewerbungsseite",
      "Übergabe aller Dateien mit Nutzungsrechten — das Material gehört Ihnen"
    ],
    ablauf: [
      { phase: "Briefing", dauer: "Woche 1", text: "Was soll das Material zeigen, wo wird es eingesetzt? Wir planen Motive und Drehorte." },
      { phase: "Aufnahmetermin", dauer: "nach Absprache", text: "Ein halber bis ganzer Tag bei Ihnen vor Ort — so geplant, dass Ihr Betrieb weiterläuft." },
      { phase: "Auswahl & Bearbeitung", dauer: "1–2 Wochen danach", text: "Sie wählen aus einer Vorauswahl, wir bearbeiten und schneiden final." }
    ],
    zeitrahmen: "Vom Briefing bis zur Übergabe vergehen in der Regel 2–3 Wochen — abhängig vom Termin, der in Ihren Betrieb passt.",
    faq: [
      {
        q: "Wem gehören die Bilder und Videos?",
        a: "Ihnen. Sie erhalten alle finalen Dateien mit uneingeschränkten Nutzungsrechten für Ihre Unternehmenskommunikation."
      },
      {
        q: "Was ist mit Einwilligungen von Mitarbeitern und Patienten?",
        a: "Wir bringen Einwilligungsvorlagen mit und fotografieren so, dass keine Personen ohne Einwilligung erkennbar sind — in Praxen und Kanzleien planen wir Aufnahmen außerhalb der Sprechzeiten."
      }
    ],
    kombiniert: ["website-webdesign", "social-media"],
    portfolio: true,
    meta: {
      title: "Foto, Video & Schnitt für Unternehmen — AIVANCE",
      description: "Foto- und Videoproduktion vor Ort im Rhein-Main-Gebiet: Team, Räume, Arbeitsalltag. Material für Website, Social Media und Personalgewinnung."
    }
  },
  {
    slug: "social-media",
    cluster: "sichtbarkeit",
    title: "Social-Media-Management",
    navTitle: "Social Media",
    card: "Regelmäßige, geplante Beiträge mit echtem Material aus Ihrem Betrieb — ohne dass Sie täglich posten müssen.",
    heroSatz: "Wir planen, produzieren und veröffentlichen Ihre Social-Media-Beiträge — Sie geben frei, mehr nicht.",
    fuerWen: [
      "Ihr letzter Beitrag ist Monate alt, weil im Alltag niemand Zeit dafür hat.",
      "Sie wollen sichtbar sein, wo Ihre Kunden und Bewerber suchen — ohne selbst zu produzieren.",
      "Sie haben schon Kanäle, aber keine Linie: mal Angebote, mal Fotos, lange nichts."
    ],
    umfang: [
      "Kanalstrategie: welche Plattformen sich für Ihre Zielgruppe lohnen — und welche nicht",
      "Redaktionsplan pro Monat, von Ihnen freigegeben",
      "Produktion der Beiträge mit Material aus unseren Foto-/Videoterminen",
      "Veröffentlichung und Community-Betreuung nach vereinbarten Reaktionszeiten",
      "Monatlicher Bericht: Reichweite, Anfragen, was funktioniert hat"
    ],
    ablauf: [
      { phase: "Strategie & Einrichtung", dauer: "Woche 1–2", text: "Kanäle festlegen, Profile aufräumen, ersten Redaktionsplan erstellen." },
      { phase: "Laufender Betrieb", dauer: "monatlich", text: "Produktion, Freigabe durch Sie, Veröffentlichung, Bericht am Monatsende." }
    ],
    zeitrahmen: "Start innerhalb von 2 Wochen. Social Media wirkt über Monate, nicht über Nacht — wir sagen Ihnen ehrlich, was in welchem Zeitraum erreichbar ist.",
    faq: [
      {
        q: "Muss ich selbst etwas tun?",
        a: "Eine Freigabe pro Monat und gelegentlich fünf Minuten für Abstimmungen. Aufnahmen entstehen bei geplanten Terminen vor Ort — Ihr Alltag liefert die Inhalte, wir machen den Rest."
      },
      {
        q: "Welche Plattformen betreuen Sie?",
        a: "Instagram, Facebook, LinkedIn und Google-Unternehmensprofil. Welche davon sinnvoll sind, hängt von Ihrer Zielgruppe ab — das klären wir im Erstgespräch, bevor Kosten entstehen."
      }
    ],
    kombiniert: ["foto-video", "website-webdesign"],
    meta: {
      title: "Social-Media-Management für Unternehmen — AIVANCE",
      description: "Planung, Produktion und Veröffentlichung Ihrer Social-Media-Beiträge mit echtem Material aus Ihrem Betrieb. Für Unternehmen im Rhein-Main-Gebiet."
    }
  },

  /* ── Cluster: Software & Systeme ── */
  {
    slug: "individualsoftware",
    cluster: "software",
    title: "Individualsoftware",
    navTitle: "Individualsoftware",
    card: "Maßgeschneiderte Anwendungen für die Fälle, die keine Standardsoftware abdeckt.",
    heroSatz: "Wenn Excel-Listen und Standardsoftware nicht mehr reichen, bauen wir das Werkzeug, das zu Ihrem Ablauf passt.",
    fuerWen: [
      "Ein zentraler Ablauf in Ihrem Unternehmen lebt in Excel-Tabellen, die nur eine Person versteht.",
      "Ihre Standardsoftware kann 80 % — und die restlichen 20 % kosten jede Woche Stunden an Handarbeit.",
      "Sie brauchen ein internes Werkzeug: Planung, Verwaltung, Portal für Kunden oder Mitarbeiter."
    ],
    umfang: [
      "Anforderungsaufnahme an Ihrem echten Ablauf — wir schauen zu, bevor wir bauen",
      "Klick-Prototyp vor der Entwicklung, damit Sie früh sehen, was entsteht",
      "Entwicklung in überschaubaren Etappen mit Zwischenständen",
      "Anbindung an Ihre bestehenden Systeme",
      "Betrieb auf Servern in Deutschland oder der EU, Wartung und Weiterentwicklung"
    ],
    ablauf: [
      { phase: "Analyse & Prototyp", dauer: "Woche 1–3", text: "Wir erfassen den Ablauf, bauen einen Klick-Prototyp und legen den Umfang der ersten Version fest." },
      { phase: "Entwicklung", dauer: "ab Woche 4", text: "Umsetzung in Etappen von 2–3 Wochen. Nach jeder Etappe sehen Sie einen nutzbaren Zwischenstand." },
      { phase: "Einführung & Betrieb", dauer: "projektabhängig", text: "Testphase mit Ihrem Team, Schulung, Übergabe in den laufenden Betrieb mit vereinbarten Reaktionszeiten." }
    ],
    zeitrahmen: "Eine erste nutzbare Version liegt je nach Umfang nach 4–10 Wochen vor. Den konkreten Rahmen nennen wir nach der Analyse — nicht vorher.",
    faq: [
      {
        q: "Gehört mir die Software am Ende?",
        a: "Ja. Sie erhalten den Quellcode und die Dokumentation. Sie sind nicht an uns gebunden — auch wenn die meisten Kunden die Weiterentwicklung bei uns lassen."
      },
      {
        q: "Was kostet Individualsoftware?",
        a: "Das hängt vom Umfang ab. Nach der Analysephase erhalten Sie ein Festpreisangebot für die erste Version — keine offene Abrechnung nach Stunden ohne Limit."
      }
    ],
    kombiniert: ["prozessautomatisierung", "integrationen", "wissenssysteme"],
    meta: {
      title: "Individualsoftware für Unternehmen — AIVANCE",
      description: "Maßgeschneiderte Anwendungen statt Excel-Chaos: Analyse, Prototyp, Entwicklung in Etappen. Betrieb auf Servern in Deutschland oder der EU."
    }
  },
  {
    slug: "wissenssysteme",
    cluster: "software",
    title: "Wissenssysteme (RAG/DMS)",
    navTitle: "Wissenssysteme",
    card: "Ihre Dokumente, Verträge und Richtlinien — durchsuchbar in Sekunden statt in Aktenordnern.",
    heroSatz: "Wir machen Ihr Firmenwissen abrufbar: Mitarbeiter fragen in normaler Sprache, das System antwortet aus Ihren echten Dokumenten.",
    fuerWen: [
      "Ihr Team beantwortet dieselben Fragen immer wieder — zu Verträgen, Richtlinien, Abläufen.",
      "Wissen steckt in PDF-Ordnern, E-Mail-Postfächern und den Köpfen einzelner Mitarbeiter.",
      "Neue Mitarbeiter brauchen Wochen, bis sie wissen, wo etwas steht."
    ],
    umfang: [
      "Anbindung Ihrer Quellen: Dateiablagen, DMS, Wikis, E-Mail-Archive",
      "KI-gestützte Suche, die aus Ihren Dokumenten antwortet — mit Quellenangabe pro Antwort",
      "Antworten nur aus Ihren Daten: Wenn die Antwort nicht in Ihren Unterlagen steht, sagt das System das",
      "Rechte- und Rollenkonzept: Wer darf was sehen",
      "Steuerungsoberfläche: Nutzung, Qualität und Quellen im Blick",
      "Betrieb in Ihrer Umgebung oder auf EU-Servern — Ihre Daten trainieren keine KI-Modelle"
    ],
    ablauf: [
      { phase: "Erstgespräch & Datencheck", dauer: "Woche 1", text: "Welche Quellen, welche Fragen, welche Nutzer? Wir prüfen, ob Ihre Daten dafür bereit sind." },
      { phase: "Aufbau & Indexierung", dauer: "Woche 2–3", text: "Anbindung der Quellen, Aufbau des Systems, erste Testfragen mit Ihrem Team." },
      { phase: "Test & Livegang", dauer: "Woche 3–4", text: "Ihr Team testet mit echten Fragen, wir justieren nach. Danach Go-Live und Einweisung." }
    ],
    zeitrahmen: "Ø 17 Tage bis zum Go-Live in unseren bisherigen Projekten. Bei vielen Quellsystemen oder komplexem Rechtekonzept eher 4–6 Wochen — das sagen wir Ihnen nach dem Datencheck.",
    faq: [
      {
        q: "Was ist ein RAG-System?",
        a: "Retrieval-Augmented Generation: Das System sucht zuerst die relevanten Stellen in Ihren Dokumenten und formuliert erst dann eine Antwort — mit Quellenangabe. Es erfindet keine Inhalte, sondern belegt jede Antwort."
      },
      {
        q: "Werden meine Daten für KI-Training verwendet?",
        a: "Nein. Ihre Daten bleiben in Ihrer Umgebung und werden nicht für Modelltraining genutzt. Wir setzen Anbieter mit vertraglichen No-Training-Klauseln ein — Details auf unserer Seite Datensicherheit."
      },
      {
        q: "Was passiert, wenn das System eine Antwort nicht kennt?",
        a: "Es sagt es. Antworten entstehen nur aus Ihren Dokumenten. Findet das System keine belastbare Quelle, antwortet es nicht mit einer Vermutung, sondern verweist an einen Menschen."
      }
    ],
    kombiniert: ["voice-agents", "prozessautomatisierung", "individualsoftware"],
    meta: {
      title: "Wissenssysteme (RAG/DMS) für Unternehmen — AIVANCE",
      description: "Firmenwissen durchsuchbar machen: KI-Suche mit Quellenangabe aus Ihren Dokumenten. DSGVO-konform, Ø 17 Tage bis Go-Live."
    }
  },
  {
    slug: "voice-agents",
    cluster: "software",
    title: "Voice Agents",
    navTitle: "Voice Agents",
    card: "Ein Telefon-Assistent, der Anrufe annimmt, Fragen beantwortet und Termine aufnimmt — auch wenn niemand Zeit hat.",
    heroSatz: "Ihr Telefon klingelt, während alle beschäftigt sind. Unser Voice Agent nimmt ab, beantwortet Standardfragen und leitet weiter, was Menschen entscheiden müssen.",
    fuerWen: [
      "Anrufe kommen genau dann, wenn Ihr Team keine Hand frei hat — und gehen verloren.",
      "Ein großer Teil der Anrufe sind Standardfragen: Öffnungszeiten, Termine, Verfügbarkeiten.",
      "Sie wollen erreichbar sein, ohne die Rezeption aufzustocken."
    ],
    umfang: [
      "Telefon-Assistent mit natürlicher Sprache, angebunden an Ihre Wissensbasis",
      "Termin- und Anfragenaufnahme mit Übergabe in Ihre Systeme",
      "Weiterleitung an Mitarbeiter nach klaren Regeln — der Agent entscheidet nicht über Ihren Kopf hinweg",
      "Protokoll jedes Gesprächs, transparent einsehbar",
      "Datenschutzkonforme Umsetzung inklusive Ansage und Einwilligungslogik"
    ],
    ablauf: [
      { phase: "Erstgespräch & Gesprächslogik", dauer: "Woche 1", text: "Welche Anrufe kommen, was darf der Agent, was nicht? Wir definieren die Regeln gemeinsam." },
      { phase: "Aufbau & Training", dauer: "Woche 2–3", text: "Anbindung an Telefonanlage und Wissensbasis, Testanrufe mit Ihrem Team." },
      { phase: "Pilotbetrieb", dauer: "Woche 3–4", text: "Start mit begrenzten Zeiten (z. B. außerhalb der Öffnungszeiten), dann schrittweise Ausweitung." }
    ],
    zeitrahmen: "2–4 Wochen bis zum Pilotbetrieb. Die Ausweitung auf den vollen Betrieb entscheiden Sie nach den ersten Wochen — nicht wir.",
    faq: [
      {
        q: "Merken Anrufer, dass sie mit einer KI sprechen?",
        a: "Ja, und das ist Absicht: Der Agent stellt sich als digitaler Assistent vor. Verdeckte KI-Anrufe sind rechtlich riskant und beschädigen Vertrauen."
      },
      {
        q: "Was passiert bei Fragen, die der Agent nicht beantworten kann?",
        a: "Er nimmt Name, Anliegen und Rückrufnummer auf oder leitet direkt an einen Mitarbeiter weiter — nach Regeln, die Sie festlegen."
      }
    ],
    kombiniert: ["wissenssysteme", "prozessautomatisierung"],
    meta: {
      title: "Voice Agents für Unternehmen — AIVANCE",
      description: "KI-Telefon-Assistent für Praxen, Kanzleien und Betriebe: nimmt Anrufe an, beantwortet Standardfragen, leitet weiter. Pilotbetrieb in 2–4 Wochen."
    }
  },

  /* ── Cluster: Automatisierung ── */
  {
    slug: "prozessautomatisierung",
    cluster: "automatisierung",
    title: "Prozessautomatisierung",
    navTitle: "Prozessautomatisierung",
    card: "Wiederkehrende Abläufe laufen automatisch — vom Posteingang bis zur Ablage.",
    heroSatz: "Eingehende Post landet automatisch im richtigen Ordner, Anfragen im richtigen Postfach, Daten im richtigen System — ohne Abtippen.",
    fuerWen: [
      "Ihr Team überträgt Daten von Hand zwischen E-Mail, Excel und Fachsoftware.",
      "Dokumente werden mehrfach angefasst, bis sie am richtigen Ort liegen.",
      "Abläufe hängen an einzelnen Personen — ist jemand krank, bleibt Arbeit liegen."
    ],
    umfang: [
      "Prozessaufnahme: Wir dokumentieren den Ist-Ablauf, bevor wir etwas ändern",
      "Automatisierung mit klaren Regeln — nachvollziehbar, nicht als Blackbox",
      "Dokumenten-Verarbeitung: Eingehende Post wird erkannt, zugeordnet und abgelegt",
      "Benachrichtigungen und Freigabeschritte, wo Menschen entscheiden müssen",
      "Dokumentation jedes Ablaufs, damit Sie nicht von uns abhängig sind"
    ],
    ablauf: [
      { phase: "Prozessaufnahme", dauer: "Woche 1", text: "Wir schauen uns 2–3 Abläufe an und beziffern, was Automatisierung dort einspart." },
      { phase: "Umsetzung", dauer: "Woche 2–4", text: "Aufbau der Abläufe, Test mit echten Fällen parallel zum Tagesgeschäft." },
      { phase: "Übergabe & Ausbau", dauer: "ab Woche 4", text: "Ihr Team arbeitet mit den neuen Abläufen; weitere Prozesse folgen nach Priorität." }
    ],
    zeitrahmen: "Der erste automatisierte Ablauf ist nach 2–4 Wochen produktiv. Wir starten mit dem Prozess, der am meisten Zeit frisst — nicht mit dem einfachsten.",
    faq: [
      {
        q: "Woher weiß ich, ob sich Automatisierung bei uns lohnt?",
        a: "Aus der Prozessaufnahme: Wir beziffern pro Ablauf die eingesparten Stunden pro Woche, bevor Sie sich festlegen. Lohnt es sich nicht, sagen wir das."
      },
      {
        q: "Was passiert, wenn die Automatisierung einen Fehler macht?",
        a: "Kritische Schritte bekommen Freigaben durch Menschen, jeder Lauf wird protokolliert. Fehlerfälle landen in einer Prüfliste statt im Nirwana."
      }
    ],
    kombiniert: ["integrationen", "reporting", "wissenssysteme"],
    meta: {
      title: "Prozessautomatisierung für Unternehmen — AIVANCE",
      description: "Wiederkehrende Abläufe automatisieren: Posteingang, Dokumentenablage, Datenübertragung. Erster Ablauf produktiv in 2–4 Wochen."
    }
  },
  {
    slug: "reporting",
    cluster: "automatisierung",
    title: "KPI & Reporting",
    navTitle: "KPI & Reporting",
    card: "Ihre Kennzahlen kommen automatisch zu Ihnen — statt am Monatsende zusammengesucht zu werden.",
    heroSatz: "Umsatz, Auslastung, offene Posten: Wir bauen Berichte, die sich selbst aktualisieren und dorthin kommen, wo Sie sie lesen.",
    fuerWen: [
      "Ihre Monatszahlen entstehen in Handarbeit aus mehreren Excel-Dateien.",
      "Sie sehen erst Wochen später, wenn etwas aus dem Ruder läuft.",
      "Verschiedene Systeme zeigen verschiedene Wahrheiten — niemand weiß, welche Zahl stimmt."
    ],
    umfang: [
      "Kennzahlen-Definition gemeinsam mit Ihnen: Was muss wer wie oft sehen?",
      "Anbindung Ihrer Datenquellen: Buchhaltung, Kasse, CRM, Fachsoftware",
      "Dashboards mit Live-Daten und automatische Berichte per E-Mail",
      "Eine Zahl, eine Quelle: definierte Herkunft für jede Kennzahl",
      "Warnungen bei Abweichungen — Sie müssen nicht täglich nachsehen"
    ],
    ablauf: [
      { phase: "Kennzahlen & Quellen", dauer: "Woche 1", text: "Welche Zahlen steuern Ihr Geschäft? Wir prüfen, wo sie heute liegen und wie verlässlich sie sind." },
      { phase: "Aufbau", dauer: "Woche 2–3", text: "Anbindung der Quellen, Aufbau von Dashboard und Berichten, Abgleich mit Ihren bisherigen Zahlen." },
      { phase: "Betrieb", dauer: "laufend", text: "Berichte kommen automatisch; neue Kennzahlen ergänzen wir nach Bedarf." }
    ],
    zeitrahmen: "Das erste Dashboard steht nach 2–3 Wochen. Voraussetzung ist Zugang zu Ihren Datenquellen — das klären wir in Woche 1.",
    faq: [
      {
        q: "Welche Systeme können Sie anbinden?",
        a: "Gängige Buchhaltungs-, Kassen- und CRM-Systeme sowie alles mit Export oder Schnittstelle. Ob Ihre Systeme dabei sind, klären wir im Erstgespräch — kostenlos."
      },
      {
        q: "Sehen Sie dabei unsere Geschäftszahlen?",
        a: "Nur soweit für den Aufbau nötig, geregelt über einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Der laufende Betrieb läuft in Ihrer Umgebung — wir schauen nur bei Wartung und auf Anfrage hinein."
      }
    ],
    kombiniert: ["prozessautomatisierung", "integrationen"],
    meta: {
      title: "KPI & Reporting für Unternehmen — AIVANCE",
      description: "Automatische Dashboards und Berichte aus Buchhaltung, Kasse und CRM. Eine Zahl, eine Quelle — erstes Dashboard in 2–3 Wochen."
    }
  },
  {
    slug: "integrationen",
    cluster: "automatisierung",
    title: "Integrationen & API",
    navTitle: "Integrationen & API",
    card: "Ihre Systeme sprechen miteinander — Daten fließen automatisch statt per Copy-and-paste.",
    heroSatz: "Kalender, Buchhaltung, CRM, Fachsoftware: Wir verbinden, was heute nebeneinanderher läuft.",
    fuerWen: [
      "Dieselben Daten werden in mehreren Systemen von Hand gepflegt.",
      "Ein Systemwechsel scheitert daran, dass Altdaten nicht mitkommen.",
      "Ihr Softwareanbieter bietet eine Schnittstelle — aber niemand hat sie je angebunden."
    ],
    umfang: [
      "Bestandsaufnahme: Welche Systeme gibt es, welche Daten fließen wohin?",
      "Anbindung über vorhandene Schnittstellen (REST, Webhooks) oder Import/Export",
      "Datenmigration bei Systemwechseln — inklusive Bereinigung von Dubletten",
      "Eigene Schnittstellen, wenn Ihre Software keine mitbringt",
      "Überwachung: Sie merken es, bevor eine Verbindung stillsteht"
    ],
    ablauf: [
      { phase: "Bestandsaufnahme", dauer: "Woche 1", text: "Systemlandschaft und Datenflüsse aufnehmen, Machbarkeit je Verbindung klären." },
      { phase: "Anbindung", dauer: "Woche 2–4", text: "Umsetzung der Verbindungen, Testlauf mit echten Daten parallel zum Altbetrieb." },
      { phase: "Betrieb", dauer: "laufend", text: "Überwachung und Anpassung, wenn sich eines Ihrer Systeme ändert." }
    ],
    zeitrahmen: "Eine einzelne Verbindung steht oft in 1–2 Wochen. Migrationen ganzer Systeme brauchen je nach Datenlage 4–8 Wochen — wir nennen den Rahmen nach der Bestandsaufnahme.",
    faq: [
      {
        q: "Unsere Fachsoftware ist ein Nischenprodukt — geht das trotzdem?",
        a: "Meistens ja. Fast jede Software bietet Export, Import oder eine Schnittstelle. Was möglich ist, prüfen wir in der Bestandsaufnahme, bevor Kosten entstehen."
      },
      {
        q: "Was passiert, wenn eine Verbindung ausfällt?",
        a: "Die Überwachung meldet es uns und Ihnen, bevor sich Fehler in den Daten fortpflanzen. Reaktionszeiten vereinbaren wir vertraglich."
      }
    ],
    kombiniert: ["prozessautomatisierung", "reporting", "individualsoftware"],
    meta: {
      title: "Integrationen & API für Unternehmen — AIVANCE",
      description: "Systeme verbinden statt Daten abtippen: Schnittstellen, Datenmigration, Überwachung. Einzelne Verbindungen oft in 1–2 Wochen."
    }
  }
];
