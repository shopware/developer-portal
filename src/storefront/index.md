---
items:
  - text: Getting started
    link: /frontends/
  - text: Capabilities & Limitations
    link: /frontends/why-shopware-frontends.html
  - text: Areas
    items:
      - text: Framework
        collapsed: true
        items:
          - text: Requirements
            link: /frontends/framework/requirements.html   
          - text: Internal Structure
            link: /frontends/framework/internal-structure.html
          - text: Shopping Experiences
            link: /frontends/framework/shopping-experiences.html
          - text: Styling
            link: /frontends/framework/styling.html   
          - text: Context Composables
            link: /frontends/framework/context-composables.html
          - text: Shared Composables
            link: /frontends/framework/shared-composables.html
          - text: Images
            link: /frontends/framework/images.html  
          - text: Associations
            link: /frontends/framework/associations.html
          - text: Storefront url
            link: /frontends/framework/storefront-url.html
      - text: Building
        collapsed: true
        items:
          - text: Setup Templates
            link: /frontends/getting-started/templates.html 
          - text: Routing
            link: /frontends/getting-started/routing.html
          - text: CMS
            link: /frontends/getting-started/cms/
          - text: E-commerce
            link: /frontends/getting-started/e-commerce/ 
          - text: Page elements
            link: /frontends/getting-started/page-elements/
          - text: Overwriting and estensing Composables
            link: /frontends/getting-started/overwriting-composables.html
          - text: Sitemap
            link: /frontends/getting-started/sitemap.html
          - text: Wishlist
            link: /frontends/getting-started/wishlist.html
      - text: Best Practices
        collapsed: true
        items:
          - text: Deployment
            link: /frontends/best-practices/deployment.html 
          - text: Error-handling
            link: /frontends/best-practices/error-handling.html
          - text: Images
            link: /frontends/best-practices/images.html
          - text: Performance
            link: /frontends/best-practices/performance.html
          - text: Testing
            link: /frontends/best-practices/testing.html
  - text: Package Reference
    items:
      - text: Composables
        link: /frontends/packages/composables.html
      - text: API client
        link: /frontends/packages/api-client.html
      - text: Types
        link: /frontends/packages/types.html
      - text: Helpers
        link: /frontends/packages/helpers.html
  - text: Resources
    items:
      - text: Examples
        link: /frontends/resources/examples/
      - text: Community modules
        link: /frontends/resources/community-modules/
aside: false
swag:
  related: false
---

<SwagLanding image="/landing/apps.png">
    <template #title>Shopware Frontends</template>
    <template #description>
        Shopware Composable Frontends is Shopware's toolkit for creating <b>platform agnostic</b> custom storefronts. The demo store implementation is based on <b>Vue.js</b> and <b>Nuxt3</b>.
    </template>
    <template #ctas>
        <PageRef page="/docs/guides/plugins/apps/app-base-guide.html" title="Start building your first Shopware Frontends project" sub="Learn how to set up your development environment and start coding within a couple of minutes." />
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #title>Starter guides</template>
            <template #description>
                The number of topics that are available for exploration can be overwhelming. To help you navigate this complexity, we have curated tutorials that are designed to familiarize you with some of our core concepts.
            </template>
            <template #cards>
                <PageRef page="/frontends/getting-started/templates.html">
                    <template #title>Setup templates</template>
                    <template #sub>Learn how to get started with custom frontend with pre-existing templates.</template>
                </PageRef>
                <PageRef page="/frontends/resources/examples/">
                    <template #title>Cookbook recepies</template>
                    <template #sub>Kickstart your frontends project with provided example codes.</template>
                </PageRef>
                <PageRef page="/frontends/getting-started/templates/demo-store-template.html">
                    <template #title>Vue Demo Store on StackBlitz</template>
                    <template #sub>The demo store template is a reference implementation of an online store UI.</template>
                </PageRef>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>
