/* ═══════════════════════════════════════════════════════════════════════════
   AIVANCE Design-Tokens — abgeleitet aus der Brand Identity.

   Fünf Grau-Rollen und ein Beleg-Amber, mehr nicht. Die bestehenden
   Tailwind-Skalen sind bewusst auf diese Rollen umgebogen (statt sie in
   ~35 Templates einzeln zu ersetzen): jede Utility-Klasse im Projekt
   rendert damit automatisch in der Markenfarbe.

   Amber (#9C4B00) ist keine Dekorfarbe, sondern eine Aussage:
   hier ist etwas belegt, aktiv oder verifiziert.
   ═══════════════════════════════════════════════════════════════════════════ */

const canvas       = "#FAFAF8"; // Seitengrund
const surface      = "#FFFFFD"; // Karten, erhabene Flächen
const border       = "#D5D5CE"; // Haarlinien
const borderStrong = "#C2C2BA"; // stärkere Trennung
const ink2         = "#55554F"; // Sekundärtext
const ink          = "#161614"; // Primärtext
const inkSoft      = "#2E2E2A"; // Hover auf dunklen Flächen
const amber        = "#9C4B00"; // Evidence Amber
const amberDark    = "#7E3C00"; // Amber-Hover
const amberSurface = "#FBEEDC"; // Amber-Fläche
const amberBorder  = "#EADAC0"; // Amber-Kontur

module.exports = {
  content: ["./src/**/*.{njk,html,md,js}"],
  theme: {
    extend: {
      colors: {
        // Rollen unter Klarnamen — für neue Markup-Stellen
        canvas,
        surface,
        ink: { DEFAULT: ink, soft: inkSoft, muted: ink2 },
        line: { DEFAULT: border, strong: borderStrong, dark: "#3A3A38" },
        paper: "#EDEDEB", // Text auf Ink (Dunkelvariante)
        amber: {
          50: amberSurface,
          100: amberBorder,
          200: amberBorder,
          500: amber,
          600: amber,
          700: amberDark,
          DEFAULT: amber,
          surface: amberSurface,
          line: amberBorder,
          dark: amberDark,
          // Dunkelvariante (Footer): Amber hellt auf, damit es trägt
          onDark: "#F0A75C",
        },

        // Bestandsskalen → Markenrollen
        white: surface,
        slate: {
          50: canvas,
          100: border,
          200: borderStrong,
          300: "#A8A8A0",
          400: ink2,
          500: ink2,
          600: ink,
          700: inkSoft,
          800: ink,
          900: ink,
        },
        blue: {
          50: amberSurface,
          100: amberBorder,
          200: amberBorder,
          500: amber,
          600: amber,
          700: amberDark,
          800: amberDark,
        },
        emerald: {
          50: amberSurface,
          100: amberBorder,
          500: amber,
          600: amber,
          700: amberDark,
        },
        violet: { 50: amberSurface, 600: amber },
        red: { 600: "#8C2F17" },
      },

      fontFamily: {
        sans: ["Instrument Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      // Instrument Sans trägt 400–700. Alles Schwerere fällt auf 600 zurück,
      // Hierarchie entsteht über Größe und Laufweite, nicht über Fettung.
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "600",
        extrabold: "600",
        black: "600",
      },

      letterSpacing: {
        tighter: "-0.055em",
        tight: "-0.045em",
        normal: "0em",
        wide: "0.06em",
        wider: "0.1em",
        widest: "0.16em",
      },

      // Kanten sind scharf. Nur echte Kreise (Quellen-Marker, Avatare) bleiben rund.
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "9999px",
      },

      // Tiefe entsteht über 1px-Konturen, nicht über Schatten.
      boxShadow: {
        none: "none",
        DEFAULT: "none",
        sm: "none",
        md: "none",
        lg: "none",
        card: "none",
        phone: "0 32px 80px rgba(22,22,20,.16)",
      },
    },
  },
  plugins: [],
};
