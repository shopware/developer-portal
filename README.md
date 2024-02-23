# Shopware Developer Portal

[![Build and deploy](https://github.com/shopware/developer-portal/actions/workflows/checkout-test-build-deploy.yml/badge.svg)](https://github.com/shopware/developer-portal/actions/workflows/checkout-test-build-deploy.yml)
[![Issues](https://img.shields.io/github/issues/shopware/developer-portal)](https://github.com/shopware/developer-portal/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/shopware/developer-portal)](https://github.com/shopware/developer-portal/pull-requests)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdeveloper.shopware.com)](https://developer.shopware.com)
[![License](https://img.shields.io/github/license/shopware/developer-portal)](https://github.com/shopware/developer-portal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?machine=basicLinux32gb&repo=563429368&ref=main&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestEurope)

_**Team DX is serving the teams to provide documentation to our customers.**_

Shopware has its history of creating and maintaining self-build and self-hosted documentations, which went wild after
the initial deployment, because there was no dedicated "owner" who directly maintained the docs and fixed bugs etc.

We want to make it easy for everyone to set up and maintain / preview / deploy the new documentation and have a
dedicated "ownership" so people have less to worry about. Ultimately - we want the majority of teams to adopt that
approach, not being force into. :slightly_smiling_face:

This repository:

- **provides Shopware Docs CLI** (`./docs-cli.cjs`) for embedding, previewing and managing embedded resources
- **reuses our official Vitepress-based
  template**
  [`shopware/developer-documentation-vitepress`](https://github.com/shopware/developer-documentation-vitepress)
- **embeds static files** from a dedicated `docs` folder (source) in sub-repositories/projects to
  the `src/<mount-point>`
  folder (destination) in this repository:
    - [shopware/docs](https://github.com/shopware/docs)
    - [shopware/frontends](https://github.com/shopware/frontends)
    - [shopware/meteor](https://github.com/shopware/meteor)
    - [shopware/release-notes](https://github.com/shopware/release-notes)
    - [shopware/store-api-reference](https://github.com/shopware/store-api-reference)
    - [shopware/admin-api-reference](https://github.com/shopware/admin-api-reference)
- **has a single deployment workflow** with the build being served from a single
  domain - [Developer Portal](https://developer.shopware.com)

_Note: This repository does not include layouts, templates and other components - these are provided by the
`developer-documentation-vitepress`._

# Setup

See [QUICK START](./QUICK-START.md) for more info on how to start using Developer Portal, including some basic examples
on how to embed and manage docs repos, and preview the dev and prod builds.

For a ready-to-code example, see [DevContainer](./DEV-CONTAINER.md) powered by GitHub Codespaces, VSCode Dev Container 
or similar solution.

# Table of contents

| Section                                                                                                    | Description                                                                               |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [Quick start](./QUICK-START.md)                                                                            | Set up your local Developer portal instance and start using CLI                           |
| [CLI](https://github.com/shopware/developer-documentation-vitepress/blob/main/CLI.md)                      | In-depth description for all features provided by the Shopware Docs CLI                   |
| [Features](./FEATURES.md)                                                                                  | In-depth description for all features provided by the`developer-documentation-vitepres`   |
| [Features (external)](https://github.com/shopware/developer-documentation-vitepress/blob/main/FEATURES.md) | In-depth description for all features provided by the `developer-documentation-vitepress` |
| [Tests](./TESTS.md)                                                                                        | Walkthrough for tests                                                                     |
| [FAQ](./FAQ.md)                                                                                            | Frequently asked questions                                                                |
| [DevContainer](./DEV-CONTAINER.md)                                                                         | Using Shopware Docs with DevContainer                                                     |