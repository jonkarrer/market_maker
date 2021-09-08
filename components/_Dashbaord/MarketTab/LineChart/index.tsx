import Filter from "./Filter";
import Graph from "./Graph";

export default function LineChart() {
  return (
    <div className="space-y-3">
      <Filter />
      <Graph />
    </div>
  );
}