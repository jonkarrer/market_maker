import React, { useState } from "react";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";
import PlanContainer from "./PlanContainer";

const stripePromise = getStripe();

const Subscriptions = () => {
  //The user selects a plan
  const [selectedPlan, setPlan] = useState(0);

  return (
    <section className="py-0 grid place-items-center gap-10 lg:gap-20 bg-blue-400">
      <h2 className="text-center">Choose a subscription</h2>
      <PlanContainer />
      <span className="w-72 text-center grid gap-5">
        <h4>Enter your payment information below.</h4>
        <h4>Your subscription will begin immediately.</h4>
      </span>
      <section
        id="payment-capture"
        className="border shadow-2xl w-full sm:w-480px md:w-528px lg:w-864px mx-auto space-y-12"
      >
        <h1 className="text-2xl sm:text-4xl font-semibold mt-8">
          Subscribe Monthly
        </h1>
        <form
          action=""
          className="space-x-2 sm:space-x-4 lg:space-x-8 w-72 sm:w-96 lg:w-500px mx-auto flex justify-between items-center"
        >
          <input
            type="text"
            placeholder="Discount Code"
            className="border w-48 sm:w-72 lg:w-96 p-1"
          />
          <button
            className="bg-blue-border text-white font-semibold px-8 py-1"
            type="submit"
          >
            Apply
          </button>
        </form>
        <section
          id="price-breakdown"
          className="mx-auto space-y-4 w-72 sm:w-96 lg:w-500px"
        >
          <span className="flex justify-between items-center">
            <p>Premium Subscription (monthly)</p> <p>$39.99</p>
          </span>
          <span className="flex justify-between items-center">
            <p>Discount</p> <p>($6.00)</p>
          </span>
          <hr />
          <span className="flex justify-between items-center">
            <h2 className="font-semibold">Total:</h2>{" "}
            <p className="font-semibold">$33.99</p>
          </span>
        </section>
        <section
          id="terms"
          className="mx-auto sm:space-x-6 flex justify-start items-center w-72 sm:w-96 lg:w-500px"
        >
          <input
            type="checkbox"
            className="w-12 h-12 sm:w-auto sm:h-auto"
            required
          />
          <p>
            I agree to the <a href="">Terms & Conditions</a> and{" "}
            <a href="">Privacy Policy</a>
          </p>
        </section>
        <button className="mx-auto bg-blue-border text-white font-semibold py-2 w-72 sm:w-96 lg:w-500px">
          Pay Now{" "}
        </button>
        <h2>Or enter your card details below</h2>
        <section className="space-y-4 pb-6 w-72 sm:w-500px mx-auto">
          <input
            className="border-solid border-1px p-2 bg-white w-72 sm:w-96 lg:w-500px m-auto"
            type="text"
            placeholder="Name on card"
          />
          {/** Init the stripe card capture, passes the selected plan to the check out function */}
          <Elements stripe={stripePromise}>
            <Checkout selectedPlan={selectedPlan} />
          </Elements>
        </section>
      </section>
    </section>
  );
};

export default Subscriptions;
