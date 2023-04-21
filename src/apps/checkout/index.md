<SwagLanding>
    <template #title>Checkout</template>
    <template #description>
        <p>The <a href="/docs/concepts/commerce/checkout-concept">checkout</a> system is a crucial component of the Shopware platform that manages every aspect of the order process, from adding products products to the <a href="/docs/concepts/commerce/checkout-concept/cart">cart</a> to placing an <a href="/docs/concepts/commerce/checkout-concept/orders">order</a> and making a <a href="/docs/concepts/commerce/checkout-concept/payments">payment</a>. Shopware's checkout feature is designed to offer developers the flexibility they need to modify the core processes and create a seamless and flawless user experience.</p>
        <h1>Capabilities</h1>
    </template>
    <template #im>
        <img src="../../../public/landing/apps/checkout.png"/>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Want to enhance product experience or streamline your checkout process? Our features has got you covered!
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/tax-provider#tax-provider-endpoint">
                    <template #title>Tax provider</template>
                    <template #sub>Hassle-free tax calculations - Based on customer location, cart and country.</template>
                    <template #icon>
                        <HeroIcons.CalculatorIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation#split-line-items">
                    <template #title>Split cart items</template>
                    <template #sub>Customize orders - Split line-items to desired quantity.</template>
                    <template #icon>
                        <HeroIcons.ShoppingCartIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data">
                    <template #title>Filter checkout options </template>
                    <template #sub>Streamline checkout - Filter available payment and shipping methods.</template>
                    <template #icon>
                        <HeroIcons.FunnelIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Rule based scripts</template>
                    <template #sub>Maximize control - Rule builder for ultimate checkout manipulation</template>
                    <template #icon>
                        <HeroIcons.Bars4Icon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Errors and notifications</template>
                    <template #sub>Enhanced checkout - Errors, warnings, and notices keep you informed.</template>
                    <template #icon>
                        <HeroIcons.FlagIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Add custom prices</template>
                    <template #sub>Adjust pricing on the fly - Change line item costs dynamically.</template>
                    <template #icon>
                        <HeroIcons.CurrencyEuroIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>You can transform the appearance of your cart with our <a href="/docs/guides/plugins/plugins/storefront/customize-templates">Template extensions</a>. By extending or overriding the appearance of the default storefront cart, you can create a unique and visually stunning shopping experience for your customers. Please note that only our default storefront merchants can take benefit from this tool to enhance the presentation of their online store.</p>
    </template>
</SwagLanding>
