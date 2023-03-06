# Shopware Developer Portal

_**Team DX is serving the teams to provide documentation to our customers.**_

Shopware has its history of creating and maintaining self-build and self-hosted documentations, which went wild after
the initial deployment, because there was no dedicated "owner" who directly maintained the docs and fixed bugs etc.

We want to make it easy for everyone to set up and maintain / preview / deploy the new documentation and have a
dedicated "ownership" so people have less to worry about. Ultimately - we want the majority of teams to adopt that
approach, not being force into. :slightly_smiling_face:

This repository:

- **provides Shopware Docs CLI** (`./docs-cli`) for embedding, previewing and managing embedded resources
- **reuses our official Vitepress-based
  template**
  [`shopware/developer-documentation-vitepress`](https://github.com/shopware/developer-documentation-vitepress)
- **embeds static files** from a dedicated `docs` folder (source) in sub-repositories/projects to
  the `src/<mount-point>`
  folder (destination) in this repository:
    - [shopware/docs](https://github.com/shopware/docs)
    - [shopware/frontends](https://github.com/shopware/frontends)
    - [shopware/admin-extension-sdk](https://github.com/shopware/admin-extension-sdk)
    - [shopware/meteor-icon-kit](https://github.com/shopware/meteor-icon-kit)
    - [shopware/meteor-component-library](https://github.com/shopware/meteor-component-library)
    - [shopware/store-api-reference](https://github.com/shopware/store-api-reference)
    - [shopware/admin-api-reference](https://github.com/shopware/admin-api-reference)
- **has a single deployment workflow** with the build being served from a single
  domain - [Developer Portal](https://beta-developer.shopware.com)

_Note: This repository does not include layouts, templates and other components - these are provided by the
`developer-documentation-vitepress`._

# Setup

See [QUICK START](./QUICK-START.md) for more info on how to start using Developer Portal, including some basic examples
on how to embed and manage docs repos, and preview the dev and prod builds.

# Table of contents

| Section                              | Description                                                                               |
|--------------------------------------|-------------------------------------------------------------------------------------------|
| [Quick start](./QUICK-START.md)      | Set up your local Developer portal instance and start using CLI                           |
| [CLI](./CLI.md)                      | In-depth description for all features provided by the Shopware Docs CLI                   |
| [Features](./FEATURES.md)            | In-depth description for all features provided by the`developer-portal`                   |
| [Features (external)](./FEATURES.md) | In-depth description for all features provided by the `developer-documentation-vitepress` |
| [Tests](./TESTS.md)                  | Walkthrough for tests                                                                     |
| [FAQ](./FAQ.md)                      | Frequently asked questions                                                                |
| [DevContainer](./DEV-CONTAINER.md)   | Using Shopware Docs with DevContainer                                                     |