<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
</script>

<SwagLanding>
    <template #title>Storefront</template>
    <template #description>
        <p>Storefront (frontend) is a key component of every ecommerce business, serving as the primary interface for online customers to view products, place orders, manage their purchases, etc. A well-designed frontend can create an engaging user experience, ultimately leading to increased customer satisfaction and higher sales. Shopware offers developers tools and flexibility to create highly customizable, user-friendly storefronts that seamlessly integrate with their backend systems and cater to their ecommerce business's unique needs.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Try our template extensions and elevate your Checkout experience:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/plugins/storefront/customize-templates">
                    <template #title>Templates</template>
                    <template #sub>Custom design templates that can modify the whole appearance of your store</template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts/custom-endpoints#caching">
                    <template #title>Themes</template>
                    <template #sub>Custom Styling that match your brand and store themes</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>
