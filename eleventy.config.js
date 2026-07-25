module.exports = function (eleventyConfig) {
  // Statische Assets unverändert übernehmen
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  // Selbst gehostete Inter-Schnitte (nur die tatsächlich genutzten, § 12)
  for (const weight of [400, 500, 600, 700, 800, 900]) {
    eleventyConfig.addPassthroughCopy({
      [`node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff2`]: `fonts/inter-latin-${weight}-normal.woff2`,
    });
  }

  // CSS baut die Tailwind-CLI separat (npm run build:css)
  eleventyConfig.ignores.add("src/css/**");
  // Assets nur kopieren, nicht als Templates verarbeiten (z. B. README.md im Logo-Ordner)
  eleventyConfig.ignores.add("src/images/**");
  eleventyConfig.ignores.add("src/js/**");

  eleventyConfig.addFilter("findBySlug", (arr, slug) =>
    (arr || []).find((item) => item.slug === slug)
  );

  eleventyConfig.addFilter("filterByCluster", (arr, cluster) =>
    (arr || []).filter((item) => item.cluster === cluster)
  );

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
