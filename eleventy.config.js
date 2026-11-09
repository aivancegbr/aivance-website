const crypto = require("node:crypto");

module.exports = function (eleventyConfig) {
  // Statische Assets unverändert übernehmen
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });
  // security.txt (RFC 9116) — Expires spaetestens nach einem Jahr erneuern
  eleventyConfig.addPassthroughCopy({ "src/.well-known": ".well-known" });

  // Brand-Schriften: Instrument Sans (Display/Text) + IBM Plex Mono (Labels/Messwerte)
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });

  // CSS baut die Tailwind-CLI separat (npm run build:css)
  eleventyConfig.ignores.add("src/css/**");
  // Assets nur kopieren, nicht als Templates verarbeiten (z. B. README.md im Logo-Ordner)
  eleventyConfig.ignores.add("src/images/**");
  eleventyConfig.ignores.add("src/js/**");
  // Entwürfe (z. B. Artikel) nur im lokalen Dev-Server, nie im Produktions-Build
  if (process.env.ELEVENTY_RUN_MODE !== "serve") eleventyConfig.ignores.add("src/entwurf/**");

  eleventyConfig.addFilter("findBySlug", (arr, slug) =>
    (arr || []).find((item) => item.slug === slug)
  );

  eleventyConfig.addFilter("filterByCluster", (arr, cluster) =>
    (arr || []).filter((item) => item.cluster === cluster)
  );

  /* CSP: Jedes ausfuehrbare Inline-Script der Seite bekommt seinen SHA-256-Hash
     in script-src (Platzhalter im Meta-Tag von base.njk). So bleibt die Policy
     ohne 'unsafe-inline', und ein geaendertes Script kann nicht still
     blockiert werden, weil der Hash bei jedem Build neu entsteht. JSON-LD ist
     kein ausfuehrbares Script und braucht keinen Hash. */
  eleventyConfig.addTransform("csp-hashes", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    if (!content.includes("__CSP_SCRIPT_HASHES__")) return content;
    const hashes = new Set();
    for (const m of content.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
      const attrs = m[1] || "";
      if (/\ssrc=/.test(attrs) || /type=["']application\/ld\+json["']/.test(attrs)) continue;
      hashes.add("'sha256-" + crypto.createHash("sha256").update(m[2], "utf8").digest("base64") + "'");
    }
    return content.replace("__CSP_SCRIPT_HASHES__", [...hashes].join(" "));
  });

  eleventyConfig.addFilter("currentYear", () => String(new Date().getFullYear()));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
