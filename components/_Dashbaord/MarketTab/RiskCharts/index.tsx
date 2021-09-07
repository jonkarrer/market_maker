import Filter from "./Filter";
import Chart from "./Chart";

export default function RiskCharts() {
  return (
    <div className="space-y-3">
      <Filter />
      <Chart />
    </div>
  );
}
