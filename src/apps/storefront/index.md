# Storefront Overview

Frontend (Storefront) is a crucial aspect of your e-commerce business that online customers see and interact with, making it possible for them to view products, place orders, and manage their purchases from their devices.

[Shopware's Storefront is well structured](https://developer.shopware.com/docs/concepts/framework/architecture/storefront-concept). It predominantly consists of design templates that match your brand and store themes.

## Build

Shopware server builds the [B2B-Suite Storefront](https://developer.shopware.com/docs/products/extensions/b2b-suite/guides/storefront). However, you can modify the whole appearance of the Storefront by customizing storefront components such as [template files](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/customize-templates), [Javascript sources](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/add-custom-javascript), [page](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/add-custom-page), [pagelets](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/add-custom-pagelet), [filters](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/add-custom-sorting-product-listing), [responsive themes](https://developer.shopware.com/docs/guides/plugins/themes), [styling](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/add-custom-styling), [icons](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/add-icons), etc.

These customizations can be done by extending [twig functions](https://developer.shopware.com/docs/resources/references/storefront-reference/twig-function-reference) in:

* [Apps](https://developer.shopware.com/docs/concepts/extensions/apps-concept#modify-the-appearance-of-the-storefront) and [App Scripts](https://developer.shopware.com/docs/concepts/extensions/apps-concept#execute-business-logic-inside-shopware-with-app-scripts) (to customize business logic and load additional data to be rendered in the Storefront)
* [Plugins](https://developer.shopware.com/docs/guides/plugins/plugins/storefront)

Additionally, Shopware's [Storefront authentication](https://developer.shopware.com/docs/products/extensions/b2b-suite/guides/core/authentication) component provides a common B2B interface for login, ownership, and authentication processes. It extends the default authentication component and offers several benefits.

### Store API

Building the Storefront component also involves creating necessary API interfaces and services. To create unique customer experiences with the Storefront on any platform, the [Store API](https://developer.shopware.com/docs/concepts/api/store-api) offers a full range of commerce options making it possible for customers to view products, add products to a cart, or check out, etc.

You can also look at how to [add a custom store API route](https://developer.shopware.com/docs/guides/plugins/plugins/framework/store-api/add-store-api-route), [add a cache layer to your custom Store API route](https://developer.shopware.com/docs/guides/plugins/plugins/framework/store-api/add-caching-for-store-api-route) and [override existing Store API route](https://developer.shopware.com/docs/guides/plugins/plugins/framework/store-api/override-existing-route).

## Code and Test

Coding standards, like for many large projects, Shopware Open Source also has [coding standards](https://developer.shopware.com/docs/resources/guidelines/code). Use these standards when you contribute to the codebase or create extensions.

Every core component, module, and plugin should have a set of unit tests. Writing tests will ensure that your written code works and that another change can't break your code's functionality with their code. We are using [JestJS](https://developer.shopware.com/docs/guides/plugins/plugins/testing/jest-storefront) as the testing framework, a solid foundation and widely used by many developers.
