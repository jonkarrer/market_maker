import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});
export default async function handler(req, res) {
  const { email, productId, id } = req.body;

  try {
    //Create customer
    const customer = await stripe.customers.create({
      email: email,
    });
    //Add payment method
    const paymentMethod = await stripe.paymentMethods.attach(id, {
      customer: customer.id,
    });
    //Creat sub with customer
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: productId,
        },
      ],
      default_payment_method: id,
    });

    res.status(200).json({
      customer,
      subscriptionId: subscription.id,
    });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
}

// const paymentInfo = await stripe.paymentIntents.create({
//   amount: 4000,
//   customer: customer.id,
//   setup_future_usage: "off_session",
//   currency: "usd",
//   description: "Setup Sub",
//   payment_method: id,
//   payment_method_types: ["card"],
//   receipt_email: email,
//   confirm: true,
// });
