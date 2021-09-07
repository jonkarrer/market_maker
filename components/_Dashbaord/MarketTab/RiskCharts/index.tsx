import Filter from "./Filter";
import Chart from "./Chart";

export default function RiskCharts() {
  return (
    <div className="grid gap-2">
      <Filter />
      <Chart />
    </div>
  );
}
