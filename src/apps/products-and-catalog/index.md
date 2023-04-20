<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
import * as HeroIcons from "@heroicons/vue/24/solid";
</script>

<SwagLanding>
    <template #title>Products and Catalog</template>
    <template #description>
        <p>A product catalog is a powerful navigator of products. The organized structure helps customers make informed purchase decisions. Shopware's product catalog comes packed with a comprehensive range of technical features that are designed to meet the unique needs of businesses. From customizable search filters to detailed product descriptions, our product catalog is built to provide an exceptional user experience that drives conversions and boosts sales.</p>
        <h1>Capabilities</h1>
    </template>
    <template #im>
        <img src="../../../public/landing/apps/prod_catalog.PNG"/>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                With Shopware, you can assure that your products to be presented in the most effective and attractive way possible
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/data-loading">
                    <template #title>Store details</template>
                    <template #sub>Enrich store - Populate store's detail page as required</template>
                    <template #icon>
                        <HeroIcons.BuildingStorefrontIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/data-loading#search-criteria">
                    <template #title>Search</template>
                    <template #sub>Find what you need - Customizable search criteria for easy search</template>
                    <template #icon>
                        <HeroIcons.MagnifyingGlassCircleIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>Stock availability</template>
                    <template #sub>Never miss a sale - Real-time stock availability feature.</template>
                    <template #icon>
                        <HeroIcons.InboxStackIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/cart-manipulation">
                    <template #title>New products and categories</template>
                    <template #sub>Expand your store - Define new products and categories</template>
                    <template #icon>
                        <HeroIcons.QrCodeIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/custom-endpoints#caching">
                    <template #title>Cache configuration</template>
                    <template #sub>Cache configurations - Improve the end-user experience</template>
                    <template #icon>
                        <HeroIcons.StarIcon class="h-10 w-10 text-blue-500" />
                    </template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Change the look</h1>
        <p>You can manipulate the look and feel of your online store's homepage, landing page, product detail page, product listing page, etc by assigning respective categories and entities to a defined <a href="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks">CMS</a> layout. On the other hand, you can customize the style of the layout with <a href="/docs/guides/plugins/apps/storefront/apps-as-themes">Themes</a> </p>
    </template>
</SwagLanding>
