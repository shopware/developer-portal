# Payment

Shopware 6 offers a robust [payment system](/docs/concepts/commerce/checkout-concept/payments) that plays a vital role in the checkout process, managing all payment transactions between customers and merchants. 
 
The payment handlers integrate seamlessly into the point of sale, allowing customers to pay for their orders using one or multiple payment methods during the checkout process. It also ensures a seamless and hassle-free payment experience, resulting in increased customer satisfaction and a higher likelihood of completed transactions. 
 
With Shopware's payment feature, developers can ensure secure, efficient, and reliable payment processing for their ecommerce stores.

## Payment behaviors

Shopware supports different payment handlers for conducting payment transactions, such as:

 * [**Synchronous payment**](/docs/guides/plugins/apps/payment#synchronous-payments) - includes a single call to an external service. Here the final state of a transaction is returned immediately.
 * [**Asynchronous payment**](/docs/guides/plugins/apps/payment#asynchronous-payments) - that redirects the customer to a dedicated checkout page after placing an order. Here the transaction may first return a *Pending* status before returning a final status indicating the success or failure of the transaction request.
 * [**Prepared payment**](/docs/guides/plugins/apps/payment#prepared-payments) - an alternative method that first prepares and validates the payment before creating an order. Once successful, it later captures the payment.
 * [**Payment refund**](/docs/guides/plugins/apps/payment#refund) - where payment integrations return the funds to the customer.

## Payment process

In Shopware, [Apps can provide integrations to payment providers](/docs/concepts/extensions/apps-concept#integrate-payment-providers). Also, the [payment API handle](https://shopware.stoplight.io/docs/store-api/8218801e50fe5-handling-the-payment) provides a collection of APIs that enable you to:

* [Fetch a list of the available payment methods](https://shopware.stoplight.io/docs/store-api/7d24156ae6242-loads-all-available-payment-methods)
* [Set the payment method](https://shopware.stoplight.io/docs/store-api/8218801e50fe5-handling-the-payment#set-the-payment-method)
* [Initiate a payment](https://shopware.stoplight.io/docs/store-api/8218801e50fe5-handling-the-payment#initiate-the-payment)
* [Submit additional payment details](https://shopware.stoplight.io/docs/store-api/8218801e50fe5-handling-the-payment#transmit-additional-payment-details)
* [Finalize and present the payment result](/docs/resources/references/app-reference/payment-reference)
