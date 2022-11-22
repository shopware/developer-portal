# Merchant UI

The [administration component](https://developer.shopware.com/docs/concepts/framework/architecture/administration-concept) is tightly coupled with Shopware's core and merchant UI that helps to manage the administrative activities. It implements :

* [Module](https://developer.shopware.com/docs/concepts/framework/architecture/administration-concept#modules-and-their-components) - A module implement features like catalogue, orders, customers, settings, etc. You can custom add different features as a whole for extending administration via [Shopware plugin](https://developer.shopware.com/docs/guides/plugins/plugins/administration/add-custom-module) or [App](https://developer.shopware.com/docs/guides/plugins/apps/administration/add-custom-modules).

    Also, you can top up a defined and existing module with a new detail or feature using [tabs](https://developer.shopware.com/docs/guides/plugins/plugins/administration/add-new-tab).

* [Custom action button](https://developer.shopware.com/docs/guides/plugins/apps/administration/add-custom-action-button) - An action button on your store guides the customer to take action and navigates the customer through the store like "Buy Now", "Add to Cart", etc.

    You can also trigger an action inside the administration itself to send [notification](https://developer.shopware.com/docs/guides/plugins/apps/administration/add-custom-action-button#show-a-notification-to-the-user) regarding the status of action - for example, On deleting a product from the catalogue, you can set to get a notification that says, "Product SW10201 deletion is successful and 50 products are remaining".

* [Shop setting](https://developer.shopware.com/docs/guides/plugins/apps/configuration)- It is a global configurable service that can be implemented for your store, like emailing, authentication to payment providers. With this, you can modify the behavior of your shop.
