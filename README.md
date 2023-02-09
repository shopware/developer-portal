# Shopware Developer Portal

_**Team DX is serving the teams to provide documentation to our customers.**_

Shopware has its history of creating and maintaining self-build and self-hosted documentations, which went wild after
the initial deployment, because there was no dedicated "owner" who directly maintained the docs and fixed bugs etc.

We want to make it easy for everyone to set up and maintain / preview / deploy the new documentation and have a
dedicated "ownership" so people have less to worry about. Ultimately - we want the majority of teams to adopt that
approach, not being force into. :slightly_smiling_face:

This repository reuses our official Vitepress-based library
[`shopware/developer-documentation-vitepress`](https://github.com/shopware/developer-documentation-vitepress) and
embeds:

- [shopware/docs](https://github.com/shopware/docs)
- [shopware/frontends](https://github.com/shopware/frontends)
- [shopware/admin-extension-sdk](https://github.com/shopware/admin-extension-sdk)
- [shopware/meteor-icon-kit](https://github.com/shopware/meteor-icon-kit)
- [shopware/meteor-component-library](https://github.com/shopware/meteor-component-library)
- [shopware/store-api-reference](https://github.com/shopware/store-api-reference)
- [shopware/admin-api-reference](https://github.com/shopware/admin-api-reference)

The idea is to:

- provide Shopware Docs CLI (`./docs-cli`) for embedding, previewing and managing embedded resources
- embed static files from a dedicated `docs` folder (source) in sub-repositories/projects to the `docs/mount-point`
  folder (destination) in this repository
- have a single deployment workflow with the build being served from a single
  domain - [https://beta-developer.shopware.com](https://beta-developer.shopware.com)

# Setup

See [./QUICK-START.md](./QUICK-START.md) for more info on how to start using Developer Portal, including examples on 
how to embed docs repos using Shopware Docs [CLI](./CLI.md), preview, build and test Developer portal.

## Dev preview

Run development preview.

```bash
$ pnpm dev
```

Development preview allows missing embeddings which will result in some URLs returning code 404.

## Production build

Run production build which will create static dump in the `./.vitepress/dist/` directory. Production build requires all
docs repositories to be embedded.

```bash
$ pnpm build
```

Preview production build with `httpd:2.4` in Docker container - [http://localhost:8765](http://localhost:8765).

```bash
$ pnpm preview
```

# Tests

There are a few test groups configured in `package.json:scripts`:

- `test` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using internal vitest server, allowing partial
  embeddings
- `test:build` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using on-the-fly vitest build, requiring all
  docs repositories to be embedded
- `test:cli` - runs CLI vitest tests in `./__tests__/cli/` using pre-built `./docs-cli` (`./cli/dist/docs-cli.js`)
  and `sandbox` directory as a working directory
- `test:cli:coverage` - runs coverage for CLI
- `test:regression` - run visual regression tests for all embedded pages

E2E tests make sure all docs repositories are properly embedded and that all layout elements are available.

CLI tests make sure all features in CLI works as intended.