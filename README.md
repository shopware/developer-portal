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
```late.