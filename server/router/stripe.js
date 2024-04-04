const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const router = express.Router();
const orderCode = require("../utils/generateOrderCode");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/order/success", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );

    const customers = await stripe.customers.retrieve(session.customer);

    const billingInfo = session.customer_details;
    const transactionInfo = JSON.parse(customers.metadata.transactionInfo);

    if (session.status === "complete") {
      res
        .status(200)
        .send({ message: "Payment Successful", billingInfo, transactionInfo });
    }
  } catch (e) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

router.post("/create-checkout-session", async (req, res) => {
  const { shoppingCartProduct, shippingInfo } = req.body;

  const completeAddress = `${shippingInfo.address} ${shippingInfo.city} ${shippingInfo.region} ${shippingInfo.country} ${shippingInfo.zipCode}`;
  const items = shoppingCartProduct.map((product) => {
    return {
      name: product.name,
      qty: product.qty,
    };
  });

  const totalAmount = shoppingCartProduct.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.qty;
    },
    10
  );

  const transactionInfo = {
    id: orderCode,
    email: shippingInfo.email,
    firstName: shippingInfo.firstName,
    lastName: shippingInfo.lastName,
    address: completeAddress,
    zipCode: shippingInfo.zipCode,
    phone: shippingInfo.phone,
    items: items,
    amount: totalAmount,
    status: "Prepare",
  };

  try {
    const customer = await stripe.customers.create({
      metadata: {
        transactionInfo: JSON.stringify(transactionInfo),
      },
    });

    const session = await stripe.checkout.sessions.create({
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1000,
              currency: "usd",
            },
            display_name: "Next day shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 2,
              },
              maximum: {
                unit: "business_day",
                value: 5,
              },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      payment_method_types: ["card"],
      billing_address_collection: "required",
      mode: "payment",
      customer: customer.id,
      line_items: shoppingCartProduct.map((product) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: product.imgName.map(
                (imgName) =>
                  `https://d2j3uzrexrokpc.cloudfront.net/${product.type}/${imgName}`
              ),
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: product.qty,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/shopping_cart/shipping/checkout_success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/shopping_cart/shipping/checkout_fail`,
    });

    res.status(200).send({ id: session.id });
  } catch (e) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
});

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
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
