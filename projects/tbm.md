---
layout: post
project: tbm
version: 0.9.0
show_downloads: true

---

# tbm
#### **T**iny **B**ookmark **M**anager.

With this tool you can create and manage bookmarks in plain texts

## Dependencies

* [shup](https://github.com/pystardust/shup);
* [curl](https://curl.se);

## Installation

To install `tbm` you can edit the `Makefile` to match your local setup (`tbm` is installed into the `/usr/local/bin` by default).

Afterwards enter the following command to install `tbm` (if necessary as root).

```bash
sudo make install
```

To uninstall `tbm`, just run:

```bash
sudo make uninstall
```

## Usage

To add a bookmark you can inform the url:

```bash
$ tbm https://www.youtube.com/watch?v=eK9MRhK6lFs
https://www.youtube.com/watch?v=eK9MRhK6lFs This Must Be Really Embarrassing, Jay Anderson :) - YouTube
```

Every bookmark added will be displayed to `stdout` and also redirected to a file called `$HOME/.tbookmarks`.

To list bookmarks you can use the following command:

```bash
$ tbm -l
```

If you want to filter the list output you can use the `-f` option with the word you want to filter as argument.
For example, if you want to show only your `github` links you can do that by running the following command:

```bash
$ tbm -lf github
```

To list bookmarks by **titles** you can use `-t` option:

```bash
$ tbm -lt
```

Or to list bookmarks by **url** you can use `-u` option:

```bash
$ tbm -lu
```

You can also open `$TBM_FILE` with your default text editor(check [xdg-mime](https://linux.die.net/man/1/xdg-mime)) by using `-o` option:

```bash
$ tbm -o
```

You can change the path of `tbm` storage file by creating an environment variable called `TBM_FILE`.

If you use `bash` you can create an environment variable with the following command:

```bash
$ echo "export TBM_FILE=/path/to/tbm/storage/destination" >> $HOME/.bashrc
```

To `zsh` users:

```bash
$ echo "export TBM_FILE=/path/to/tbm/storage/destination" >> $HOME/.zshrc
```

## dmenu

You can integrate `tbm` to `dmenu` if you want. You can use it as follows:

```bash
$ tbm -lt | dmenu -p "Bookmarks" | { read title; tbm -luf $title } | { read url; xdg-open $url }
```

Or, you can use our [dmenu_tbm](https://github.com/TinyToolSH/tbm/blob/main/dmenu_tbm) wrapper,
which gives you some management options like `new` bookmark, `remove` an existing bookmark or `copy` to clipboard.

We'd recommend you to apply the [case-insensitive](https://tools.suckless.org/dmenu/patches/case-insensitive/) patch to your `dmenu`.

# Team

| <img src="https://github.com/Calebe94.png?size=200" alt="Edimar Calebe Castanho"> | <img src="https://github.com/gbgabo.png?size=200" alt="Gabriel Gaboardi"> |
|:---------------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|
| [Edimar Calebe Castanho (Calebe94)](https://github.com/Calebe94)                  | [Gabriel Gaboardi (Gabo)](https://github.com/gbgabo)                      |

# License

All software is covered under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

