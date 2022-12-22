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

# TL;DR

- Clone `shopware/developer-portal` repository and install dependencies (`pnpm i`)
- _(one-time)_ Set up aliases in your `package.json` - `../developer-portal/docs-cli install`
- Preview local documentation - `pnpm run docs:preview --symlink` (or `--copy` or `--rsync`)

You might also want/need to:

- _(optional)_ Embed some or all docs from remote repositories directly from your project - `pnpm run docs:embed`
- _(every now and then)_ Pull changes in `developer-portal` directly from your project - `pnpm run docs:pull`
- _(one-time) Symlink your docs by running `pnpm run docs:symlink`

# Setup

## Clone and install `developer-portal`

Clone `developer-portal` repository to your computer and install dependencies.

```
$ cd /www
$ git clone ssh://git@github.com/shopware/developer-portal.git
$ cd developer-portal
$ pnpm i
```

## Local storage

The tool will ask you to configure your _root_ projects directory and `developer-portal` repository on-the-fly when it
needs to reference the correct dir.

For ease of use, CLI will create a `.docs-cli` directory in your root/projects dir and save some configuration (env vars
for Figma, GitLab credentials, ...):

- `/www/.docs-cli` if you have your projects located in `/www/$project`
- `/home/user/projects/.docs-cli` if you have your projects located in `/home/user/projects/$project`
- `/projects-bar/.docs-cli` if you have your projects located in `/projects-bar/$project`

## Install aliases to your `package.json`

Continue by adding common aliases to your projects' `package.json`. You can do this automatically by
running `../developer-portal/docs-cli install` from your project root and select aliases that you would like to use.

```sh
$ ../developer-portal/docs-cli install
```

This will alter your `package.json` scripts with some aliases:

```json
{
  "scripts": {
    "docs:copy": "../developer-portal/docs-cli copy",
    "docs:preview": "../developer-portal/docs-cli preview",
    "docs:embed": "../developer-portal/docs-cli embed"
  }
}
```

# Usage

## Mount all docs

Clone all repositories into your `developer-portal` checkout. This is only needed for the `build` and `test` processes
to work.

```sh
$ pnpm run docs:embed
# or
$ ../developer-portal/docs-cli embed
```

You can use `--quick` flag for quick/input-less process, or you can skip the flag and override `branch`
or `organization` (for forked repositories).

## Remove mount points

You can remove mounted repositories by running the `remove` command.

```sh
$ pnpm run docs:remove
# or
$ ../developer-portal/docs-cli remove
```

This command will remove symlinks and other mounted folders.

## Preview your docs

Once your aliases are set up, you can use `pnpm`/`npm`/`yarn` to preview docs.

```sh
$ pnpm run docs:preview
# or
$ npm run docs:preview
# or
$ yarn docs:preview
# or without an alias
$ ../developer-portal/docs-cli preview
```

## Update `developer-portal` repository

Keep your local `developer-portal` checkout up to date by running the `pull` command.

```sh
$ pnpm run docs:pull
```

This command will pull changes on your current branch and install dependencies.

## More

### Symlink, rsync, copy and clone

You can use those commands to mount your local repositories (instead of using `embed` which clones remote repositories):

- `symlink` - you can use symlinking method for a preview. Symlinking won't work with `build` command because of some
  issues with symlinks and rollup bundler
- `rsync` - (long-running process) do this when you are actively developing your docs and you want to build docs
  with `build` command
- `copy` - do this for a one-time copy with `cp` command when you want to build docs with `build` command
- `clone` - `embed` command is a wrapper for `clone` command as configured in [./cli/src/data.ts](./cli/src/data.ts)