# Features

This document describes basic features provided by this project.

See our [Developer documentation Vitepress / FEATURES](https://github.com/shopware/developer-documentation-vitepress)
library for all globally available features.

See official [VitePress documentation](https://vitepress.vuejs.org/) for in-depth description of all features provided
by VitePress itself, such as Markdown formatting, frontmatter configuration and theme settings.

On top of that, there are additional Shopware flavoured features globally available, provided by Developer Portal, as
described in the following sections.

## Additional configuration with `docs.yml`

### Copy additional static assets

By default, VitePress copies and serves only assets used in Markdown files. Runtime assets need to be copied manually.
You can provide custom directories in your `.github/scripts/docs.yml`.

```yml
build-end:
  copy-additional-assets:
    - public/icons/regular
    - public/icons/solid
```

Static assets are copied during the `buildEnd` hook using `copyAdditionalAssets()` helper.

### Copy redirects

Redirects from `.gitbook.yaml` and `docs.yml` in sub-repos are automatically copied and added to the `redirects` section
in the `vercel.json` configuration.

## Provide additional build context

After the CLI clones your git repo, and before it builds docs, you can enrich output by
creating `.github/scripts/docs-after-clone.sh` in your repository where you can add additional steps needed for the
build. This is only supported in `embed` and `clone` commands. If you'll use `link` command, you need to run your script
manually, as needed.

See how it's done in
[shopware/meteor-icon-kit](https://github.com/shopware/meteor-icon-kit/blob/211cb7b6a68012293377a2a6ea0fda543ba7dfbf/.github/scripts/docs-after-clone.sh)
for building icons,
in [shopware/meteor-component-library](https://github.com/shopware/meteor-component-library/blob/718e81657d84e822299119d643f847d89969255d/.github/scripts/docs-after-clone.sh)
for generating Markdown files from Storybook stories, and
in [shopware/admin-extension-sdk](https://github.com/shopware/admin-extension-sdk/blob/47a740b496d086341dbc7ceee7ef4b6f708c9a0d/.github/scripts/docs.yml)
for generating Markdown files from TS/JS using TSDoc.

```sh
#! /usr/bin/env bash
set -e

[[ -z "$1" ]] && echo "Missing working directory argument" && exit 1

# ...

```

## Auto-create PR workflow

Commit status checks and integration test workflow is handled by [DevHub Connector GitHub](https://github.com/shopware/devhub-github-app) app.

## Versioning

Multiple branches of the same repository can be mounted by adding them to the `.github/scripts/embed.sh`. See
`.github/scripts/embed.sh` and `cli/src/data.ts` for reference.

_Note: make sure to also add versioned links to the sidebar in `.vitepress/sidebar.ts`._

## Generate TS/JS docs (TBD)

`MarkdownTransform` and `TsGenerator` Vite plugins from Frontends.

## Generate sitemap

Sitemap is automatically generated during the `buildEnd` hook using `createSitemap()` helper.