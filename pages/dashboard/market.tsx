import {
  Tradeview,
  LineChart,
  RiskCharts,
  Table,
  Feed,
} from "@/components/_Dashbaord/MarketTab";

export default function Market() {
  return (
    <section className="dashboard_section min-h-screen">
      <div className="dashboard_wrapper flex justify-between">
        <div className="grid gap-8">
          <Tradeview />
          <LineChart />
          <RiskCharts />
        </div>
        <div className="flex flex-col items-center space-y-6">
          <Table />
          <Feed />
        </div>
      </div>
    </section>
  );
}
