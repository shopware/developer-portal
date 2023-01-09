# Shopware-only features

Developer Portal repository is based on `developer-documentation-vitepress` package.

## Sidebar auto-generation

See `.vitepress/navigation.ts` to see how the sidebar is configured and auto-generated.

## Versioning

See `.github/scripts/embed.sh` and `cli/src/data.ts`.

## Custom components

Custom VueJS SFC are supported by default.

## Search

Algolia search is integrated with their DocSearch feature.

## Mermaid

Mermaid plugin is built-in for drawing diagrams and charts.

## APIs

Internal APIs (Store & Admin) are automatically generated with Stoplight.

## Extending

After the CLI clones your git repo, and before it builds docs, you can enrich output by
creating `.github/scripts/docs-after-clone.sh` in your repository. This is only supported in `embed` and `clone`
commands. If you'll use `link` command, you need to run your script manually, as needed.

## Standalone usage

As we've built `developer-portal`, you can base another separate project by using `developer-documentation-vitepress`
package.

## Notes

### PHPStorm configuration (frontmatter)

Activate `markdown.experimental.frontmatter.support.enable` to enable proper formatting of frontmatter sections in your
.md files.

# Future

## Sitemap

Generate sitemap for SERP.

## Visual testing

Visually compare changes to prevent some issues.

## Change report

Generate change report for developer marketing team.