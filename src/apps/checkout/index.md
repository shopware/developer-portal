---
editLink: false
swag:
  related: false
aside: false
---

<SwagLanding>
    <template #title>Checkout</template>
    <template #description>
        The <a href="/docs/concepts/commerce/checkout-concept">checkout</a> system is a crucial component of the Shopware platform that manages every aspect of the order process, from adding products to the <a href="/docs/concepts/commerce/checkout-concept/cart">cart</a> to placing an <a href="/docs/concepts/commerce/checkout-concept/orders">order</a> and making a <a href="/docs/concepts/commerce/checkout-concept/payments">payment</a>. Shopware's checkout feature is designed to offer developers the flexibility they need to modify the core processes and create a seamless and flawless user experience.
    </template>
    <template #image>
        <img src="../../public/landing/apps/checkout.jpg"/>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Capabilities
            </template>
            <template #description>
                Want to enhance your product experience or streamline your checkout process? Our features have got you covered!
            </template>
            <template #cards>
                <SwagLandingCard page="/docs/guides/plugins/apps/tax-provider#tax-provider-endpoint" icon="money-bill" icon-type="solid">
                    <template #title>Tax provider</template>
                    <template #sub>Hassle-free tax calculations - Based on customer location, cart, and country.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/cart-manipulation#split-line-items" icon="align-justify" icon-type="solid">
                    <template #title>Split cart items</template>
                    <template #sub>Customize orders - Split line items to the desired quantity.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/custom-data/" icon="filter" icon-type="solid">
                    <template #title>Filter checkout options </template>
                    <template #sub>Streamline checkout - Filter available payment and shipping methods.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/cart-manipulation.html#rule-based-cart-scripts" icon="crosshair-block" icon-type="solid">
                    <template #title>Rule-based scripts</template>
                    <template #sub>Maximize control - Rule builder for ultimate checkout manipulation</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/cart-manipulation.html#add-errors-and-notifications-to-the-cart" icon="exclamation-triangle" icon-type="solid">
                    <template #title>Errors and notifications</template>
                    <template #sub>Enhanced checkout - Errors, warnings, and notices keep you informed.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/cart-manipulation.html#price-fields-inside-custom-fields" icon="plus-square" icon-type="solid">
                    <template #title>Add custom prices</template>
                    <template #sub>Adjust pricing on the fly - Change line item costs dynamically.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>You can transform the appearance of your cart with our <a href="/docs/guides/plugins/plugins/storefront/customize-templates">Template extensions</a>. By extending or overriding the appearance of the default storefront cart, you can create a unique and visually stunning shopping experience for your customers. Please note that only our default storefront merchants can benefit from this tool to enhance the presentation of their online store.</p>
    </template>
</SwagLanding>
