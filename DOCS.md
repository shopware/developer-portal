# Shopware Docs CLI

Shopware Docs CLI is a tool for managing commands and mountpoints for `developer-portal`.

```
Usage: docs-cli [options] [command]

Shopware Docs CLI

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
  remove            Remove <dst> in developer-portal
  preview           Preview docs
  build             Build docs in developer-portal
  test [options]    Run vitest end-to-end suite in your local developer-portal repository. Use build flag (-b / --build) to run test on the build instead of dev server.
  pull              Pull docs and install new dependencies in developer-portal
  config [options]  Reconfigure .docs-cli
  help [command]    display help for command
```

## TL;DR

- Clone `shopware/developer-portal` repository and install dependencies for all workspaces (`pnpm i`)
- _(one-time)_ Set up aliases in your `package.json` - `../developer-portal/docs-cli install`
- _(one-time)_ Link local documentation - `pnpm run docs:link` (optional `--copy`, `--rsync` or `--symlink` (default)
  flags)
- Write your docs and preview local documentation - `pnpm run docs:preview`

You might also want or need to:

- Embed some or all docs from remote repositories directly from your project - `pnpm run docs:embed`
- Pull changes in `developer-portal` directly from your project - `pnpm run docs:pull`

Read following sections for more in-depth description about the workflow.

# Setup

## Clone and install `developer-portal`

Clone `developer-portal` repository to your computer and install dependencies.

```bash
$ cd /www
$ git clone ssh://git@github.com/shopware/developer-portal.git
$ cd developer-portal
$ pnpm i
```

Build the CLI.

```bash
$ pnpm cli:build
```

Run it.

```bash
# from a symlink
$ ./docs-cli
# from the source
$ ./cli/dist/docs-cli.js
# pkg version
$ ./cli/dist/docs-cli-linux
```

![Checkout developer-portal](./cli/demo/checkout.gif)

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
running `../developer-portal/docs-cli install` from your project dir and select aliases that you would like to use.

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

![Install CLI](./cli/demo/install.gif)

# Config

CLI will use first available config for every property:

- default configuration - see [./cli/src/data.ts](./cli/src/data.ts)
- command flags/params - `--repository`, `--branch`, `--org`, `--user`,  `--pass`
- env variables
- `.docs-cli` config

By default, all commands mounts/embeds repositories from the `main` branch on public `shopware` organization on GitHub.

You can use `--configure` (or `-c`) and manually enter custom branches and organizations for testing feature branches
and forked repositories.

```sh
$ pnpm run docs:embed --configure
```

Configured data will be saved in your parent `.docs-cli` directory unencrypted. You can manually delete those files or
reconfigure them by running `config` command.

```bash
# reconfigure
$ pnpm run docs:config
# view all configs
$ pnpm run docs:config --view
# destroy configuration
$ pnpm run docs:config --destroy

```

## Env variables

See default repository and branch configuration in [./cli/src/data.ts](./cli/src/data.ts).

You can set and `export` env variables for CI (secret).

### Branches

Branch configs default to `main` branch.

- `BRANCH_DOCS`
- `BRANCH_FRONTENDS`
- `BRANCH_ADMIN_EXTENSION_SDK`
- `BRANCH_METEOR_ICON_KIT`
- `BRANCH_METEOR_COMPONENT_LIBRARY`

### Organisations

Organization configs default to `shopware`.

- `ORG_DOCS`
- `ORG_FRONTENDS`
- `ORG_ADMIN_EXTENSION_SDK`
- `ORG_METEOR_ICON_KIT`
- `ORG_METEOR_COMPONENT_LIBRARY`

### Username and password (private, GitLab only)

- `GITLAB_FRONTENDS_USERNAME`
- `GITLAB_FRONTENDS_ACCESS_KEY`

# Available commands

- [Embed all docs]()
- [Clone single repository]()
- [Link your docs]()
- [Preview your docs]()
- [Build all docs]()
- [Test all docs]()
- [Remove mount points]()
- [Update developer-portal repository]()

## Embed all docs

This is only needed for the `build` and `test` processes to work because they require all docs to be properly mounted.

```sh
$ pnpm run docs:embed
```

This command will ask you to enter your configuration and clone all remote repositories into your
local `developer-portal` checkout.

![Embed all docs](./cli/demo/embed.gif)

## Clone single repository

The `embed` command uses `clone` command under the hood. You can manually clone remote repositories by running the
`docs:clone` command.

```bash
$ pnpm run docs:clone \
  --repository shopware/frontends \
  --branch feature-branch \
  --org your-user
  --src apps/docs/src \
  --dst frontends-test

```

This command will one-time clone the `feature-branch` from your `your-user/frontends` repository and
mount `app/docs/src` into `docs/frontend-test` directory in `developer-portal`, making it accessible on
the [https://localhost:2345/frontends-test](https://localhost:2345/frontends-test) URL.

## Link your docs

This command links your local repository into your local `developer-portal` checkout.

```sh
$ pnpm run docs:link
```

You need to use `--rsync` or `--copy` if you want to `test` or `build` docs locally due to symlinking issues with
Rollup.

## Preview your docs

Once your aliases are set up, you can run `preview` command to preview docs.

```sh
$ pnpm run docs:preview
```

This command will run `dev` process in your local `developer-portal` checkout.

## Build all docs

You can create a static build of all docs by running the `build` command.

```sh
$ pnpm run docs:build
```

This command will run `build` process in your local `developer-portal` checkout and requires all docs to be cloned from
remote or linked with `--rsync` or `--copy` strategy.

## Test all docs

You can run tests in `developer-portal` repository by running `test` or `test:build` commands.

```sh
$ pnpm run docs:test
# or
$ pnpm run docs:test:build
```

Standard `test` command will run Vitest tests with the bundled dev server and works with partially mounted docs.

THe `test:build` command will create a production build on-the-fly and requires all docs to be hard-mounted (no
symlinks).

![Test](./cli/demo/test.gif)

## Remove mount points

You can remove mounted repositories by running the `remove` command.

```sh
$ pnpm run docs:remove
```

This command will remove symlinks and other mounted folders from your local `developer-portal` checkout.

The same output can be achieved with deleting mounted repositories by hand.

```sh
$ cd ../developer-portal
$ git status
$ rm -r docs/frontends/
$ rm -r docs/resources/admin-extension-sdk
# ...
```

## Update `developer-portal` repository

Keep your local `developer-portal` checkout up to date by running the `pull` command.

```sh
$ pnpm run docs:pull
# or
$ cd ../developer-portal && git pull --ff && pnpm i

```

This command will pull changes in `developer-portal` on your current branch and install the latest dependencies.

![Pull developer-portal](./cli/demo/pull.gif)

## More

```bash
# aliased
pnpm run docs:COMMAND
# equals
../developer-portal/docs-cli COMMAND

```