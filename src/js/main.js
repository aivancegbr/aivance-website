/* AIVANCE – zentrales Site-JS: Navigation, Reveal, FAQ, Formular, Zähler */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Copyright-Jahr (Bugfix B3) ── */
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ── Mega-Menü + Branchen-Dropdown (§ 4: Enter/Space öffnet, Escape schließt, Fokusfalle) ── */
  function setupMenu(btnId, panelId, trapFocus) {
    var btn = document.getElementById(btnId);
    var panel = document.getElementById(panelId);
    if (!btn || !panel) return;

    function open() {
      panel.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
    function close(refocus) {
      panel.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      if (refocus) btn.focus();
    }
    function isOpen() { return panel.classList.contains("open"); }

    btn.addEventListener("click", function () { isOpen() ? close(false) : open(); });

    // Hover nur auf Geräten mit Maus
    if (window.matchMedia("(hover: hover)").matches) {
      var hoverTimer;
      [btn, panel].forEach(function (el) {
        el.addEventListener("mouseenter", function () { clearTimeout(hoverTimer); open(); });
        el.addEventListener("mouseleave", function () { hoverTimer = setTimeout(function () { close(false); }, 150); });
      });
      if (btn.parentElement !== panel.parentElement) {
        // Mega-Menü: Lücke zwischen Button und Panel überbrücken
        btn.closest("nav").addEventListener("mouseleave", function () { close(false); });
      }
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) close(true);
      if (e.key === "Tab" && isOpen() && trapFocus) {
        var focusables = panel.querySelectorAll("a, button");
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); btn.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); close(false); }
        else if (!e.shiftKey && document.activeElement === btn) { e.preventDefault(); first.focus(); }
      }
    });

    document.addEventListener("click", function (e) {
      if (isOpen() && !panel.contains(e.target) && !btn.contains(e.target)) close(false);
    });
  }
  setupMenu("megaBtn", "megaPanel", true);
  setupMenu("branchenBtn", "branchenPanel", false);

  /* ── Mobiles Vollbild-Overlay (§ 4) ── */
  var menuBtn = document.getElementById("menuBtn");
  var overlay = document.getElementById("mobileOverlay");
  var closeBtn = document.getElementById("menuCloseBtn");
  if (menuBtn && overlay && closeBtn) {
    function openOverlay() {
      overlay.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function closeOverlay() {
      overlay.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      menuBtn.focus();
    }
    menuBtn.addEventListener("click", openOverlay);
    closeBtn.addEventListener("click", closeOverlay);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) closeOverlay();
    });
    overlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { closeOverlay(); });
    });
    // Cluster-Akkordeons
    overlay.querySelectorAll(".mobile-accordion").forEach(function (accBtn) {
      accBtn.addEventListener("click", function () {
        var body = accBtn.nextElementSibling;
        var expanded = accBtn.getAttribute("aria-expanded") === "true";
        accBtn.setAttribute("aria-expanded", String(!expanded));
        body.classList.toggle("open");
        var icon = accBtn.querySelector(".faq-icon");
        if (icon) icon.style.transform = expanded ? "" : "rotate(180deg)";
      });
    });
  }

  /* ── Sticky-Header ab 80 px Scroll: Trennlinie tritt hervor (statt Schatten,
        § 4 — die Marke arbeitet mit Haarlinien, nicht mit Tiefe) ── */
  var navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      navbar.style.borderBottomColor = window.scrollY > 80 ? "#C2C2BA" : "";
    }, { passive: true });
  }

  /* ── Scroll-Reveal ── */
  if (!reducedMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.07 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }

  /* ── FAQ-Akkordeon ── */
  document.querySelectorAll("[data-faq-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = btn.nextElementSibling;
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      body.classList.toggle("hidden");
      var icon = btn.querySelector(".faq-icon");
      if (icon) icon.style.transform = expanded ? "" : "rotate(180deg)";
    });
  });

  /* ── Zähler: Zielwert steht im HTML (Bugfix B2), JS animiert nur ── */
  function animateCounter(el) {
    var finalText = el.dataset.finalText || el.textContent;
    var target = parseFloat(el.dataset.target);
    if (isNaN(target) || reducedMotion) { el.textContent = finalText; return; }
    var prefix = el.dataset.prefix || "";
    var suffix = el.dataset.suffix || "";
    var decimals = target % 1 !== 0 ? 1 : 0;
    var start = performance.now();
    var duration = 1400;
    function step(now) {
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + (eased * target).toFixed(decimals).replace(".", ",") + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = finalText;
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var seen = new WeakSet();
    var counterIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen.has(e.target)) {
          seen.add(e.target);
          e.target.dataset.finalText = e.target.textContent;
          animateCounter(e.target);
          counterIo.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll(".counter-num[data-target]").forEach(function (el) { counterIo.observe(el); });
  }

  /* ── Kontaktformular → interner Proxy, Fehler mit aria-live (§ 12) ── */
  var form = document.getElementById("contactForm");
  if (form) {
    var submitCount = 0;
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var errorEl = document.getElementById("formError");
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (submitCount >= 3) {
        var isEn = (document.documentElement.lang || "de").startsWith("en");
        errorEl.textContent = isEn
          ? "Too many attempts. Please try again in a moment."
          : "Zu viele Versuche. Bitte warten Sie kurz und versuchen Sie es erneut.";
        errorEl.classList.remove("hidden");
        return;
      }
      submitCount += 1;
      var original = btn.textContent;
      btn.textContent = "Wird gesendet …";
      btn.disabled = true;
      errorEl.classList.add("hidden");
      try {
        var payload = Object.fromEntries(new FormData(form).entries());
        var res = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        var data = await res.json().catch(function () { return {}; });
        if (res.ok && data.ok) {
          form.classList.add("hidden");
          document.getElementById("successMsg").classList.remove("hidden");
        } else { throw new Error(data.error || "send failed"); }
      } catch (err) {
        btn.textContent = original;
        btn.disabled = false;
        var isEn = (document.documentElement.lang || "de").startsWith("en");
        errorEl.textContent = isEn
          ? "That didn't work. Please try again or email info@ai-vance.de."
          : "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an info@ai-vance.de.";
        errorEl.classList.remove("hidden");
      }
    });
  }
})();
