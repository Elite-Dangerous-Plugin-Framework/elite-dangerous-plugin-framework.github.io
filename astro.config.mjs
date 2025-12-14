// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import inspectUrls from "@jsdevtools/rehype-url-inspector";
import starlightImageZoom from "starlight-image-zoom";
import starlightHeadingBadges from "starlight-heading-badges";

// https://astro.build/config
export default defineConfig({
  site: "https://elite-dangerous-plugin-framework.github.io",
  markdown: {
    rehypePlugins: [
      // @ts-ignore
      [
        inspectUrls,
        {
          selectors: ["a[href]"],
          // @ts-ignore
          inspectEach(url) {
            // local links stay locally, foreign links open in _blank
            if (!(url.node.properties.href + "").startsWith("https://")) {
              return;
            }
            url.node.properties.target = "_blank";
          },
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: "Elite: Dangerous Plugin Framework",
      plugins: [
        starlightThemeFlexoki({ accentColor: "orange" }),
        starlightImageZoom(),
        starlightHeadingBadges(),
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Elite-Dangerous-Plugin-Framework/elite-dangerous-plugin-framework",
        },
      ],
      customCss: ["./src/styles/custom.css"],

      sidebar: [
        {
          label: "For Users",
          autogenerate: { directory: "users" },
        },
        {
          label: "For Plugin Authors",
          autogenerate: { directory: "plugin-devs" },
        },
        {
          label: "Internal Docs",
          autogenerate: { directory: "internal" },
        },
      ],
    }),
  ],
});
