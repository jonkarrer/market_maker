import Filter from "./Filter";
import Graph from "./Graph";

export default function LineChart() {
  return (
    <div className="grid gap-2">
      <Filter />
      <Graph />
    </div>
  );
}
