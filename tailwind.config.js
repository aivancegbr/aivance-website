/** Design-Tokens unverändert aus dem bisherigen CDN-Setup übernommen */
module.exports = {
  content: ["./src/**/*.{njk,html,md,js}"],
  theme: {
    extend: {
      colors: {
        blue: { 600: "#2563eb", 700: "#1d4ed8" },
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.06)",
        phone: "0 32px 80px rgba(0,0,0,.18)",
      },
    },
  },
  plugins: [],
};
