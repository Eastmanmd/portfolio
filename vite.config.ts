// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages static export mode.
// Enabled by setting GITHUB_PAGES=1 in CI (see .github/workflows/deploy.yml).
// Lovable's own preview/publish builds leave this unset and use the default Cloudflare target.
const isPages = process.env.GITHUB_PAGES === "1";
const pagesBase = process.env.PAGES_BASE || "/";

export default defineConfig({
  vite: isPages ? { base: pagesBase } : {},
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPages && {
      // Prerender every page route to static HTML for GitHub Pages.
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
      pages: [
        { path: "/" },
        { path: "/technical" },
        { path: "/technical/scrnaseq-seurat-v5-pipeline" },
        { path: "/technical/nextflow-aws-batch-spot" },
        { path: "/technical/bayesian-normalization-sparse" },
        { path: "/notes" },
        { path: "/notes/espresso-extraction" },
        { path: "/notes/cascades-solitude" },
        { path: "/notes/reading-list-winter" },
      ],
    }),
  },
});
