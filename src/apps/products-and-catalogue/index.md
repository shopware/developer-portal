<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
</script>

<SwagLanding>
    <template #title>Products and Catalogue</template>
    <template #description>
        <p>A product catalog classifies products as categories and helps buyers make purchase decisions easier. It has a comprehensive range of technical features that are designed to meet the unique needs.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Try our template extensions and elevate your Checkout experience:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/data-loading">
                    <template #title>Store details</template>
                    <template #sub>Enrich store's detail page</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/custom-endpoints#caching">
                    <template #title>Cache configuration</template>
                    <template #sub>Cache configurations to improve the end-user experience</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/data-loading#search-criteria">
                    <template #title>Search</template>
                    <template #sub>Define search criteria</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Stock availability</template>
                    <template #sub>Calculate stock availability as when the orders are placed</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Define new products and categories</template>
                    <template #sub>VDefine new products and categories based on new set of items</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>You can manipulate the look and feel of your online store's homepage, landing page, product detail page, product listing page, etc by assigning respective categories and entities to a defined <a href="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks">CMS</a> layout. On the other hand, you can customize the style of the layout with <a href="/docs/guides/plugins/apps/storefront/apps-as-themes">Themes</a> </p>
    </template>
</SwagLanding>
