import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { config } from "./src/config.ts";
import { draftLegalPaths } from "./src/content/legal.ts";

const siteUrl = new URL(config.siteUrl);
const unindexed = draftLegalPaths.map((path) => new URL(path, siteUrl).href);

export default defineConfig({
  site: siteUrl.origin,
  base: siteUrl.pathname,
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !unindexed.includes(page) })],
  vite: { plugins: [tailwindcss()] },
});
