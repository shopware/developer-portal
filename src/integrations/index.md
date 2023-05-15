---
head:
  - - meta
    - property: 'og:image'
      content: https://shopware-docs-og.vercel.app/api/og?title=Integrations
items:
  - text: Integrations
    link: /integrations/
  - text: API concepts
    items:
      - text: Authentication & Authorization
        collapsed: true
        items:
          - text: Store API    
            link: https://shopware.stoplight.io/docs/store-api/8e1d78252fa6f-authentication-and-authorisation
          - text: Admin API   
            link: https://shopware.stoplight.io/docs/admin-api/ZG9jOjEwODA3NjQx-authentication
      - text: General search concept
        link: https://shopware.stoplight.io/docs/store-api/cf710bf73d0cd-search-queries
      - text: Error handling
        link: https://shopware.stoplight.io/docs/store-api/e1c4d4ff82cc4-error-handling
      - text: Security
        link: https://shopware.stoplight.io/docs/store-api/6b4f9a2acb576-security
  - text: Store API
    items:
      - text: Quick Start
        link: https://shopware.stoplight.io/docs/store-api/38777d33d92dc-quick-start-guide
      - text: Libraries & SDKs
        link: https://shopware.stoplight.io/docs/store-api/ZG9jOjEwODEwMjI1-javascript-sd-ks
      - text: Endpoints
        link: /docs/guides/integrations-api/general-concepts
  - text: Admin API
    items:
      - text: Quick start
        link: https://shopware.stoplight.io/docs/admin-api/twpxvnspkg3yu-quick-start-guide
      - text: Request & response
        link: https://shopware.stoplight.io/docs/admin-api/ZG9jOjEyMzAzNDU1-request-and-response-structure
      - text: Endpoint structure
        link: https://shopware.stoplight.io/docs/admin-api/ZG9jOjEyMzAzNDU1-request-and-response-structure
      - text: Endpoints
        link: https://shopware.stoplight.io/docs/admin-api/8d53c59b2e6bc-shopware-admin-api      
  - text: Reference
    items:
      - text: Admin API
        link: https://shopware.stoplight.io/docs/admin-api/
      - text: Store API
        link: https://shopware.stoplight.io/docs/store-api/
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
                <SwagLandingCard page="https://shopware.stoplight.io/docs/admin-api/fdd24cc76f22d-order-overview">
                    <template #title>Automate processes</template>
                    <template #sub>Transition order or payment states, send out emails, clear caches - automation can make life a lot easier - and more efficient.</template>
                </SwagLandingCard>
                <SwagLandingCard page="https://shopware.stoplight.io/docs/admin-api/faf8f8e4e13a0-bulk-payloads">
                    <template #title>Bulk operations</template>
                    <template #sub>Perform multiple write operations like creating, updating and deleting simultaneously.</template>
                </SwagLandingCard>
            </template>
        </SwagLandingCardList>
    </template>
</SwagLanding>