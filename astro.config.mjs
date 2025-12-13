// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  site: "https://elite-dangerous-plugin-framework.github.io",
  integrations: [
    starlight({
      title: "Elite: Dangerous Plugin Framework",
      plugins: [starlightThemeFlexoki({ accentColor: "orange" })],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Elite-Dangerous-Plugin-Framework/elite-dangerous-plugin-framework",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
