import Dropdown from "./Dropdown";
import Button from "./Button";

export default function Filter() {
  return (
    <div className="flex space-x-8">
      <span className="flex items-center space-x-2">
        <a className="font-bold">Index:</a>
        <Dropdown />
      </span>
      <span className="flex items-center space-x-2">
        <a className="font-bold">Indicators:</a>
        <Button item="GEX" />
        <Button item="NOPE" />
        <Button item="Dark Pools" />
        <Button item="Volume" />
      </span>
    </div>
  );
}
