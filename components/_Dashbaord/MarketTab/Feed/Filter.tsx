import Button from "./Button";
import { useState } from "react";

export default function Filter() {
  const [selected, setSelected] = useState("Twitter");
  return (
    <div className="flex justify-between w-full">
      <Button item="Twitter" selected={selected} setSelected={setSelected} />
      <Button item="News" selected={selected} setSelected={setSelected} />
      <Button
        item="E. Calendar"
        selected={selected}
        setSelected={setSelected}
      />
      <Button item="Discord" selected={selected} setSelected={setSelected} />
    </div>
  );
}
