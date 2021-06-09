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
        const response = await fetchPostJSON("api/charge", {
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
    <div className="bg-gray-600">
      <form onSubmit={handleSubmit} className="w-96 h-52 space-y-16">
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
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
