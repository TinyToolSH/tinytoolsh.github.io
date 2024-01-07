---
title: tgit
---
# `tgit`

A simple script to list all the important repositories in your local system.

```
$ tgit
```

## tinytools + dmenu = :heart:

This script supports dmenu as an interface, so you can list and manage your repos quickly through a bindkey:

```
$ dmenu_tgit
```

## dependencies:

- git
- find
- awk

## Instalation

To install `tgit` you can edit the `Makefile` to match your local setup (`tgit` is installed into the `/usr/local/bin` by default).

Afterwards enter the following command to install `tgit` (if necessary as root).

```bash
sudo make install
```

# Team

| <img src="https://github.com/Calebe94.png?size=200" alt="Edimar Calebe Castanho"> | <img src="https://github.com/gbgabo.png?size=200" alt="Gabriel Gaboardi"> |
| :-------------------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|         [Edimar Calebe Castanho (Calebe94)](https://github.com/Calebe94)          |           [Gabriel Gaboardi (Gabo)](https://github.com/gbgabo)            |

# License

All software is covered under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
