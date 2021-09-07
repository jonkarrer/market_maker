import Ticker from "./Ticker";
import Filter from "./Filter";

export default function Tradeview() {
  return (
    <div className="overflow-hidden space-y-3">
      <Filter />
      <div className="max-w-screen-sm overflow-x-scroll">
        <div className="grid grid-flow-col space-x-2 lg:flex lg:w-auto xl:space-x-4">
          <Ticker symbol="FX:EURUSD" item="one" />
          <Ticker symbol="FX:USDJPY" item="two" />
          <Ticker symbol="FX:USDCAD" item="three" />
          <div className="lg:hidden xl:block">
            <Ticker symbol="FX:USDCHF" item="four" />
          </div>
        </div>
      </div>
    </div>
  );
}
