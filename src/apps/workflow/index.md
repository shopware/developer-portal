# Workflow Overview

Workflow automates operations of your e-commerce business like checkout process, order transaction, email marketing, customer registration, etc., which streamlines your business and gains better outcomes.

Shopware offers the below automation solutions for your business operations:

* [Flow Builder](https://developer.shopware.com/docs/concepts/framework/flow-concept)
* [Webhooks](https://developer.shopware.com/docs/resources/references/adr/app/2022-04-19-integrate-app-into-flow-action#webhooks)
* [Document generation](https://developer.shopware.com/docs/guides/plugins/plugins/checkout/document/add-custom-document-type#adding-a-generator)

A Flow Builder in Shopware automates business processes. An event initiates a business process by triggering a certain condition, followed by executing the action.

On the other hand, you can send data about events on the server to a web application using webhooks. This is to say, the apps offer the possibility to deliver their own flow actions via webhooks. With [webhooks, you are able to subscribe to events occurring in Shopware](https://developer.shopware.com/docs/guides/plugins/apps/app-base-guide#webhooks).

Document generation automatically creates typical documents used within a business, such as invoices, contracts, order cancellations, and more. These document templates can be customized to have different brand names or personalized marketing messages on invoice templates with a PDF generator. Document automation uses workflows to assist in creating electronic documents.
