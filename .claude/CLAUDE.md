# Comprehensive Web Design & Development Workflow

## 1. Architecture & Setup
- **Tech Stack:** Use HTML5, Tailwind CSS, and Vanilla JavaScript (or specify your framework like React/Next.js here).
- **Structure:** Keep code modular. If building a larger site, extract reusable parts (Header, Footer, Cards) into separate files/components.
- **Design System:** Define core colors, typography, and spacing in a `tailwind.config.js` or via CSS variables early on. Avoid hardcoding arbitrary magic numbers.

## 2. Iterative Build Process
When a reference image, design file, or prompt is provided:
1. **Scaffold:** Create the basic semantic HTML structure first (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
2. **Draft:** Apply structural Tailwind classes for layout (Flexbox/Grid, spacing).
3. **Style:** Apply typography, exact colors, and fine-grained padding/margins.
4. **Interactive:** Add necessary JavaScript for UI states (mobile menu toggles, modals, dropdowns).

## 3. Visual QA & Self-Correction (The Screenshot Loop)
If working on a specific layout match:
1. Render the page locally and take a full-page screenshot (using Puppeteer or similar if configured).
2. Compare the screenshot to the provided reference design.
3. Critically analyze mismatches in:
   - Spacing, margins, and padding
   - Typography (font family, weight, line-height, letter-spacing)
   - Colors and gradients
   - Shadows, borders, and radii
4. Fix the mismatches in the code.
5. Repeat until the visual output is within ~2px of the reference.

## 4. Quality Standards & Defaults
- **Responsive First:** Always design mobile-first (`sm:`, `md:`, `lg:` prefixes in Tailwind). Ensure the design doesn't break on extreme screen sizes.
- **Accessibility (a11y):** - ALWAYS include `alt` attributes for images.
  - Use `aria-labels` for icon-only buttons.
  - Ensure sufficient color contrast.
  - Make sure interactive elements are reachable via keyboard (`tabindex`, focus states).
- **Assets:** - Use modern SVG icons (e.g., Lucide or Heroicons). Do not use blurry PNGs for UI elements.
  - Use `https://placehold.co/` for missing images, but clearly label them as placeholders.

## 5. Execution Rules
- Do not stop until a feature is fully working.
- If you need to install a package (e.g., via npm), ask for permission or state clearly why it is needed.
- Write clean, self-documenting code. Add brief comments for complex layout tricks or logic.