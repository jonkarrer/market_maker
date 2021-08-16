import Profile from "./Profile";
import Settings from "./Settings";
import Alerts from "./Alerts";
import Card from "./Card";
export default function Account() {
  return (
    <section className="py-0 w-full">
      <div className="wrapper flex w-full pl-12">
        <div className="grid gap-12 flex-1 lg:gap-36">
          <Profile />
          <Settings />
          <Alerts />
        </div>
        <Card />
      </div>
    </section>
  );
}
