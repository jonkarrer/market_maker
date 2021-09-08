import Dropdown from "./Dropdown";
import Button from "./Button";

export default function Filter() {
  return (
    <div className="grid gap-5 lg:flex lg:space-x-8">
      <span className="flex items-center space-x-2">
        <a className="font-bold hidden lg:block dark:text-white">Index:</a>
        <Dropdown />
      </span>
      <span className="flex items-center lg:space-x-2">
        <a className="font-bold hidden lg:block dark:text-white">Indicators:</a>
        <Button item="GEX" />
        <Button item="NOPE" />
        <Button item="Dark Pools" />
        <Button item="Volume" />
      </span>
    </div>
  );
}
