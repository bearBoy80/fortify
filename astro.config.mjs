import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify(),
});