import { useState } from "react";
import { Plan, Checkout } from "./index";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";

const stripePromise = getStripe();

const Settings = () => {
  const [selectedPlan, setPlan] = useState(0);
  return (
    <main className="sm:mt-5 space-y-12 grid text-center w-full">
      <div className="sm:hidden fixed overflow-auto left-0 m-auto bottom-0 top-0 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full cursor-pointer">
        ///
      </div>
      <h1 className="text-2xl sm:text-4xl font-semibold">
        Choose a subscription
      </h1>
      <section
        id="select-plan-container"
        className="grid space-y-10 sm:space-y-0 sm:flex m-auto"
      >
        <Plan
          subscription="Free"
          price="0"
          selected={selectedPlan === 1 ? true : false}
          setPlan={setPlan}
          current={true}
        >
          <div className="text-gray-500 sm:text-xs lg:text-base">
            <p>Delayed Data</p>
            <p>Single dashboard</p>
          </div>
        </Plan>
        <Plan
          subscription="Monthly"
          price="39.99"
          selected={selectedPlan === 2 ? true : false}
          setPlan={setPlan}
          current={false}
        >
          <div className="text-gray-500 sm:text-xs lg:text-base">
            <p>Billed monthly</p>
            <p>Premium features</p>
          </div>
        </Plan>
        <Plan
          subscription="Annual"
          price="399.99"
          selected={selectedPlan === 3 ? true : false}
          setPlan={setPlan}
          current={false}
        >
          <div className="text-gray-500 sm:text-xs lg:text-base">
            <p>Billed annually</p>
            <p>Premium features</p>
            <p>Priority requests</p>
          </div>
        </Plan>
      </section>
      <h1 className="font-semibold sm:text-lg lg:text-xl">
        Enter your payment information below.
      </h1>
      <h1 className="font-semibold sm:text-lg lg:text-xl">
        Your subscription will begin immediately
      </h1>
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
          <Elements stripe={stripePromise}>
            <Checkout selectedPlan={selectedPlan} />
          </Elements>
        </section>
      </section>
    </main>
  );
};

export default Settings;
