import Profile from "./Profile";
import Settings from "./Settings";
import Alerts from "./Alerts";
import Card from "./Card";
import LogOut from "./LogOut";
import SubscriptionProvider from "@/components/SubscripContext";

export default function Account() {
  return (
    <SubscriptionProvider>
      <section className="py-0 w-full">
        <div className="wrapper flex lg:w-full md:pl-12">
          <div className="grid gap-16 flex-1 lg:gap-36">
            <Profile />
            <Settings />
            <Alerts />
          </div>
          <div className="hidden xl:grid gap-4 h-96 place-items-end">
            <LogOut />
            <Card />
          </div>
        </div>
      </section>
    </SubscriptionProvider>
  );
}
