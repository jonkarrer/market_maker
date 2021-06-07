/**
 * This page handles stripe user calls. [pid] is extracted from the request and used to call
    stripe user api. We can get the user and update the user info.
 * In the app I use api/stripe/${userId} to connect to the proper user. This usually comes from
    auth0 user app_metadata
 */

import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query;
  if (req.method === "GET") {
    try {
      const customer = await stripe.customers.retrieve(`${pid}`);
      res.status(200).json(customer);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
