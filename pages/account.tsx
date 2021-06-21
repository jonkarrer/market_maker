import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";
import { fetchPostJSON } from "utils/api-helpers";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { useRouter } from "next/router";

const stripePromise = getStripe();

interface IGradient {
  email: string | null | undefined;
}
const Gradient = ({ email }: IGradient) => (
  <div
    id="home_page-one-gradient"
    className="text-black font-semibold flex flex-col justify-end items-start h-48 sm:h-72"
  >
    <h1 className="mx-4 sm:mx-std mb-3 sm:mb-6 text-3xl sm:text-5xl">
      Account Settings
    </h1>
    <button className="btn mx-4 sm:mx-std font-normal text-black mb-5 sm:mb-10 text-xs sm:text-base 2xl:text-xl sm:px-4 sm:py-2 hover:bg-btn-hover">
      {email}
    </button>
  </div>
);

const Menu = () => (
  <div
    id="menu"
    className="rounded h-screen absolute shadow-term-panel transform -translate-x-full sm:transform-none sm:relative pr-2 sm:pr-10 sm:mr-5 text-xs sm:text-sm lg:text-base text-gray-600 pt-6 sm:w-28 lg:w-56"
  >
    <ul className="list-none space-y-10 sm:space-y-3">
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
      className={`relative w-64 h-64 sm:w-40 sm:h-44 md:w-44 lg:w-72 lg:h-72 border ${
        selected ? "border-blue-border" : "border"
      } rounded-sm text-black grid shadow-xl`}
    >
      <div className="flex flex-col items-start mx-auto text-left mt-5 lg:w-44">
        <h1 className="font-semibold text-3xl sm:text-xl lg:text-4xl">
          {subscription}
        </h1>
        <div className="text-base text-black">
          <strong className="font-bold text-lg lg:text-2xl">${price}</strong>
          {children}
        </div>
      </div>
      <div className="sm:h-9 lg:h-16 sm:text-xs lg:text-base absolute bottom-4 sm:bottom-0 left-0 right-0">
        {current ? (
          <button className="h-8 w-32 lg:h-10 lg:w-44 mx-auto bg-gray-400 text-white">
            Current Plan
          </button>
        ) : (
          <button
            onClick={selectPlan}
            className={`${
              selected
                ? "bg-blue-border text-white"
                : "border border-blue-border text-blue-border"
            } h-8 w-32 lg:h-10 lg:w-44 mx-auto`}
          >
            {selected ? "Selected" : `Select ${subscription}`}
          </button>
        )}
      </div>
    </div>
  );
};

interface ICheckoutForm {
  selectedPlan: number;
}
const CheckoutForm = ({ selectedPlan }: ICheckoutForm) => {
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();
  const email = user?.email;
  const authId = user?.sub;
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (selectedPlan === 0) {
      alert("Select a plan above");
      return;
    }
    if (selectedPlan === 1) {
      var productId = "price_1Iv4eIGCLPB3c1Gbupd88qoS";
      return productId;
    } else {
      var productId = "price_1Iv4eIGCLPB3c1Gbupd88qoS";
    }
    console.log(productId);
    // @ts-ignore
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      // @ts-ignore
      card: elements?.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      setDisableButton(true);
      try {
        const response = await fetchPostJSON("api/stripe/charge", {
          email,
          productId: productId,
          id,
          authId,
        });
        console.log(response);
        return router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3 flex flex-col">
        <div className="border-solid border-1px p-2 bg-white w-72 sm:w-96 lg:w-500px m-auto">
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
        <button
          disabled={disableButton}
          className="mx-auto bg-blue-border text-white font-semibold py-2 w-72 sm:w-96 lg:w-500px"
        >
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
            <CheckoutForm selectedPlan={selectedPlan} />
          </Elements>
        </section>
      </section>
    </main>
  );
};

export default function Account() {
  const { user, isLoading } = useUser();
  return (
    <div>
      <Gradient email={user?.email} />

      <div className="sm:mx-std flex">
        <Menu />
        <Settings />
      </div>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired();
