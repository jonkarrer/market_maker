import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { fetchPostJSON } from "utils/api-helpers";
import getStripe from "utils/get-stripejs";
import { useUser } from "@auth0/nextjs-auth0";

const stripePromise = getStripe();

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();
  const email = user?.email;
  const authId = user?.sub;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;

      try {
        const response = await fetchPostJSON("api/stripe/charge", {
          email,
          productId: "price_1Iv4eIGCLPB3c1Gbupd88qoS",
          id,
          authId,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="p-16 w-full">
      <form
        onSubmit={handleSubmit}
        className="w-96 sm:w-500px h-28 space-y-8 flex flex-col"
      >
        <div className="border-solid border-1px p-2">
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
          className="text-black text-base border-2 border-solid m-auto py-1 px-2"
          type="submit"
          disabled={!stripe}
        >
          Powered by <strong>stripe</strong>
        </button>
      </form>
    </div>
  );
};
export default function StripeEl() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
