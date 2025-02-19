# Quick start for Shopware Docs CLI

_This document covers the most basic steps for working with the CLI in your repository. You can find more detailed
information on the CLI in the [./CLI.md](./CLI.md) file._

In this introduction, you will learn how to:

- [Checkout the developer-portal repository](#1-checkout-the-developer-portal-repository)
- [Checkout the repository you want to work on](#2-checkout-the-repository-you-want-to-work-on)
- [Link your local docs into the developer-portal](#3-link-your-local-docs-into-the-developer-portal)
- [Preview your changes](#4-preview-your-changes)
- [Commit, merge and deploy your changes](#5-commit-merge-and-deploy-your-changes)

## TL;DR>

Try running the following commands in any repo that is embedded in Dev Docs:

```
$ pnpm docs:env
$ pnpm docs:link
$ pnpm docs:preview
```

## 0. Prerequisites

- Node v18

_Note: These commands has been added to feature branches in all repositories and may not have been merged yet.
It is advisable to check out the correct branch before proceeding. Alternatively, you can directly call the CLI by using
the command `../developer-portal/docs-cli.cjs manage`._

## 1. Checkout the developer-portal repository

The `developer-portal` repository allows you to set up a local environment for
the [Dev Docs](https://developer.shopware.com). Embedded repositories have a `docs:env` npm script available for setting
up the environment in your local `../developer-portal` repository - it serves as a shortcut for cloning or pulling the
`developer-portal` repository to your local machine and installing npm dependencies.

```bash
# from the embedded repository
$ pnpm docs:env

# or manually
$ cd /www/
$ git clone ssh://git@github.com/shopware/developer-portal.git
$ cd developer-portal
$ pnpm i
```

Check the CLI:

```bash
# from the embedded repository
$ pnpm docs:cli

# from the /www/developer-portal/ dir
$ ./docs-cli.cjs
```

## 2. Checkout the repository you want to work on

Typically, you will already have your repository checked out on your computer. For this example, we will focus on the
`shopware/frontends` repository. When working on documentation, there is no need to install any additional dependencies.

```bash
$ cd /www/
$ git clone ssh://git@github.com/shopware/frontends.git
$ cd frontends
```

## 3. Link your local docs into the developer-portal

By default, the `developer-portal` repository only contains the homepage and some other shared pages that do not belong
to any of Shopware's products, projects, or repositories. To preview your documentation, you will first need to mount it
from your local directory to the `developer-portal`.

You can use the following command to create a symlink that points from the `frontends` `apps/docs/src` to the
`developer-portal` `src/frontends`. This will allow you to preview your changes in the context of the `developer-portal`
environment.

```bash
# from the /www/frontends/ dir
$ pnpm docs:link

```

## 4. Preview your changes

With the previous steps completed, you are now ready to run the preview. By using this command, it will launch the Vite
development server from the `developer-portal` and allow you to view your documentation in your browser at
[http://localhost:5173/frontends/](http://localhost:5173/frontends/).

```bash
# from the /www/frontends/ dir
$ pnpm docs:preview

```

## 5. Commit, merge and deploy your changes

When you are satisfied with the result, you can proceed by committing your changes to your feature branch and creating a
pull request. This will allow you to preview your changes.

```bash
# from the /www/frontends/ dir
$ git checkout -b my-feature-branch
$ git add app/docs/src
$ git commit -m "Commit message"
$ git push --set-upstream origin my-feature-branch

```

<ins>Previewing feature branch</ins>

This workflow creates a workflow in the `developer-portal` repository. It will mount your feature branch (instead of the
`main` branch) and run all tests. Once completed, a new build will be deployed to Vercel. This allows you to preview how
your changes integrate with all other repositories.

<ins>Deploying main branch</ins>

Based on the configuration in the `developer-portal` repository, the latest versions of all `main` branches will be
deployed automatically whenever the Build-Test-Deploy workflow is completed successfully.

# Next steps (advanced usage)

All steps below are executed directly in the `developer-portal` directory, or by using `docs:*` commands from your
repository.

**Clone other repositories one by one**

You can clone other repositories, choose a different branch, or organisation when mounting a forked repository.

```bash
$ ./docs-cli.cjs clone

# or
$ pnpm docs:clone

```

**Embed all repositories at once**

This command is useful if you really want to test production build locally. Some repositories require special
environment variables (secrets) because a part of them is not publicly available. For example, the Meteor Icon Kit
requires `FIGMA_FILE` and `FIGMA_TOKEN`, and Frontends on GitLab require `GITLAB_FRONTENDS_USERNAME` and
`GITLAB_FRONTENDS_ACCESS_KEY`.

```bash
$ ./docs-cli.cjs embed

# or
$ pnpm docs:embed

```

**Manage mount points**

You can run this command to add and/or remove multiple mount points in a single run.

```bash
$ ./docs-cli.cjs manage

# or
$ pnpm docs:manage

```

**Pull the latest version**

This command is just an alias for pulling changes from remote and installing NPM dependencies.

```bash
$ ./docs-cli.cjs pull

# or
$ pnpm docs:env

```

**Explore the CLI**

There are a few more commands available that you can explore by yourself:

- `./docs-cli.cjs install` - add aliases to your package.json
- `./docs-cli.cjs cleanup` - remove added mount points
- `./docs-cli.cjs test` - run e2e test suite
- `./docs-cli.cjs build` - make a production build (requires all repositories to be mounted)
- `./docs-cli.cjs config` - configure CLI paths and variables
- `./docs-cli.cjs git` - checkout all repos directly in the `repos` folder of the `developer-portal` project

You can find more detailed information on the CLI in the [./CLI.md](./CLI.md) file.
