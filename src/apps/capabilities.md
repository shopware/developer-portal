---
head:
  - - meta
    - property: 'og:image'
      content: https://shopware-docs-og.vercel.app/api/og?title=Capabilities

---

# App Capabilities

You can use apps to create custom extensions for Shopware 6 that are installable across all types of Shopware stores, from cloud-based to self-hosted. This enables merchants to enhance their Shopware store's functionality according to their unique needs.

Apps bring various capabilities to Shopware allowing developers to create extensions with a wide range of use cases.

| Capability | Description | Use cases |
| :--- | :--- | :--- |
| [App Scripts](/docs/guides/plugins/apps/app-scripts/index.md) | Add custom scripts that are executed at runtime | <ul style="margin-bottom: 0;"><li>Modify <a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation">cart calculation</a></li><li><a href="/docs/guides/plugins/apps/app-scripts/data-loading">Load data</a> in the storefront</li><li>Add <a href="/docs/guides/plugins/apps/app-scripts/custom-endpoints">custom API endpoints</a></li></ul> |
| [Admin Extension SDK](https://shopware.github.io/admin-extension-sdk/) | Integrate with the admin panel | <ul style="margin-bottom: 0;"><li>Custom <a href="https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/ui/mainModule">admin modules</a></li><li>admin <a href="/docs/guides/plugins/apps/starter/starter-admin-extension">notifications</a></li><li><a href="https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/ui/component-section">component section</a></li></ul> |
| [App Payments](/docs/guides/plugins/apps/payment.md) | Redirect to external payment providers | Payment integrations |
| [Twig Storefront Extensions](/docs/guides/plugins/apps/storefront/) | Override Twig templates in the storefront | Customize product pages, checkout, etc. |
| [Custom Storefront Assets](/docs/guides/plugins/apps/storefront/#custom-assets-in-apps) | Add custom assets to the storefront | <ul style="margin-bottom: 0;"><li>Custom CSS</li><li>Javascript plugins</li></ul> |
| [Cookie Consent](/docs/guides/plugins/apps/storefront/cookies-with-apps.md) | Add cookies to the storefront consent manager | Custom cookies |
| [Flow Actions](/docs/guides/plugins/apps/flow-builder/add-custom-flow-actions-from-app-system.md) | Add custom flow actions | Integrations, notifications, document generation |
| [Custom Entities](/docs/guides/plugins/apps/custom-data/custom-entities.md) | Add custom entities to the database | Store custom data like blogs, recipes, etc. |
| [Configuration](/docs/guides/plugins/apps/configuration.md) | Add and store user configuration | App settings (behavior, snippets, API keys, etc.) |
| [Rule Conditions](/docs/guides/plugins/apps/rule-builder/add-custom-rule-conditions.md) | Add custom rule conditions | User & cart validation |
| [Tax Provider](/docs/guides/plugins/apps/tax-provider.md) | Add custom tax providers | Use external services for tax calculation |
| [Themes](/docs/guides/plugins/apps/storefront/apps-as-themes.md) | Add a storefront theme | Custom storefront themes |
| [CMS Blocks](/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks.md) | Add custom CMS blocks | Custom CMS blocks |
