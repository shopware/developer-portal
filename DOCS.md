# Shopware Docs CLI

Shopware Docs CLI is a tool for managing commands and mountpoints for `developer-portal`.

```
Usage: docs-cli [options] [command]

CLI for Shopware Docs

Options:
  -V, --version      output the version number
  --vv               --verbose
  --vvv              --debug
  -h, --help         display help for command

Commands:
  install            Update aliases/scripts in package.json
  embed              Clone <src> from <branch> in <repository> to <dst>
  clone [options]    Clone <src> from <branch> in <repository> to <dst>
  copy [options]     Copy <src> to <dst>
  symlink [options]  Symlink <src> from <branch> in <repository> to <dst>
  remove [options]   Remove <dst>
  rsync [options]    Reync <src> to <dst>
  preview            Preview docs
  build              Build docs
  test [options]     Run vitest end-to-end suite in your local developer-portal repository. Use build flag (-b / --build) to run test on the build.
  pull               Pull docs and install new dependencies
  help [command]     display help for command
```

# Usage

Clone `developer-portal` repository to your computer and install dependencies.

```
$ cd /www
$ git clone ssh://git@github.com/shopware/developer-portal.git
$ cd developer-portal
$ pnpm i
```

## Install aliases to package.json

Continue by adding common aliases to your project's `package.json`. You can do this automatically by
running `docs-cli install` and select aliases that you would like to use.

```sh
$ ../developer-portal/docs-cli install
```

## Preview your docs

Once your aliases are set up, you can use `pnpm`/`npm`/`yarn` to preview docs.

```sh
$ pnpm run docs:preview
$ npm run docs:preview
$ yarn docs:preview
```

## Update `developer-portal` repository

Keep your local `developer-portal` checkout up to date.

```sh
$ pnpm run docs:pull
```

## Mount all docs

Clone all repositories into your `developer-portal` checkout.

```sh
$ pnpm run docs:embed
```