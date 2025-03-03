// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import { remarkModifiedTime } from "./plugins/remark-modified-time";

// https://astro.build/config
export default defineConfig({
  site: "https://aobako.github.io",
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});
