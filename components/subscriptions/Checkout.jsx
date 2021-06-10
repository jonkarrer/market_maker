import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { fetchPostJSON } from "utils/api-helpers";
import getStripe from "utils/get-stripejs";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useState } from "react";

const stripePromise = getStripe();

const CheckoutForm = () => {
  const [choice, setChoice] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();
  const email = user?.email;
  const authId = user?.sub;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productId = e.target[choice].value;
    console.log(productId);
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
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
  };
  return (
    <div className="p-16 w-full">
      <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
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
        <div className="text-black bg-white outline-none rounded text-base border m-auto py-1 px-2">
          Powered by <strong>stripe</strong>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-72 h-72 border rounded-sm text-black bg-white text-center grid place-content-center space-y-6 shadow-xl">
            <h1 className="font-semibold text-4xl">Free</h1>
            <div className="flex flex-col items-center space-y-16">
              <p className="text-gray-500 text-base">
                <strong className="font-bold text-2xl">$0</strong> per month
              </p>
              <button
                type="submit"
                disabled={true}
                className={`bg-gray-600 text-base font-semibold text-white py-3 w-48 rounded`}
              >
                Current Plan
              </button>
            </div>
          </div>
          <div className="w-72 h-72 border rounded-sm text-black bg-white text-center grid place-content-center space-y-6 shadow-xl">
            <h1 className="font-semibold text-4xl">Monthly</h1>
            <div className="flex flex-col items-center space-y-16">
              <p className="text-gray-500 text-base">
                <strong className="font-bold text-2xl">$40</strong> per month
              </p>
              <button
                onClick={() => setChoice(2)}
                type="submit"
                value="price_1Iv4eIGCLPB3c1Gbupd88qoS"
                disabled={disableButton || !stripe}
                className={`bg-blue-border text-base font-semibold text-white py-3 w-48 rounded`}
              >
                Subscribe Monthly
              </button>
            </div>
          </div>
          <div className="w-72 h-72 border rounded-sm text-black bg-white text-center grid place-content-center space-y-6 shadow-xl">
            <h1 className="font-semibold text-4xl">Annual</h1>
            <div className="flex flex-col items-center space-y-16">
              <p className="text-gray-500 text-base">
                <strong className="font-bold text-2xl">$400</strong> per yearly
              </p>
              <button
                type="submit"
                value="price_1Iv4eIGCLPB3c1Gbupd88qoS"
                onClick={() => setChoice(3)}
                disabled={disableButton || !stripe}
                className={`bg-blue-border text-base font-semibold text-white py-3 w-48 rounded`}
              >
                Subscribe Annually
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default function Checkout() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
