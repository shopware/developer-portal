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

It:

- provides Shopware Docs CLI (`./docs-cli`) for embedding, previewing and managing embedded resources
- embeds static files from a dedicated `docs` folder (source) in sub-repositories/projects to the `docs/mount-point`
  folder (destination) in this repository
- has a single deployment workflow with the build being served from a single
  domain - [https://beta-developer.shopware.com](https://beta-developer.shopware.com)

# Setup

See:

- [./QUICK-START.md](./QUICK-START.md) for more info on how to start using Developer Portal, including some basic
  examples on how to embed docs repos
- [./CLI.md](./CLI.md) for more info on all features packed in Shopware Docs CLI for managing your local environment
- [/FEATURES.md](/shopware/developer-documentation-vitepress/FEATURES.md)
  in `shopware/developer-documentation-vitepress` for in-depth review of all features provided by the template/library

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

E2E tests make sure all docs repositories are properly embedded and that all layout elements are available. CLI tests
make sure all features in CLI works as intended. They are configured in `package.json:scripts`:

- `test` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using internal vitest server, allowing partial
  embeddings (with a notice in the console)
- `test:build` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using on-the-fly vitest build, requiring all
  docs repositories to be embedded (with an error in the console)
- `test:cli` - runs CLI vitest tests in `./__tests__/cli/` using pre-built `./docs-cli` (`./cli/dist/docs-cli.js`)
  and `sandbox` directory as a working directory
- `test:cli:coverage` - runs coverage for CLI
- `test:regression` - run visual regression tests for all embedded pages

# Features

See official [VitePress documentation](https://vitepress.vuejs.org/) for in-depth description of all features provided
by VitePress itself, such as Markdown formatting, frontmatter configuration and theme settings.

On top of that, there's a few Shopware flavoured features globally available, provided by either `developer-portal`
or `developer-documentation-vitepress`

- `MarkdownTransform` and `TsGenerator` Vite plugins from Frontends
- Sitemap
- Static assets

## Pros and cons

Here's a list of pros and cons using each method.

**General**

- **Configuration:** - configuration is kept at single place in `developer-portal`. Other repos can "flavour" it by
  using `docs-after-build.sh` script and `docs.yml` config.
- **Dependencies:** - dependencies are kept in `developer-portal` and `developer-documentation-vitepress` repos. Other
  repos only provide .md files and custom VueJS components.
- **Algolia search:** - index is updated whenever the main
  website [beta-developer.shopware.com](https://beta-developer.shopware.com) is updated, through
  the [algolia-crawl.yml](./.github/workflows/algolia-crawl.yml) GitHub workflow
- **Sitemap:** - sitemap is generated during the build process of the `developer-portal`.
- **Updates:** -
- **Navigation:** - navigation is configured in global [config.ts](./vitepress/config.ts)
- **Deployments:** - static build is deployed to Vercel, from
  the [checkout-test-build-deploy](./.github/workflows/checkout-test-build-deploy.yml) workflow
- **Content:** - contents are provided by all repos and embedded/mounted to the `src` directory in `developer-portal`,
  as defined in [data.ts](./cli/src/data.ts).
- **Custom features:** - all features by provided by `developer-portal` or `developer-documentation-vitepress`
- **GitHub actions:** - custom [checkout-install](./.github/actions/checkout-install) is provided and reused by other
  repos

**Both approaches**

- **Sitemap:** sitemap can be automatically generated by using the `readSitemap()` helper provided
  by `developer-documentation-vitepress`.

**With Developer Portal (embedding) - single-project, single-build, single-deployment**

| Feature         | Pros                                       | Cons                                                  |
|-----------------|--------------------------------------------|-------------------------------------------------------|
| Configuration   | Single config to maintain                  | More complex configuration                            |
| Dependencies    | Single list of all dependencies            | Globally available dependencies                       |
| Algolia search  | Single source to maintain                  | Larger index                                          |
| Sitemap         | Single sitemap                             | Larger sitemap                                        |
| Development     | Single dev environment                     | More complex development                              |
| Updates         | Single update method                       | /                                                     |
| Navigation      | Single config                              | /                                                     |
| Deployments     | Single production environment              | Larger and more frequent deployments                  |
| Content         | Only provide .md files with static content | Need to extend the library to provide custom features |
| Custom features | Available once-and-for-all                 | May break other docs                                  |
| GitHub actions  | Single train                               | Longer execution                                      |

**With Vitepress template/library - multiple projects, multiple builds, multiple deployments**

This table describes pros and cons of using per-project builds and deployments.

| Feature         | Pros                              | Cons                                                          |
|-----------------|-----------------------------------|---------------------------------------------------------------|
| Configuration   | Independent project configuration | More configs to maintain                                      |
| Dependencies    | Dedicated dependencies            | More projects to maintain                                     |
| Algolia search  | Having a separate index           | Not being able to display results from other docs             |
| Sitemap         | Smaller sitemap                   | /                                                             |
| Development     | Independent components            | Using the same version of dependency across multiple projects |
| Updates         | Independent updates               | Outdated code and features                                    |
| Navigation      | Custom navigation                 | Keeping navigation up to date                                 |
| Deployments     | Independent deployments           | Multiple production environments                              |
| Content         |                                   |                                                               |
| Custom features | Independent features              | Extracting the same feature, making it available in all docs  |
| GitHub actions  | Faster execution                  | Multiple repositories                                         |

## Examples:

- Meteor Icon Kit - see custom `docs-after-deploy.sh` script in Meteor Icon Kit to see how to run a special build
  process
- Meteor Icon Kit - see `docs.yml` to see how to copy additional static assets needed by the build
- Admin Extension SDK - see how to automatically generate TS/JS typings
- Frontends - see how to manually generate TS/JS typings