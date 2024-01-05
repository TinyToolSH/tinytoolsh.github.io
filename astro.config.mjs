import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TinyTools Docs",
      social: {
        github: "https://github.com/TinyToolSH",
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
          label: "Start Here",
          items: [
            { label: "About the tools", link: "/about" },
            { label: "Setup", link: "/setup" },
          ],
        },
        {
          label: "Tools",
          autogenerate: { directory: "tools" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});