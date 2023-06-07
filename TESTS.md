# Tests

E2E tests make sure all docs repositories are properly embedded and that all layout elements are available.

- `test` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using internal vitest server, allowing partial or
  missing embeddings (with a notice in the console)
- `test:build` - runs e2e vitest (& Playwright) tests in `./__tests__/e2e/` using on-the-fly vitest build, requiring all
  docs repositories to be embedded (with an error in the console)
- `test:regression` - run visual regression tests for all embedded pages
- `test:crawl` - run crawler tests to make sure all internal links are accessible