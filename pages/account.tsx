import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { fetchPostJSON } from "utils/api-helpers";
import getStripe from "utils/get-stripejs";
import { useRouter } from "next/router";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import React, { useContext, useState } from "react";

const stripePromise = getStripe();

interface IGradient {
  email: string | null | undefined;
}
const Gradient = ({ email }: IGradient) => (
  <div
    id="home_page-one-gradient"
    className="text-black font-semibold flex flex-col justify-end items-start h-64"
  >
    <h1 className="mx-std mb-6 text-mobile-h sm:text-5xl">Account Settings</h1>
    <button className="btn mx-std font-normal text-black mb-10 sm:text-base 2xl:text-xl sm:px-4 sm:py-2 hover:bg-btn-hover">
      {email}
    </button>
  </div>
);

const Menu = () => (
  <div
    id="menu"
    className="rounded shadow-term-panel pr-10 mr-5 text-gray-600 pt-6 sm:w-56"
  >
    <ul className="list-none space-y-3">
      <li className="font-bold text-black">Account</li>
      <li className="text-gray-600">Profile</li>
      <li>Settings</li>
      <li>
        Alert <br /> Preferences
      </li>
    </ul>
    <ul className="list-none mt-10 space-y-3">
      <li className="font-bold text-black">Billing</li>
      <li className="font-bold text-black">Subscriptions</li>
    </ul>
  </div>
);

interface ICard {
  subscription: string;
  price: string;
  children: React.ReactElement;
  selected: boolean;
  setPlan: any;
  current: boolean;
}
const Card = ({
  subscription,
  price,
  children,
  selected,
  setPlan,
  current,
}: ICard) => {
  function selectPlan() {
    if (subscription === "Monthly") {
      setPlan(2);
      return;
    } else if (subscription === "Annual") {
      setPlan(3);
      return;
    } else {
      setPlan(1);
      return;
    }
  }
  return (
    <div
      className={`relative sm:w-40 sm:h-44 md:w-44 md:h-44 lg:w-72 lg:h-72 border ${
        selected ? "border-blue-border" : "border"
      } rounded-sm text-black grid shadow-xl`}
    >
      <div className="flex flex-col items-start mx-auto text-left mt-5 lg:w-44">
        <h1 className="font-semibold sm:text-xl lg:text-4xl">{subscription}</h1>
        <div className="text-base text-black">
          <strong className="font-bold sm:text-lg lg:text-2xl">${price}</strong>
          {children}
        </div>
      </div>
      <div className="sm:h-9 lg:h-16 sm:text-xs lg:text-base absolute bottom-0 left-0 right-0">
        {current ? (
          <button className="sm:h-6 sm:w-32 lg:h-10 lg:w-44 mx-auto bg-gray-400 text-white">
            Current Plan
          </button>
        ) : (
          <button
            onClick={selectPlan}
            className={`${
              selected
                ? "bg-blue-border text-white"
                : "border border-blue-border text-blue-border"
            } sm:h-6 sm:w-32 lg:h-10 lg:w-44 mx-auto`}
          >
            {selected ? "Selected" : `Select ${subscription}`}
          </button>
        )}
      </div>
    </div>
  );
};

const CheckoutForm = () => {
  return (
    <div>
      <form className="space-y-3 flex flex-col">
        <div className="border-solid border-1px p-2 bg-white w-500px m-auto">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button className="mx-auto bg-blue-border text-white font-semibold py-2 lg:w-500px">
          Subscribe
        </button>
      </form>
      <p className="text-black mt-8 rounded-lg w-32 lg:text-sm border mx-auto py-1 px-2">
        <img src="/power_stripe.svg" alt="powered by stripe" />
      </p>
    </div>
  );
};
const Settings = () => {
  const [selectedPlan, setPlan] = useState(0);
  return (
    <div className="mt-5 space-y-12 grid text-center w-full">
      <h1 className="sm:text-4xl font-semibold">Choose a subscription</h1>
      <div id="select-plan-container" className="flex m-auto">
        <Card
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
        </Card>
        <Card
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
        </Card>
        <Card
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
        </Card>
      </div>
      <h1 className="font-semibold sm:text-lg lg:text-xl">
        Enter your payment information below.
      </h1>
      <h1 className="font-semibold sm:text-lg lg:text-xl">
        Your subscription will begin immediately
      </h1>
      <div
        id="payment-capture"
        className="border shadow-2xl w-864px mx-auto space-y-12"
      >
        <h1 className="sm:text-4xl font-semibold mt-8">Subscribe Monthly</h1>
        <form
          action=""
          className="space-x-8 w-500px mx-auto flex justify-between items-center"
        >
          <input
            type="text"
            placeholder="Discount Code"
            className="border lg:w-96 p-1"
          />
          <button
            className="bg-blue-border text-white font-semibold lg:px-8 lg:py-1"
            type="submit"
          >
            Apply
          </button>
        </form>
        <div id="price-breakdown" className="mx-auto space-y-4 lg:w-500px">
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
        </div>
        <div
          id="terms"
          className="mx-auto space-x-6 flex justify-start items-center lg:w-500px"
        >
          <input type="checkbox" required />
          <p>
            I agree to the <a href="">Terms & Conditions</a> and{" "}
            <a href="">Privacy Policy</a>
          </p>
        </div>
        <button className="mx-auto bg-blue-border text-white font-semibold py-2 lg:w-500px">
          Pay Now{" "}
        </button>
        <h2>Or enter your card details below</h2>
        <div className="space-y-4 pb-6 w-500px mx-auto">
          <input
            className="border-solid border-1px p-2 bg-white w-500px m-auto"
            type="text"
            placeholder="Name on card"
          />
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default function Account() {
  const { user, isLoading } = useUser();
  return (
    <div>
      <Gradient email={user?.email} />

      <div className="mx-std flex">
        <Menu />
        <Settings />
      </div>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired();
