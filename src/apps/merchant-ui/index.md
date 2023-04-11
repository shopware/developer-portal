# Administration

Shopware's administration manages all aspects of your store. It outlines all internal processes like product inventory tracking, order processing, customer record management, etc.

One can extend or customize the Administration via the [Admin Extension SDK](https://shopware.github.io/admin-extension-sdk/docs/guide/), an NPM library for Shopware 6 apps and plugins. It contains helper functions to communicate with the Administration, execute actions, subscribe to data, and extend the UI.

## Capabilities

The Administration component is tightly coupled with Shopware's core, which helps to manage administrative activities. You can:

* [Add custom features](https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/ui/mainModule) - Features like catalog, orders, customers, settings, etc., can be implemented by defining a module. You can custom add different features for extending Administration. Also, you can top up an existing module with a new detail using [tabs](https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/ui/tabs).

* [Define custom action button](https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/ui/actionButton) - An action button on your store lets the customer take action and navigates through the store like "Buy Now", "Add to Cart", etc. You can also trigger an action inside the Administration itself to send [notification](https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/notification) regarding the status of action - for example, on deleting a product from the catalog, you can set to get a notification that says, "Product SW10201 deletion is successful and 50 products are remaining".

* [Shop setting](https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/ui/settingsItem)- It is a global configurable service that can be implemented for your store, like emailing, authentication to payment providers, etc. With this, you can modify the behavior of your shop.

## Changing the look

You can modify the appearance and styling of the Administration by customizing its [Templates](/docs/guides/plugins/plugins/administration/writing-templates)

## API

The [Admin API](/docs/concepts/api/admin-api) offers a full range of commerce options making it possible to:

* Configure the shop
* Access to individual store's data
* Sync data between your shop and business systems like an ERP
* Extending new features inside Shopware admin for better user experience
* Enhancing the way that stores display information to customers
