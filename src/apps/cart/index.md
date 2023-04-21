---
editLink: false
swag:
  related: false
---

<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
</script>

<SwagLanding>
    <template #title>Cart</template>
    <template #description>
        <p>The cart allows you to handle cart operations. <a href="/docs/concepts/commerce/checkout-concept/cart">Shopware's cart</a> is a central part of the checkout process. The cart has a defined <a href="/docs/resources/guidelines/code/cart-process">cart process</a>.</p>
        <p>Besides, the cart gives various options to change a price of an item in the cart using a cart collector and processor, adding cart items, discounts, customizing price calculations, splitting cart line items, etc.</p>
        <p>A well-designed cart can significantly impact the customer's shopping experience. The cart functionality in Shopware handles all cart operations with ease and efficiency while offering customers a smooth and hassle-free shopping journey. With Shopware's cart, you have the flexibility to customize pricing calculations, add discounts, split cart line items, and even implement custom cart collectors and processors to meet your unique business needs.</p>
        <p>Want to enhance product experience, boost sales or streamline your checkout process? Our cart feature has got you covered.</p>
        <p>Get ready to take your online store to the next level with the reliable and feature-rich cart functionality of Shopware.</p>
        <h1>Capabilities</h1>
        * [Calculate cart](/docs/guides/plugins/apps/app-scripts/cart-manipulation#calculating-the-cart)
        * [Add line items](/docs/guides/plugins/apps/app-scripts/cart-manipulation#line-items)
        * [Modify prices](/docs/guides/plugins/apps/app-scripts/cart-manipulation#price-definitions)
        * [Add custom data](/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-custom-data-to-line-items)
        * [Add validations, errors and notifications](/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-errors-and-notifications-to-the-cart)
        * [Run rule-based cart scripts](/docs/guides/plugins/apps/app-scripts/cart-manipulation#rule-based-cart-scripts)
        <h1>Change the look</h1>
        <p>You can transform the appearance of your cart with our [template extensions](/docs/guides/plugins/plugins/storefront/customize-templates). By extending or overriding the appearance of the default storefront cart, you can create a unique and visually stunning shopping experience for your customers. Please note that only our default storefront merchants can take benefit from this tool to enhance the presentation of their online store.</p>
        <p>Try our template extensions and elevate your cart's appearance to the next level.</p>
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #title>
                Changing the cart behavior
            </template>
            <template #description>
                Using <a href="/docs/guides/plugins/apps/app-scripts">App Scripts (cart scripts)</a>, you can <a href="/docs/guides/plugins/apps/app-scripts/cart-manipulation#overview">manipulate your cart</a> details to:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#calculating-the-cart">
                    <template #title>Calculate cart</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#line-items">
                    <template #title>Add line items</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#price-definitions">
                    <template #title>Define prices</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-custom-data-to-line-items">
                    <template #title>Add custom data</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#add-errors-and-notifications-to-the-cart">
                    <template #title>Add errors and notifications</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#rule-based-cart-scripts">
                    <template #title>Run rule-based cart scripts</template>
                </SwagLandingCard>
            </template>
            <template #outro>
                Refer to <a href="/docs/resources/references/app-reference/script-reference/cart-manipulation-script-services-reference">cart manipulation services</a> that allows you to make these changes.
            </template>
        </SwagLandingCardList>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Using plugins
            </template>
            <template #description>
                Usings Plugins also, you can:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/cart/add-cart-processor-collector">
                    <template #title>Add cart collector/processor</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/cart/add-cart-items">
                    <template #title>Add cart items</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/cart/add-cart-discounts">
                    <template #title>Add cart discounts</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/cart/add-cart-validator">
                    <template #title>Add cart validator</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/cart/change-price-of-item">
                    <template #title>Change price items</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/plugins/checkout/cart/customize-price-calculation">
                    <template #title>Customize price calculation</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
    <template #exposed3>
        <SwagLandingCardList>
            <template #title>
                Changing the look
            </template>
            <template #description>
                The appearance of the cart can be changed in multiple ways.
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/plugins/storefront/customize-templates">
                    <template #title>Template extensions</template>
                    <template #description>Extend or override the cart look of our default storefront. However, remember that the template extension will only be available for merchants that use our default storefront. Some merchants who build their projects upon custom frontends will not be able to benefit from your extension.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>
