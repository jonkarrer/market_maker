import Dropdown from "./Dropdown";
import Button from "./Button";

export default function Filter() {
  return (
    <div className="flex space-x-8">
      <span className="flex items-center space-x-2">
        <a className="font-bold">Expiry Date:</a>
        <Dropdown />
      </span>
      <span className="flex items-center space-x-2">
        <a className="font-bold">Indicators:</a>
        <Button item="Put Call Ratio" />
        <Button item="Max Pain" />
        <Button item="GEX PD" />
      </span>
    </div>
  );
}
