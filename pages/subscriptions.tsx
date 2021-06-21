import Checkout from "@/components/stripe/Checkout";
import SubCards from "@/components/stripe/Card";
export default function Subscriptions() {
  return (
    <div
      id="home_page-one-gradient"
      className="h-screen flex flex-col items-center justify-center text-xl text-white"
    >
      <Checkout />
    </div>
  );
}
