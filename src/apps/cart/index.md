# Cart

The cart allows you to handle cart operations. [Shopware's cart](/docs/concepts/commerce/checkout-concept/cart) is a central part of the checkout process. The cart has a defined [cart process](/docs/resources/guidelines/code/cart-process).

Besides, the cart gives various options to change a price of an item in the cart using a cart collector and processor, adding cart items, discounts, customizing price calculations, splitting cart line items, etc.

## Changing the cart behavior

Using [App Scripts](/docs/guides/plugins/apps/app-scripts) (cart scripts), you can [manipulate your cart](/docs/guides/plugins/apps/app-scripts/cart-manipulation#overview) details to:

* [Calculate cart](/docs/guides/plugins/apps/app-scripts/cart-manipulation#calculating-the-cart)
* [Add line items](/docs/guides/plugins/apps/app-scripts/cart-manipulation#line-items)
* [Define prices](/docs/guides/plugins/apps/app-scripts/cart-manipulation#price-definitions)
* [Add custom data](/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-custom-data-to-line-items)
* [Add errors and notifications](/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-errors-and-notifications-to-the-cart)
* [Run rule-based cart scripts](/docs/guides/plugins/apps/app-scripts/cart-manipulation#rule-based-cart-scripts)

Refer to [cart manipulation services](/docs/resources/references/app-reference/script-reference/cart-manipulation-script-services-reference) that allows you to make these changes.

Usings Plugins also, you can:

* [Add cart collector/processor](/docs/guides/plugins/plugins/checkout/cart/add-cart-processor-collector)
* [Add cart items](/docs/guides/plugins/plugins/checkout/cart/add-cart-items)
* [Add cart discounts](/docs/guides/plugins/plugins/checkout/cart/add-cart-discounts)
* [Add cart validator](/docs/guides/plugins/plugins/checkout/cart/add-cart-validator)
* [Change price items](/docs/guides/plugins/plugins/checkout/cart/change-price-of-item)
* [Customize price calculation](/docs/guides/plugins/plugins/checkout/cart/customize-price-calculation)

## Changing the look

The appearance of the cart can be changed in multiple ways.

With [template extensions](/docs/guides/plugins/plugins/storefront/customize-templates), you can extend or override the cart look of our default storefront. However, remember that the template extension will only be available for merchants that use our default storefront. Some merchants who build their projects upon custom frontends will not be able to benefit from your extension.
