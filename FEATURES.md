# Features

See official [VitePress documentation](https://vitepress.vuejs.org/) for in-depth description of all features provided
by VitePress itself, such as Markdown formatting, frontmatter configuration and theme settings.

See our [Developer documentation Vitepress / FEATURES](https://github.com/shopware/developer-documentation-vitepress)
library for all globally available features.

On top of that, there are additional Shopware flavoured features globally available, provided by Developer Portal:

## Generate TS/JS docs

`MarkdownTransform` and `TsGenerator` Vite plugins from Frontends.

## Generate sitemap

Sitemap generation during the `buildEnd` hook using `createSitemap()` helper.

## Copy additional static assets

Static assets copy during the `buildEnd` hook using `copyAdditionalAssets()` helper.

## Provide additional build context

`docs-after-deploy.sh` hook/script.

## Auto-create PR workflow

See [./.github/workflows/create-pr.yml](./.github/workflows/create-pr.yml)
and [./.github/workflows/self-trigger.yml](./.github/workflows/self-trigger.yml).

## Versioning

Multiple branches of the same repository can be mounted by adding them to the `.github/scripts/embed.sh`. See
`.github/scripts/embed.sh` and `cli/src/data.ts` for reference.

_Note: make sure to also add versioned links to the sidebar in `.vitepress/sidebar.ts`._

# Examples:

- Meteor Icon Kit - see custom `docs-after-deploy.sh` script in Meteor Icon Kit to see how to run a special build
  process
- Meteor Icon Kit - see `docs.yml` to see how to copy additional static assets needed by the build
- Admin Extension SDK - see how to automatically generate TS/JS typings using `TsGenerator` plugin
- Frontends - see how to manually generate TS/JS typings using `TsGenerator` plugin