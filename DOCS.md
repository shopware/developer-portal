# Shopware Docs CLI

Shopware Docs CLI is a tool for managing commands and mountpoints for `developer-portal`.

```
Usage: docs-cli [options] [command]

CLI for Shopware Docs

Options:
  -V, --version     output the version number
  --vv              --verbose
  --vvv             --debug
  -h, --help        display help for command

Commands:
  install           Update aliases/scripts in package.json
  embed [options]   Embed all docs repositories to developer-portal
  clone [options]   Clone <src> from <branch> in <repository> to <dst> in developer-portal
  link [options]    Copy <src> from current working directory to <dst> in developer-portal
  remove [options]  Remove <dst> in developer-portal
  preview           Preview docs
  build             Build docs in developer-portal
  test [options]    Run vitest end-to-end suite in your local developer-portal repository. Use build flag (-b / --build) to run test on the build instead of dev server.
  pull              Pull docs and install new dependencies in developer-portal
  help [command]    display help for command
```

# TL;DR

- Clone `shopware/developer-portal` repository and install dependencies (`pnpm i`)
- _(one-time)_ Set up aliases in your `package.json` - `../developer-portal/docs-cli install`
- _(one-time)_ Link local documentation - `pnpm run docs:link` (or `--symlink` (default) or `--copy` or `--rsync`)
- Preview local documentation - `pnpm run docs:preview`

You might also want or need to:

- Optionally, embed some or all docs from remote repositories directly from your project - `pnpm run docs:embed`
- Occasionally, pull changes in `developer-portal` directly from your project - `pnpm run docs:pull`

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

CLI will create a `.docs-cli` directory in your root/projects dir and save some configuration (directory configuration,
env vars for Figma, GitLab credentials, ...):

- `/www/.docs-cli` if you have your projects located in `/www/$project`
- `/home/user/projects/.docs-cli` if you have your projects located in `/home/user/projects/$project`
- `/projects-bar/.docs-cli` if you have your projects located in `/projects-bar/$project`

## Install aliases to your `package.json`

Continue by adding common aliases to your projects' `package.json`. You can do this automatically by
running `../developer-portal/docs-cli install` from your project root and select aliases that you would like to use.

```sh
$ ../developer-portal/docs-cli install
```

This will alter your `package.json` scripts with selected aliases:

```json
{
  "scripts": {
    "docs:link": "../developer-portal/docs-cli link",
    "docs:preview": "../developer-portal/docs-cli preview",
    "docs:embed": "../developer-portal/docs-cli embed"
  }
}
```

# Usage

## Mount all docs

This is only needed for the `build` and `test` processes to work because they require all docs to be properly mounted.

```sh
$ pnpm run docs:embed
# or
$ ../developer-portal/docs-cli embed
```

This command will clone all repositories into your `developer-portal` checkout. You can use `--configure` (or `-c`) and
manually enter custom branches and organizations for testing feature branches and forked repositories.

## Remove mount points

You can remove mounted repositories by running the `remove` command.

```sh
$ pnpm run docs:remove
# or
$ ../developer-portal/docs-cli remove
```

This command will remove symlinks and other mounted folders from your local `developer-portal` checkout.

## Preview your docs

Once your aliases are set up, you can use `pnpm`/`npm`/`yarn` to preview docs.

```sh
$ pnpm run docs:preview
# or
$ ../developer-portal/docs-cli preview
```

This command will run `dev` process in your local `developer-portal` checkout.

## Update `developer-portal` repository

Keep your local `developer-portal` checkout up to date by running the `pull` command.

```sh
$ pnpm run docs:pull
# or
$ ../developer-portal/docs-cli pull
# or
$ cd ../developer-portal && git pull --ff && pnpm i
```

This command will pull changes in `developer-portal` on your current branch and install the latest dependencies.

## More

See default repository and branch configuration in [./cli/src/data.ts](./cli/src/data.ts).