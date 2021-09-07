import Button from "./Button";
import { useState } from "react";

export default function Filter() {
  const [selected, setSelected] = useState("Equities");
  return (
    <div className="flex w-max">
      <Button item="Equities" selected={selected} setSelected={setSelected} />
      <Button item="Futures" selected={selected} setSelected={setSelected} />
      <Button item="Crypto" selected={selected} setSelected={setSelected} />
      <Button item="Forex" selected={selected} setSelected={setSelected} />
    </div>
  );
}
