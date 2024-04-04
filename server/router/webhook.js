const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const router = express.Router();
const Transaction = require("../models/transaction");

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    let event = request.body;

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        stripe.customers
          .retrieve(paymentIntentSucceeded.customer)
          .then((customer) => {
            const transactionInfo = JSON.parse(
              customer.metadata.transactionInfo
            );
            Transaction.create(transactionInfo);
          })
          .catch((err) => {
            console.log(err);
          });
        // Then define and call a function to handle the event payment_intent.succeeded
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

module.exports = router;
