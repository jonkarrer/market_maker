import {
  Tradeview,
  LineChart,
  RiskCharts,
  Table,
  Feed,
} from "@/components/_Dashbaord/MarketTab";
import { data_stream } from "@/components/_Dashbaord/MarketTab/data";

export default function Market() {
  return (
    <section className="dashboard_section">
      <div
        className="dashboard_wrapper grid gap-16 lg:flex lg:justify-between"
        style={{ maxWidth: "1600px" }}
      >
        <div className="grid gap-16">
          <Tradeview />
          <LineChart />
          <RiskCharts />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <Table data={data_stream} />
          <Feed />
        </div>
      </div>
    </section>
  );
}
