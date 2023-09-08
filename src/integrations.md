---
aside: false
sidebar: false
swag:
  related: false
---

<SwagLanding>
    <template #title>Automate, integrate & connect</template>
    <template #description>
        Shopware offers an extensive Admin API that allows for way more than just reading and writing data. Learn how to make the most of it and build integrations, connectors or imports.
    </template>
    <template #ctas>
        <PageRef page="/docs/concepts/api/" title="Kick start here and explore" sub="Dive into the basics of authentication, privileges, reading and writing data, working with errors." />
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                Here is a handful of tutorials to follow along that make you familiar with some of our concepts:
            </template>
            <template #cards>
                <PageRef page="/docs/guides/integrations-api/general-concepts/search-criteria">
                    <template #title>Criteria concept</template>
                    <template #sub>Understand the search criteria, a powerful concept to read, filter and aggregate data through the Admin API.</template>
                </PageRef>
                <PageRef page="https://shopware.stoplight.io/docs/admin-api/fdd24cc76f22d-order-overview">
                    <template #title>Automate processes</template>
                    <template #sub>Transition order or payment states, send out emails, clear caches - automation can make life a lot easier - and more efficient.</template>
                </PageRef>
                <PageRef page="https://shopware.stoplight.io/docs/admin-api/faf8f8e4e13a0-bulk-payloads">
                    <template #title>Bulk operations</template>
                    <template #sub>Perform multiple write operations like creating, updating and deleting simultaneously.</template>
                </PageRef>
            </template>
        </SwagLandingCardList>
        <SwagLandingCardList>
            <template #title>Highlights</template>
            <template #description>
                APIs in Shopware serve essential functions that enhance the functionality and integration capabilities of the e-commerce platform. Here are the primary functions of APIs in Shopware:
            </template>
            <div class="grid gap-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <SwagCardSummary icon="storefront">
                        <template #title>Store-API</template>
                        <ul>
                            <li><a href="https://shopware.stoplight.io/docs/store-api/8e1d78252fa6f-authentication-and-authorisation">Authentication</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/store-api/aa7ea5e14dea6-registering-a-customer">Customer Registration</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/store-api/b56ebe18277c6-searching-for-products">Products Search</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/store-api/22b27f0c6cff7-working-with-the-cart">Cart Management</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/store-api/8218801e50fe5-handling-the-payment">Payment Handling</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/store-api/7b972a75a8d8d-shopware-store-api">Store-API Endpoints References</a></li>
                        </ul>
                    </SwagCardSummary>
                    <SwagCardSummary icon="warehouse">
                        <template #title>Admin-API</template>
                        <ul>
                            <li><a href="https://shopware.stoplight.io/docs/admin-api/8e1d78252fa6f-authentication">Authentication</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/admin-api/e51cf55ab14a4-product-management">Product Management</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/admin-api/c042ae0cd330f-media-management">Media Management</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/admin-api/3be386a26c0f9-document-management">Document Management</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/admin-api/fdd24cc76f22d-order-management">Order Management</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/admin-api/s92t5mvj387wz-cms-management">CMS Management</a></li>
                            <li><a href="https://shopware.stoplight.io/docs/admin-api/8d53c59b2e6bc-shopware-admin-api">Admin-API Endpoints Reference</a></li>
                        </ul>
                    </SwagCardSummary>
                </div>
            </div>
        </SwagLandingCardList>
    </template>
</SwagLanding>
