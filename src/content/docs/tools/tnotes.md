---
title: tnotes
---
# tnotes

A simple tool to create and manage your [Markdown](https://www.markdownguide.org/) notes easily.

## Installation

To install `tnotes` you can edit the `Makefile` to match your local setup (`tnotes` is installed into the `/usr/local/bin` by default).

Afterwards enter the following command to install `tnotes` (if necessary as root).

```bash
sudo make install
```

To uninstall `tnotes`, just run:

```
sudo make uninstall
```

## Usage

`tnotes` can create, rename and delete notes.

We can do that you by using the options listed bellow:

* `-n`, `--new`, `new` `<path>`: create a new note to the path informed, it creates a folder if it does not exists;
    *  `-t`, `--title`, `title` `<title>`: add title to note metadata;
    *  `-s`, `--subtitle`, `subtitle` `<subtitle>`: add subtitle to note metadata;
    *  `--tags`, `tags` `<tags>` add tags to note metadata;
* `-l`, `--list`, `list` `<path>`: list notes on a given path;
* `-o`, `--open`, `open` `<path>`: open note from a given path;
* `-m`, `--mv`, `mv` `<name>` `<new name>`: rename note file withe the name informed as argument;
* `-r`, `--rm` `rm` `<name>`: deletes a note with the title received as argument on the path informed with `--path`;

### Examples:

```bash
$ tnotes --new test.md --title="Test Note Title" --subtitle="Subtitle note" --tags="test,markdown"
```

Create a note named `test.md`. This note will have the follow metadata:

```yml
---
title: "Test Note Title"
subtitle: "Subtitle note"
date: "2021-02-11 15:17:32"
tags: ["test", "markdown"]

---
```

And that's it!

## tnotes+dmenu

We scripts supports `dmenu` as an interface, so you can list, add, rename and delete your notes quickly running a single command:

```sh
$ dmenu_tnotes
```

You can inform `dmenu_tnotes` where your notes is stored so you can manage them.
Let's say you store your notes on `~/notes/`, you can export a environment variable called `TNOTES_PATH` and call `dmenu_tnotes`:

```sh
$ export TNOTES_PATH=~/notes/; dmenu_tnotes
```

# Team

| <img src="https://github.com/Calebe94.png?size=200" alt="Edimar Calebe Castanho"> | <img src="https://github.com/gbgabo.png?size=200" alt="Gabriel Gaboardi"> | 
|:---------------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|
| [Edimar Calebe Castanho (Calebe94)](https://github.com/Calebe94)                  | [Gabriel Gaboardi (Gabo)](https://github.com/gbgabo)                      |

# License

All software is covered under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
