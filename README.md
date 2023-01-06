# Shopware Developer Portal

This repository extends
[shopware/developer-documentation-vitepress](https://github.com/shopware/developer-documentation-vitepress) and embeds:

- [shopware/docs](https://github.com/shopware/docs)
- [shopware/frontends](https://github.com/shopware/frontends)
- [shopware/admin-extension-sdk](https://github.com/shopware/admin-extension-sdk)
- [shopware/meteor-icon-kit](https://github.com/shopware/meteor-icon-kit)
- [shopware/meteor-component-library](https://github.com/shopware/meteor-component-library)

See [./DOCS.md](./DOCS.md) for more info about Shopware Docs CLI.

# Setup

Clone repository and change dir.

```bash
$ git clone ssh://git@github.com:shopware/developer-portal.git
$ cd developer-portal
```

Install NPM dependencies for all workspaces.

```bash
$ pnpm i
```

## Build CLI

To embed some or all docs repositories, you first need to build CLI using `cli:dev` (non-minimized build)
or `cli:build` (minimized build) commands.

See [./DOCS.md](./DOCS.md) for more info about Shopware Docs CLI.

```bash
$ pnpm cli:build
```

You can then run CLI.

```bash
# from a symlink
$ ./docs-cli
# from the source
$ ./cli/dist/docs-cli.js

```

## Embed all doc repositories

Once you've built your CLI, you can embed selected docs repositories.

```bash
$ ./docs-cli embed

```

## Dev preview

Run development preview.

```bash
$ pnpm dev
```

Development preview allows missing embeddings which will result in some URLs returning code 404.

## Production build

Run production build which will create static dump in the `./.vitepress/dist/` directory.

```bash
$ pnpm build
```

Production build requires all docs repositories to be embedded.

## Production preview

Preview production build with `httpd:2.4` in Docker container - [http://localhost:8765](http://localhost:8765).

```bash
$ pnpm preview
```

## Tests

There are 4 test groups configured in `package.json:scripts`:

- `test` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using internal vitest server, allowing partial
  embeddings
- `test:build` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using on-the-fly vitest build, requiring all
  docs repositories to be embedded
- `test:cli` - runs CLI vitest tests in `./__tests__/cli/` using pre-built `./docs-cli` (`./cli/dist/docs-cli.js`)
  and `sandbox` directory as a working directory
- `test:cli:coverage` - runs coverage for CLI

E2E tests make sure all docs repositories are properly embedded and that all layout elements are available.

CLI tests make sure all features in CLI works as intended.