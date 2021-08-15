import Profile from "./Profile";
import Settings from "./Settings";
import Alerts from "./Alerts";

export default function Account() {
  return (
    <section className="py-0 w-full bg-red-400">
      <div className="wrapper">
        <Profile />
        <Settings />
        <Alerts />
      </div>
    </section>
  );
}
