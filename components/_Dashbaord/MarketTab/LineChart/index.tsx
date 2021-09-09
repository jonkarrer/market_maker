import Filter from "./Filter";
import Graph from "./Graph";
import { data_line } from "./data";
export default function LineChart() {
  return (
    <div className="space-y-3">
      <Filter />
      <Graph data={data_line} />
    </div>
  );
}
