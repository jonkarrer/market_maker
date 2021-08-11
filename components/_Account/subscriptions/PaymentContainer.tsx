import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "utils/get-stripejs";

const stripePromise = getStripe();

export default function PaymentContainer() {
  return (
    <section className="border shadow-2xl py-12 grid place-items-center gap-12 md:w-120 lg:w-full">
      {/** Price breakdown */}
      <div className="grid gap-3 md:m-auto md:w-96 lg:w-500px">
        <span className="flex justify-between items-center">
          <p>Premium Subscription (monthly)</p> <p>$39.99</p>
        </span>
        <span className="flex justify-between items-center">
          <p>Discount</p> <p>($6.00)</p>
        </span>
        <hr />
        <span className="flex justify-between items-center">
          <h4 className="font-semibold">Total:</h4>{" "}
          <p className="font-semibold">$33.99</p>
        </span>
      </div>

      {/** Discount code */}
      <form
        action=""
        className="flex justify-between items-center md:w-96 lg:w-500px"
      >
        <input
          type="text"
          placeholder="Discount Code"
          className="border w-full p-1 lg:h-12"
        />
        <button
          className="bg-splash text-white font-semibold px-8 py-1 lg:h-12 lg:px-12 rounded-none"
          type="submit"
        >
          Apply
        </button>
      </form>

      {/** Terms and Conditions */}
      <div className="flex justify-between items-center w-full md:w-96 lg:w-500px">
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

      <button className="bg-splash w-72 md:w-96 lg:w-500px lg:h-12 m-auto text-white">
        Pay Now{" "}
      </button>

      <h5 className="text-center">Or enter your card details below</h5>

      {/** Payment Capture */}
      <div className="grid gap-3 place-content-center">
        <input
          className="border-solid border-1px p-2 bg-white lg:h-12"
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
