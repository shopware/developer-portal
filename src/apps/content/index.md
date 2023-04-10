# Content

An e-commerce website is the face of your business, enriched with content (products, categories, orders, etc.) reaching out to the masses. Hence the content representation must be appealing.

Gone are those days when you would need to write all the code from scratch for creating or changing content on your ecommerce site. Shopware provides a full-featured ecommerce Content Management System (CMS) to easily create, manage, and modify content for your online store.

## Capabilities

What business operations does the CMS support?

* [Customized layout styling](/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks#overview) by extending blocks and sections for your online store's homepage, landing pages, product detail pages, etc

* [Every entity and category has a CMS layout assigned to it that dictates how it is displayed](/docs/concepts/commerce/content/shopping-experiences-cms#hydration-of-dynamic-content)

* [Custom shopping experiences for your customers](#custom-shopping-experiences)

* [Custom Field Types and get appropriate layout assigned](/docs/guides/plugins/apps/custom-data/custom-fields)

* [Multilingual landing pages that supports country-specific translations](https://developer.shopware.com/docs/guides/plugins/plugins/storefront/add-translations)

* [Static](/docs/concepts/framework/architecture/storefront-concept) and [Dynamic CMS website](/docs/concepts/commerce/core/shopping-experiences-cms) to facilitates you to create different frontend experiences for different use cases with media (text, images, and videos).

## Custom shopping experiences

With Shopware's headless CMS architecture, you can easily tailor your customers' shopping by simply following one of the ways:

* [Use an app](/docs/guides/plugins/apps/content/cms). For example, you can add a basic buy button to an existing website or blog, while other apps can help you create and sell in different sales channels.
	Use an app. For example, you can add a basic buy button to an existing website or blog, while other apps can help you create and sell in different sales channels.
  
*	Build the experiences yourself using [Admin extension SDK](https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/cms/registerCmsElement).

*	[Storefront API](https://shopware.stoplight.io/docs/store-api/70c7b54c9faf9-fetch-and-resolve-a-cms-page) – Allows you to perform generic changes to your store’s look and feel via API calls.
