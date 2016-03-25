# is-trademarked-cli [![NPM version](https://img.shields.io/npm/v/is-trademarked-cli.svg)](https://npmjs.com/package/is-trademarked-cli) [![NPM downloads](https://img.shields.io/npm/dm/is-trademarked-cli.svg)](https://npmjs.com/package/is-trademarked-cli) [![Build Status](https://img.shields.io/circleci/project/egoist/is-trademarked-cli/master.svg)](https://circleci.com/gh/egoist/is-trademarked-cli)

> CLI tool to check if a word is trademarked.

![preview](https://ooo.0o0.ooo/2016/03/24/56f3f232ebe57.png)

## Install

```bash
$ npm install -g is-trademarked-cli
```

## Usage

```bash
$ is-trademarked github
GITHUB is a trademark reg in 2010
Computer services, namely, hosting and maintaining an on-line web site for others to collaboratively develop software; Hosting an on-line community web site featuring a distributed control system for the collaborative development of software

$ is-trademarked unicorns
✔ unicorns is available

# wildcard
$ is-trademarked "macbook*"
MACBOOK is a trademark reg in 2007
Computers, notebook computers, computer hardware, computer operating system software, computer peripherals
MACBOOK AIR is a trademark reg in 2008
computers, notebook computers, computer hardware, computer operating system software, computer peripherals
MACBOOK PRO is a trademark reg in 2012
Computers; notebook computers; computer hardware; computer operating system software; electrical power adaptors; electrical power cords; computer batteries; remote controls for use with computers; cables and connectors for use with computers and computer peripherals; downloadable electronic publications in the nature of instruction manuals in the field of computers, notebook computers, computer hardware, computer operating system software, computer batteries and other computer accessories and peripherals
```

### Your own API token

Since the API has rate-limit, you can supply your own API token. Sign up to [markerapi](http://www.markerapi.com/) to get one for free.

```bash
# replace with your token
$ is-trademarked -t yZ32rW4Pq6
```

## Related

- [is-trademarked](https://github.com/egoist/is-trademarked) - API of this module

## License

MIT © [EGOIST](https://github.com/egoist)
