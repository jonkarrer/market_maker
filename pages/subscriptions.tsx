import Checkout from "@/components/subscriptions/Checkout";
import SubCards from "@/components/subscriptions/SubCards";
export default function Subscriptions() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-xl text-white">
      <Checkout />

      <SubCards />
    </div>
  );
}
