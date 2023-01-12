# Quick start for Shopware Docs CLI

_TThis document covers the most basic steps for working with the CLI in your repository. You can find more detailed
information on the CLI in the [./DOCS.md](./DOCS.md) file._

In this introduction, you will learn how to:

- [Checkout the developer-portal repository](#1-checkout-the-developer-portal-repository)
- [Checkout the repository you want to work on](#2-checkout-the-repository-you-want-to-work-on)
- [Link your local docs into the developer-portal](#3-link-your-local-docs-into-the-developer-portal)
- [Preview your changes](#4-preview-your-changes)
- [Commit, merge and deploy your changes](#5-commit-merge-and-deploy-your-changes)

## 1. Checkout the developer-portal repository

The `developer-portal` repository allows you to set up a local environment for
the [docs](https://beta-developer.shopware.com).
To get started, follow these steps:

- clone the repository to your local machine,
- install all necessary dependencies,
- and build the CLI.

```bash
$ cd /www/
$ git clone ssh://git@github.com:shopware/developer-portal.git
$ cd developer-portal
$ pnpm i
$ pnpm cli:build

```

## 2. Checkout the repository you want to work on

Typically, you will already have your repository checked out on your computer. For this example, we will focus on the
`shopware/frontends` repository. When working on documentation, there is no need to install any additional dependencies.

```bash
$ cd /www/
$ git clone ssh://git@github.com:shopware/frontends.git
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
$ pnpm docs:link

```

_Note: The `docs:link` command has been added to feature branches in all repositories and may not have been merged yet.
It is advisable to check out the correct branch before proceeding. Alternatively, you can directly call the CLI by using
the command `../developer-portal/docs-cli link`._

## 4. Preview your changes

With the previous steps completed, you are now ready to run the preview. By using this command, it will launch the Vite
development server from the `developer-portal` and allow you to view your documentation in your browser at
[http://localhost:5173/frontends/](http://localhost:5173/frontends/).

```bash
$ pnpm docs:preview

```

## 5. Commit, merge and deploy your changes

When you are satisfied with the result, you can proceed by committing your changes to your feature branch and creating a
pull request. This will allow you to preview your changes.

```bash
$ git checkout -b my-feature-branch
$ git add app/docs/src
$ git commit -m "Commit message"
$ git push --set-upstream origin my-feature-branch

```

<ins>Previewing feature branch</ins>

This workflow creates a PR in the `developer-portal` repository. It will mount your feature branch (instead of the
`main` branch) and run all tests. Once completed, a new build will be deployed to Vercel. This allows you to preview how
your changes integrate with all other repositories.

<ins>Deploying main branch</ins>

Based on the configuration in the `developer-portal` repository, the latest versions of all `main` branches will be
deployed automatically whenever the Build-Test-Deploy workflow is completed successfully.