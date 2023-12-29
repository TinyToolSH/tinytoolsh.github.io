import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      logo: {
        src: "./src/assets/tinytools_alpha.svg",
        replacesTitle: true,
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Tools",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Snippets",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
