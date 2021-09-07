import Filter from "./Filter";
import Twitter from "./Twitter";

export default function Feed() {
  return (
    <div className="w-full grid gap-4">
      <Filter />
      <Twitter />
    </div>
  );
}
