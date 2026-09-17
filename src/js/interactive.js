/* ═══════════════════════════════════════════════════════════════════════════
   Interaktive Module — C (Schaukasten & Galerie) und H (Branchen-Umschalter)
   Ein IIFE je Modul. Alles ohne JS lesbar, alles per Tastatur bedienbar.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Gemeinsames Tab-Verhalten: Roving-Tabindex, Pfeile, Pos1/Ende ──
     tabs: Array von <button role="tab">, onSelect(i, durchTastatur) */
  function wireTabs(tabs, onSelect) {
    function select(i, focus) {
      tabs.forEach(function (t, n) {
        var on = n === i;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
      });
      if (focus) tabs[i].focus();
      onSelect(i);
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(i, false); });
      tab.addEventListener("keydown", function (e) {
        var last = tabs.length - 1;
        var next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = last;
        if (next === null) return;
        e.preventDefault();
        select(next, true);
      });
    });
    return select;
  }

  /* ═══ Modul C-1 · Produkt-Schaukasten mit fortlaufender Punktleiste ═══
     Ein Mockup zur Zeit, Punktleiste mit Laufbalken. Das Abspielen selbst
     übernimmt /js/mockup.js: ein verborgenes Panel schneidet den
     IntersectionObserver dort ab, ein eingeblendetes startet ihn neu. */
  (function () {
    var box = document.querySelector("[data-showcase]");
    if (!box) return;
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(box.querySelectorAll('[role="tabpanel"]'));
    if (tabs.length < 2 || tabs.length !== panels.length) return;

    var interval = parseInt(box.dataset.showcaseInterval, 10) || 9000;
    var timer = null;
    var current = 0;
    var angehalten = false;
    var imBild = false;

    box.style.setProperty("--dot-dauer", interval + "ms");

    function zeige(i) {
      current = i;
      panels.forEach(function (p, n) {
        var on = n === i;
        p.hidden = !on;
        // inert hält Tastatur und Vorleseprogramme aus den ruhenden Panels
        if ("inert" in p) p.inert = !on;
      });
      neustartBalken();
    }

    /* Der Laufbalken wird über einen Klassenwechsel neu angestoßen. */
    function neustartBalken() {
      tabs.forEach(function (t) { t.classList.remove("is-running"); });
      if (angehalten || reducedMotion || !imBild) return;
      var aktiv = tabs[current];
      void aktiv.offsetWidth; // Reflow erzwingen, sonst läuft die alte Animation weiter
      aktiv.classList.add("is-running");
    }

    var select = wireTabs(tabs, function (i) { zeige(i); planen(); });

    function planen() {
      if (timer) { clearTimeout(timer); timer = null; }
      if (angehalten || reducedMotion || !imBild) return;
      timer = setTimeout(function () {
        select((current + 1) % tabs.length, false);
      }, interval);
    }

    function anhalten() {
      if (angehalten) return;
      angehalten = true;
      if (timer) { clearTimeout(timer); timer = null; }
      tabs.forEach(function (t) { t.classList.remove("is-running"); });
    }

    /* Wer eingreift, behält die Kontrolle — der Wechsel läuft nicht wieder an. */
    box.addEventListener("pointerdown", anhalten, { passive: true });
    box.addEventListener("focusin", anhalten);
    document.addEventListener("visibilitychange", function () {
      document.hidden ? (timer && clearTimeout(timer), timer = null) : planen();
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e) {
        imBild = e[0].isIntersecting;
        imBild ? (planen(), neustartBalken()) : (timer && clearTimeout(timer), timer = null);
      }, { threshold: 0.3 }).observe(box);
    } else {
      imBild = true;
    }

    zeige(0);
    tabs.forEach(function (t, n) { t.tabIndex = n === 0 ? 0 : -1; t.setAttribute("aria-selected", String(n === 0)); });
  })();

  /* ═══ Modul C-2 · Referenz-Galerie ═══
     Auf schmalen Schirmen eine Schnappschiene mit Punktleiste, auf breiten das
     gewohnte Raster. Kein Auto-Advance: auf dem Desktop stehen ohnehin alle
     Karten nebeneinander, auf Mobil ist Wischen die Erwartung.

     Bewusst KEIN role="tablist": die Karten sind Links und auf dem Desktop
     alle gleichzeitig sichtbar — ein Tab/Tabpanel-Verhältnis wäre an dieser
     Stelle eine falsche Auskunft an Vorleseprogramme. Die Punkte sind
     Sprungmarken und melden ihren Zustand über aria-current.
     Die Zähler starten erst, wenn ihre Karte aktiv wird (siehe main.js). */
  (function () {
    var galerie = document.querySelector("[data-gallery]");
    if (!galerie || !("IntersectionObserver" in window)) return;
    var karten = Array.prototype.slice.call(galerie.querySelectorAll("[data-card]"));
    var punkte = Array.prototype.slice.call(galerie.querySelectorAll("[data-dot]"));
    if (!karten.length) return;

    var aktiv = -1;
    function setzeAktiv(i) {
      if (i === aktiv || i < 0) return;
      aktiv = i;
      punkte.forEach(function (d, n) {
        if (n === i) d.setAttribute("aria-current", "true");
        else d.removeAttribute("aria-current");
      });
      karten[i].dispatchEvent(new CustomEvent("card:active", { bubbles: true }));
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setzeAktiv(karten.indexOf(e.target));
      });
    }, { threshold: 0.55 });
    karten.forEach(function (k) { io.observe(k); });

    function springe(i) {
      karten[i].scrollIntoView({ inline: "center", block: "nearest",
        behavior: reducedMotion ? "auto" : "smooth" });
    }
    punkte.forEach(function (d, i) {
      d.addEventListener("click", function () { springe(i); });
      d.addEventListener("keydown", function (e) {
        var last = punkte.length - 1, next = null;
        if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
        else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = last;
        if (next === null) return;
        e.preventDefault();
        punkte[next].focus();
        springe(next);
      });
    });
  })();

  /* ═══ Modul H · Branchen-Umschalter ═══
     Personalisierung, kein Vergleich: die Wahl wechselt den gezeigten Inhalt.
     Die vier Branchennamen bleiben dabei immer sichtbar — der Umschalter
     nimmt nichts weg, er vertieft. Ohne JS stehen alle vier Tafeln unterein-
     ander (Ausgangszustand der Seite). */
  (function () {
    var box = document.querySelector("[data-switcher]");
    if (!box) return;
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(box.querySelectorAll('[role="tabpanel"]'));
    if (tabs.length < 2 || tabs.length !== panels.length) return;

    function zeige(i) {
      panels.forEach(function (p, n) {
        var on = n === i;
        p.hidden = !on;
        if ("inert" in p) p.inert = !on;
      });
    }

    wireTabs(tabs, function (i) {
      if (!reducedMotion && document.startViewTransition) {
        document.startViewTransition(function () { zeige(i); });
      } else {
        zeige(i);
      }
    });

    zeige(0);
    tabs.forEach(function (t, n) { t.tabIndex = n === 0 ? 0 : -1; t.setAttribute("aria-selected", String(n === 0)); });
    box.classList.add("is-live"); // erst jetzt darf das Panel-Raster einspaltig werden
  })();
})();
