<script setup>
import SwagLanding from "../../components/SwagLanding.vue";
import SwagLandingCard from "../../components/SwagLandingCard.vue";
import SwagLandingCardList from "../../components/SwagLandingCardList.vue";
import * as HeroIcons from "@heroicons/vue/24/solid";
</script>

<SwagLanding>
    <template #title>Content</template>
    <template #description>
        <p>An e-commerce website is the face of your business, enriched with content that showcases your products and services in an appealing way to attract potential customers. Gone are those days when you would need to write all the code from scratch for creating or changing content on your ecommerce site. Shopware provides a full-featured ecommerce Content Management System (CMS) to easily create, manage, and modify content for your online store.</p>
        <h1>Capabilities</h1>
    </template>
    <template #exposed2>
        <SwagLandingCardList>
            <template #title>
                Try our template extensions and elevate your Checkout experience:
            </template>
            <template #cards>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data">
                    <template #title>Redefine shopping experiences</template>
                    <template #sub>Customized shopping experiences for your customers</template>
                    <template #icon>
                      <div>
                        <HeroIcons.ShoppingBagIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks#overview">
                    <template #title>Customized layout styling</template>
                    <template #sub>Style layout by extending blocks and sections for your online store's homepage, landing pages, product detail pages</template>
                    <template #icon>
                      <div>
                        <HeroIcons.Squares2X2Icon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/content/cms/add-custom-cms-blocks#defining-slots">
                    <template #title>Static and Dynamic CMS website</template>
                    <template #sub>Facilitates you to create different frontend experiences for different use cases with media</template>
                    <template #icon>
                      <div>
                        <HeroIcons.ComputerDesktopIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/concepts/commerce/content/shopping-experiences-cms#hydration-of-dynamic-content">
                    <template #title>Apply desired CMS layout</template>
                    <template #sub>Assign any desired CMS layout to product entity and category</template>
                    <template #icon>
                      <div>
                        <HeroIcons.SquaresPlusIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/custom-data/custom-fields">
                    <template #title>Custom field</template>
                    <template #sub>Custom field types and get appropriate layouts assigned</template>
                    <template #icon>
                      <div>
                        <HeroIcons.BarsArrowUpIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
                <SwagLandingCard link="/docs/guides/plugins/apps/app-scripts#translation">
                    <template #title>Translations</template>
                    <template #sub>Multilingual landing pages that supports country-specific translations</template>
                    <template #icon>
                      <div>
                        <HeroIcons.LanguageIcon class="h-10 w-10 text-blue-500" />
                     </div>
                    </template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    <h1>Custom shopping experiences</h1>
        <p>YWith Shopware's headless CMS architecture, you can easily tailor your customers' shopping by simply following one of the ways:
        <ul>
        <li><p><a href="/docs/guides/plugins/apps/content/cms">Use an app</a>. For example, you can add a basic buy button to an existing website or blog, while other apps can help you create and sell in different sales channels.</p>
        </li>
        <li><p>Build the experiences yourself using <a href="https://shopware.github.io/admin-extension-sdk/docs/guide/api-reference/cms/registerCmsElement">Admin extension SDK</a>.</p>
        </li>
        <li><p><a href="https://shopware.stoplight.io/docs/store-api/70c7b54c9faf9-fetch-and-resolve-a-cms-page">Storefront API</a>.</p>
        </li>
        </ul>
        </p>
    </template>
</SwagLanding>
