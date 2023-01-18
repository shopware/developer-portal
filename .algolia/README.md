# Algolia - DocSearch and Crawler

## Development

Copy `./.algolia/.env.sample` to `./.algolia/.env` and update `APPLICATION_ID`and `API_KEY` credentials.

```bash
$ cp ./.algolia/.env.sample ./.algolia/.env

```

Update `index_name` in `./.algolia/config.json`.

```bash
$ nano ./.algolia/config.json
```

```json5
{
  "index_name": "dev_shopware_docs",
  // ...
}
```

Run local Docker Algolia crawler.

```bash
$ ./.algolia/crawl.sh

```

## Production

Configure Algolia service in `./.vitepress/config.ts` with credentials provided
in [Settings > Applications](https://www.algolia.com/account/applications)
and [Settings > API Keys](https://www.algolia.com/account/api-keys/all).

```js
export default defineConfigWithTheme < ThemeConfig > ({
    // ...
    themeConfig: {
        algolia: {
            indexName: '',
            appId: '',
            apiKey: '', // public Search-Only API Key
        }
    }
})
```

Read more about Algolia [DocSearch](https://docsearch.algolia.com/)
and [Crawler](https://www.algolia.com/products/search-and-discovery/crawler/).