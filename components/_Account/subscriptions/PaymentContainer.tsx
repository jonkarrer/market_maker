import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";

const stripePromise = getStripe();

export default function PaymentContainer() {
  return (
    <section className="border shadow-2xl py-10 grid gap-12">
      {/** Price breakdown */}
      <div className="grid gap-3">
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

      {/** Discount code */}
      <form action="" className="flex justify-between">
        <input
          type="text"
          placeholder="Discount Code"
          className="border w-48 sm:w-72 lg:w-96 p-1"
        />
        <button
          className="bg-splash text-white font-semibold px-8 py-1"
          type="submit"
        >
          Apply
        </button>
      </form>

      {/** Terms and Conditions */}
      <div className="flex justify-between w-full">
        <input
          type="checkbox"
          className="h-12 w-12 transform scale-150"
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

      <button className="bg-splash w-full text-white">Pay Now </button>

      <h5 className="text-center">Or enter your card details below</h5>

      {/** Payment Capture */}
      <div className="grid gap-3 place-content-center">
        <input
          className="border-solid border-1px p-2 bg-white"
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
