# Shopware Developer Portal

This repository contains

# Setup

Clone repository and change dir.

```bash
$ git clone ssh://git@github.com:shopware/developer-portal.git
$ cd developer-portal
```

Install NPM dependencies.

```bash
$ pnpm i
```

Run development preview.

```bash
$ pnpm run dev
```

Run production build.

```bash
$ pnpm run build
```

Preview production build.

```bash
$ docker run -dit \
 -p 8765:80 \
 -v "$PWD/.vitepress/dist":/usr/local/apache2/htdocs/ \
 httpd:2.4
```

## Embed repositories

Update [`./.github/scripts/embed.sh`](./.github/scripts/embed.sh) to include other repositories.

# More

See [`shopware/developer-documentation-vitepress`](https://github.com/shopware/developer-documentation-vitepress) for
more info about the VitePress template.