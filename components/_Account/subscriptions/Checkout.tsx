import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { fetchPostJSON } from "utils/api-helpers";
import { useUser } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import { useRouter } from "next/router";

interface ICheckout {
  selectedPlan: number;
}
const Checkout = ({ selectedPlan }: ICheckout) => {
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
      //I send this to the backend depending on the selected plan that comes from Settings.tsx.
      //This is the test price for the Monthly
      var productId = "price_1Iv4eIGCLPB3c1Gbupd88qoS";
      return productId;
    } else {
      //This is the test price for the Monthly, but needs to be the annual
      var productId = "price_1Iv4eIGCLPB3c1Gbupd88qoS";
    }
    // @ts-ignore
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      // @ts-ignore
      card: elements?.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      setDisableButton(true);
      //Commit the payment to my backend
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
        <div className="border-solid border-1px p-3 bg-white w-72 sm:w-96 lg:w-120 2xl:w-140 lg:h-12 2xl:h-14 2xl:p-4 m-auto">
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
          className="mx-auto bg-splash text-white font-semibold py-2 w-72 sm:w-96 lg:w-120 2xl:w-140 lg:py-0 lg:h-12 2xl:h-14"
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

export default Checkout;
