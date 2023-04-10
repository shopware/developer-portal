# Checkout

[Checkout](/docs/concepts/commerce/checkout-concept) system is a critical component of the Shopware platform, handling all [cart](/docs/concepts/commerce/checkout-concept/cart), [order](/docs/concepts/commerce/checkout-concept/orders), and [payment](/docs/concepts/commerce/checkout-concept/payments) tasks. With Shopware's checkout feature, developers have the flexibility to modify custom cart items, error handling, and custom data. Additionally, the checkout system can be fully customized to match the look and feel of your ecommerce store, allowing for a seamless and intuitive user experience.

## Customize checkout behavior

Using [App Scripts](/docs/guides/plugins/apps/app-scripts) you modify and extend the internal logic of the checkout:

 * [Adding custom items and display in custom design](/docs/guides/plugins/apps/app-scripts/cart-manipulation)
 * [Splitting cart items](/docs/guides/plugins/apps/app-scripts/cart-manipulation#split-line-items)
 * [Add custom data](/docs/guides/plugins/apps/app-scripts/cart-manipulation)
 * [Add errors and notifications](/docs/guides/plugins/apps/app-scripts/cart-manipulation)
 * [Rule-based scripts](/docs/guides/plugins/apps/app-scripts/cart-manipulation)
 * [Filter payment & shipping methods](/docs/guides/plugins/apps/custom-data)
 * [Modify appearance of payment & shipping methods](/docs/guides/plugins/apps/content)
 * [Add custom prices](/docs/guides/plugins/apps/app-scripts/cart-manipulation)
 * [Tax providers](/docs/guides/plugins/apps/tax-provider#tax-provider-endpoint)
 * [Modify and extend the internal logic of the checkout](/docs/guides/plugins/apps/custom-data)

## Change the look

Shopware allows for complete customization of the checkout appearance using [template extensions](/docs/guides/plugins/plugins/storefront/customize-templates), which enable you to extend or override the default storefront checkout design. It's worth noting that these extensions will only apply to merchants who utilize the default storefront; those who have built their storefronts from scratch may not take advantage of these extensions.
