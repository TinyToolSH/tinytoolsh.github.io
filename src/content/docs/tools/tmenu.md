---
title: tmenu
---
# tmenu

A tiny wrapper for menu utilities with support for:

- dmenu
- fzf
- rofi
- xmenu

## Dependencies

- dmenu

### Optional

- fzf
- rofi
- xmenu

## Installation

To install `tmenu` you can edit the `Makefile` to match your local setup (`tmenu` is installed into the `/usr/local/bin` by default).

Afterwards enter the following command to install `tmenu` (if necessary as root).

```bash
sudo make install
```

To uninstall `tmenu`, just run:

```bash
sudo make uninstall
```

## Usage

Pipe a list of new line separated items into `tmenu` to display the list in a menu utility of choice (default: dmenu)

```bash

ls . | tmenu

```

To select a specific menu utility

```bash
# for fzf
ls . | tmenu -f

# for dmenu
ls . | tmenu -d

# for rofi
ls . | tmenu -r

# for xmenu
ls . | tmenu -x
```

Any argument you want to pass to the menu utility can be declared in double quotes

```bash
ls . | tmenu -d "-l 8 -p 'Files'"
```
