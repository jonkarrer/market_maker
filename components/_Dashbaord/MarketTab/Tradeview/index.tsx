import Ticker from "./Ticker";
import Filter from "./Filter";

export default function Tradeview() {
  return (
    <div className="grid">
      <Filter />
      <div className="flex space-x-4">
        <Ticker symbol="FX:EURUSD" item="one" />
        <Ticker symbol="FX:USDJPY" item="two" />
        <Ticker symbol="FX:USDCAD" item="three" />
        <Ticker symbol="FX:USDCHF" item="four" />
      </div>
    </div>
  );
}
