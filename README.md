# Tinytools home & docs

**TinyToolSH**, or just tinytools, is an acronym for Tiny Tools written in SHELL script.
Our projects are designed to improve your productivity in a simple way.

Its docs are written in md + mdx files managed by the Astro static site generator + Starlight documentaion template.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installs dependencies                             |
| `npm run readme`          | Fetches an organization repositories' readme file |
| `npm run dev`             | Starts local dev server at `localhost:4321`       |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro -- --help` | Get help using the Astro CLI                      |

To learn more about the stack, check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build).

## 📖 Fetching readme files from remote repositories

Each script page is its own repository's readme file. To help on syncing the pages with the remote readmes, it can now fetch the latest readme from each script remote repos so it keeps the single source of truth nature.

You can update your files anytime by calling `npm run readme`. This same command will always be executed before build start.

## Team

| <img src="https://github.com/Calebe94.png?size=200" alt="Edimar Calebe Castanho"> | <img src="https://github.com/gbgabo.png?size=200" alt="Gabriel Gaboardi"> |
| :-------------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|         [Edimar Calebe Castanho (Calebe94)](https://github.com/Calebe94)          |           [Gabriel Gaboardi (Gabo)](https://github.com/gbgabo)            |

## License

All software is covered under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
