import Ticker from "./Ticker";
import { useState, Dispatch, SetStateAction } from "react";

export default function Tradeview() {
  return (
    <div className="grid gap-2">
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

const Filter = () => {
  const [selected, setSelected] = useState("Equites");
  return (
    <div className="flex w-max">
      <Button item="Equities" selected={selected} setSelected={setSelected} />
      <Button item="Futures" selected={selected} setSelected={setSelected} />
      <Button item="Crypto" selected={selected} setSelected={setSelected} />
      <Button item="Forex" selected={selected} setSelected={setSelected} />
    </div>
  );
};

interface IButton {
  item: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Button = ({ item, selected, setSelected }: IButton) => {
  return (
    <div
      className="gradient-box-small bg-white"
      onClick={() => setSelected(item)}
    >
      <div
        className={`text-center w-20 cursor-pointer z-20 h-full ${
          selected === item
            ? "text-white bg-splash rounded-none"
            : "text_gradient_splash rounded-lg"
        }`}
      >
        <a>{item}</a>
      </div>
    </div>
  );
};
