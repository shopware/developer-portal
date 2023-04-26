---
items:
  - text: Getting started
    link: /apps/
  - text: Areas
    items:
      - text: Cart
        link: /apps/cart/
      - text: Checkout
        link: /apps/checkout/
      - text: Payment
        link: /apps/payment/
      - text: Storefront
        link: /apps/storefront/
      - text: Administration
        link: /apps/administration/
      - text: Content
        link: /apps/content/
      - text: Product & Catalog
        link: /apps/products-and-catalog/
      - text: Workflow
        link: /apps/workflow/
  - text: Reference
    items:
      - text: Admin Extensions
        link: "https://shopware.github.io/admin-extension-sdk/"
      - text: App Scripts
        link: "/docs/guides/plugins/apps/app-scripts/"
      - text: Webhooks
        link: "/docs/resources/references/app-reference/webhook-events-reference"
      - text: Admin API
        link: "https://shopware.stoplight.io/docs/admin-api/"
      - text: Store API
        link: "https://shopware.stoplight.io/docs/store-api/"
  - text: App Store
    items:
      - text: Guidelines
        link: "/docs/resources/guidelines/testing/store/quality-guidelines-apps/"
aside: false
---

<SwagLanding image="/landing/apps.png">
    <template #title>Build the functionalities merchants need</template>
    <template #description>
        Leverage Shopware's extension APIs to build unique extensions that boost merchants businesses. Use the powerful plugin system to build highly custom extensions or build apps using your platform of choice.
    </template>
    <template #ctas>
        <PageRef page="/docs/guides/plugins/apps/app-base-guide.html" title="Build your first Shopware app" sub="Learn how to set up your development environment and start coding within a couple minutes." />
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                The amount of topics to start with can be overwhelming. For that reason we have prepared a handful of step-by-step tutorials to follow along that make you familiar with some of our concepts:
            </template>
            <template #cards>
                <SwagLandingCard page="/docs/guides/plugins/apps/starter/starter-admin-extension.html" image="http://localhost:5173/docs/.gitbook/assets/extension-api-notification.png">
                    <template #title>Admin Extension</template>
                    <template #sub>Create a simple module that triggers a notification in the admin panel.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/starter/product-translator.html">
                    <template #title>API Communication</template>
                    <template #sub>Learn how to communicate with the Shopware API to fetch product data.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/starter/add-api-endpoint.html">
                    <template #title>Custom API Endpoint</template>
                    <template #sub>Learn how to add a custom API endpoint to the Shopware Store API.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>Product areas</template>
            <template #description>
                If you prefer to dig into a specific topic directly, choose from one of the product areas. You can also find them on the left all the time.
            </template>
            <template #cards>
                <SwagLandingCard page="./checkout/">
                    <template #title>Checkout</template>
                    <template #sub>Apply discounts, price calculations or control shipping method availabilities</template>
                </SwagLandingCard>
                <SwagLandingCard page="./payment/">
                    <template #title>Payment</template>
                    <template #sub>Handle payments from different gateways or process refunds</template>
                </SwagLandingCard>
                <SwagLandingCard page="./storefront/">
                    <template #title>Storefront</template>
                    <template #sub>Build extensions or themes for the customer storefront using templates or custom styles</template>
                </SwagLandingCard>
                <SwagLandingCard page="./flow-builder/">
                    <template #title>Flow Builder</template>
                    <template #sub>Add custom actions that for third party integrations or automate processes</template>
                </SwagLandingCard>
                <SwagLandingCard page="./custom-data/">
                    <template #title>Custom Data</template>
                    <template #sub>Store custom data, entites or relationships in your Shopware store</template>
                </SwagLandingCard>
                <SwagLandingCard page="./configuration/">
                    <template #title>Configuration</template>
                    <template #sub>Add configuration options to allow users to control your App's behavior</template>
                </SwagLandingCard>
                <SwagLandingCard page="./administration/">
                    <template #title>Administration</template>
                    <template #sub>Explore the possibilities of custom admin modules or extensions</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
    <template #exposed3>
        <SwagLandingCardList>
            <template #title>Related topics</template>
            <template #cards>
                <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/">
                    <template #title>App Scripts</template>
                    <template #sub>Leverage App Scripts to customize the checkout or fetch additional data in your Storefront.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/app-scripts/">
                    <template  #title>Customize templates</template>
                    <template #sub>Custom templates let you extend or modify the appearance of parts of your storefront.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/starter/starter-admin-extension.html">
                    <template #title>Admin Extensions</template>
                    <template #sub>Build powerful modules for the admin panel using our new Admin Extension API.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/apps/starter/starter-admin-extension.html">
                    <template #title>Shopware CLI</template>
                    <template #sub>Your tool when it comes to app development, installation and deployments.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>