import Filter from "./Filter";
import Twitter from "./Twitter";

export default function Feed() {
  return (
    <div className="xl:w-72 2xl:w-85 grid gap-4">
      <Filter />
      <Twitter />
    </div>
  );
}
