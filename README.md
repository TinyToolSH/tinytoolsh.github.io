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

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## About TinyToolSH

**TinyToolSH** is an acronym for Tiny Tools written in SHELL script.
Our projects are designed to improve your productivity in a simple way.

## Our Projects

- [tgoeswall](/projects/tgoeswall) - make Geostationary Operational Environmental Satellite images, your wallpaper.
- [tmenu](/projects/tmenu) - A simple dmenu wrapper to create menus.
- [tnotes](/projects/tnotes) - A simple dmenu wrapper to create and access your Markdown notes.
- [tpomodoro](/projects/tpomodoro) - a simple script to manage your time using the pomodoro technique.
- [tprogbar](/projects/tprogbar) - a simple commandline tool to help you make your our ASCII progress bar.
- [tsearch](/projects/tsearch) - A simple tool to request any search the way you want.
- [ttodo](/projects/ttodo) - A simple dmenu wrapper to create and access your todo list.
- [tyaml](/projects/tyaml) - A simple script to parse a yaml file.
- [tmdpres](/projects/tmdpres) - A tiny markdown presentation generator.
- [tbm](/projects/tbm) - A tiny tool to create url bookmarks in plain texts.

## Installation

Every _tinytool_ has a Makefile that you can edit the variables to match where to install it and where to place default config files (the default namespace is `/usr/bin`).

Afterwards enter the following command to install the **tinytool** (if necessary as root):

```bash
make install
```

To uninstall the **tinytool** you can run:

```bash
make uninstall
```

## Team

| <img src="https://github.com/Calebe94.png?size=200" alt="Edimar Calebe Castanho"> | <img src="https://github.com/gbgabo.png?size=200" alt="Gabriel Gaboardi"> |
| :-------------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|         [Edimar Calebe Castanho (Calebe94)](https://github.com/Calebe94)          |           [Gabriel Gaboardi (Gabo)](https://github.com/gbgabo)            |

## License

All software is covered under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
