---
head:
  - - meta
    - property: 'og:image'
      content: https://shopware-docs-og.vercel.app/api/og?title=Integrations
items:
  - text: Integrations
    link: /integrations/
  - text: Admin API
    items:
      - text: Authentication
        link: /docs/guides/integrations-api/general-concepts
      - text: General concepts
        link: /docs/guides/integrations-api/general-concepts
      - text: Reading data
        link: /docs/guides/integrations-api/general-concepts
      - text: Writing data
        link: /docs/guides/integrations-api/general-concepts
      - text: Processes
        link: /docs/guides/integrations-api/general-concepts
  - text: Guides
    items:
      - text: Product data
        link: /docs/guides/integrations-api/general-concepts
      - text: Media Uploads
        link: /docs/guides/integrations-api/general-concepts
      - text: Customers
        link: /docs/guides/integrations-api/general-concepts
      - text: Order automation
        link: /docs/guides/integrations-api/general-concepts
  - text: Reference
    items:
      - text: Admin API
        link: https://shopware.stoplight.io/docs/admin-api/
aside: false
swag:
  related: false
---

<SwagLanding image="/landing/themes.png">
    <template #title>Automate, integrate & connect</template>
    <template #description>
        Shopware offers an extensive Admin API that allows for way more than just reading and writing data. Learn how to make the most of it and build integrations, connectors or imports.
    </template>
    <template #ctas>
        <PageRef page="/docs/concepts/api/admin-api" title="Admin API Quick Start" sub="Dive into the basics of authentication, privileges, reading and writing data, working with errors." />
    </template>
    <template #exposed>
        <SwagLandingCardList>
            <template #cards>
                <SwagLandingCard page="/docs/guides/integrations-api/general-concepts/search-criteria">
                    <template #title>Criteria concept</template>
                    <template #sub>Understand the search criteria, a powerful concept to read, filter and aggregate data through the Admin API.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/themes/add-assets-to-theme">
                    <template #title>Automate processes</template>
                    <template #sub>Transition order or payment states, send out emails, clear caches - automation can make life a lot easier - and more efficient.</template>
                </SwagLandingCard>
                <SwagLandingCard page="/docs/guides/plugins/themes/add-theme-inheritance">
                    <template #title>Working with media</template>
                    <template #sub>When working with products, you're also working with images. Learn best practices to implement media imports.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>