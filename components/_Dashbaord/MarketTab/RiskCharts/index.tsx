import Filter from "./Filter";
import Chart from "./Chart";
import { data_bar } from "../LineChart/data";

export default function RiskCharts() {
  return (
    <div className="space-y-3">
      <Filter />
      <Chart data={data_bar} />
    </div>
  );
}
