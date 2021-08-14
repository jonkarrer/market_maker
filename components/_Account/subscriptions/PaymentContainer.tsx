import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";
import { useSubscriptionContext } from "../../SubscripContext";
import { useEffect, useState } from "react";

const stripePromise = getStripe();

export default function PaymentContainer() {
  const context = useSubscriptionContext();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(3);

  useEffect(() => {
    if (context?.userSelection === "Monthly") setPrice(39.0);
    if (context?.userSelection === "Annual") setPrice(399.0);
  }, [context?.userSelection]);

  return (
    <section className="border shadow-2xl py-12 grid place-items-center gap-12 w-full md:w-120 lg:w-full 2xl:py-16">
      {/** Price breakdown */}
      <div className="grid gap-3 md:m-auto md:w-96 lg:w-120 2xl:w-140">
        <span className="flex justify-between items-center">
          <p>Premium Subscription ({`${context?.userSelection}`})</p>{" "}
          <p>${price}</p>
        </span>
        <span className="flex justify-between items-center">
          <p>Discount</p> <p>(${discount})</p>
        </span>
        <hr />
        <span className="flex justify-between items-center">
          <h4 className="font-semibold">Total:</h4>{" "}
          <p className="font-semibold">${price - discount}</p>
        </span>
      </div>

      {/** Discount code */}
      <form
        action=""
        className="flex justify-between items-center md:w-96 lg:w-120 2xl:w-140"
      >
        <input
          type="text"
          placeholder="Discount Code"
          className="border w-full p-1 lg:h-12 2xl:h-14"
        />
        <button
          className="bg-splash text-white font-semibold px-8 py-1 lg:h-12 lg:px-12 2xl:h-14 rounded-none dark:border-none"
          type="submit"
        >
          Apply
        </button>
      </form>

      {/** Terms and Conditions */}
      <div className="flex justify-between items-center w-full md:w-96 lg:w-120 2xl:w-140">
        <input
          type="checkbox"
          className="h-12 w-12 transform scale-150 lg:scale-100"
          required
        />
        <p>
          I agree to the{" "}
          <a href="" className="underline">
            Terms {"&"} Conditions
          </a>{" "}
          and <a href="">Privacy Policy</a>
        </p>
      </div>

      <button className="bg-splash w-72 md:w-96 lg:w-120 2xl:w-140 lg:h-12 2xl:h-14 m-auto text-white dark:border-none rounded-none">
        Pay Now{" "}
      </button>

      <h5 className="text-center">Or enter your card details below</h5>

      {/** Payment Capture */}
      <div className="grid gap-3 place-content-center">
        <input
          className="border-solid border-1px p-2 bg-white lg:h-12 2xl:h-14"
          type="text"
          placeholder="Name on card"
        />
        {/** Init the stripe card capture, passes the selected plan to the check out function */}
        <Elements stripe={stripePromise}>
          {/** This is where I pass the selected plan from the context api i will make */}
          <Checkout selectedPlan={1} />
        </Elements>
      </div>
    </section>
  );
}
