import Ticker from "./Ticker";
import Filter from "./Filter";

export default function Tradeview() {
  return (
    <div className="space-y-2">
      <Filter />
      <div className="flex lg:space-x-2 xl:space-x-4">
        <Ticker symbol="FX:EURUSD" item="one" />
        <Ticker symbol="FX:USDJPY" item="two" />
        <Ticker symbol="FX:USDCAD" item="three" />
        <div className="hidden xl:block">
          <Ticker symbol="FX:USDCHF" item="four" />
        </div>
      </div>
    </div>
  );
}
