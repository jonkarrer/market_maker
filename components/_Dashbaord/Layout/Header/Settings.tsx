import UserIcon from "./comps/UserIcon";
import { useState } from "react";
import Dropdown from "./comps/Dropdown";

export default function Setting() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center space-x-8 lg:space-x-6">
      <img
        className="w-6 lg:w-5 xl:w-6 2xl:w-7 cursor-pointer"
        src="/Dashboard/Header/gear.svg"
        alt="gear icon"
        onClick={() => setOpen(!open)}
      />
      <UserIcon />

      <div
        className={`bg-subheading pt-8 flex flex-col items-center space-y-36 fixed right-0 z-50 lg:w-80 lg:text-lg transition-all ${
          open ? "transform-none" : "transform translate-x-full"
        }`}
        style={{ height: "calc(100vh - 90px)", top: "90px" }}
      >
        <Dropdown title="Dark Mode Settings:">
          <div className="bg-white px-3 py-1 relative">
            <p className="text-black">System Preface (default)</p>
          </div>
          <div className="px-3 py-1 relative bg-darkGrey">
            <p className="text-white">Light Mode</p>
          </div>
          <div className="px-3 py-1 relative bg-white">
            <p className="text-black">Dark Mode</p>
          </div>
        </Dropdown>

        <Dropdown title="Time Zone Settings:">
          <div className="bg-white px-3 py-1 relative">
            <p className="text-black">System Preface (default)</p>
          </div>
          <div className="px-3 py-1 relative bg-darkGrey">
            <p className="text-white">Eastern</p>
          </div>
          <div className="px-3 py-1 relative bg-white">
            <p className="text-black">Central</p>
          </div>
          <div className="px-3 py-1 relative bg-white">
            <p className="text-black">Mountain</p>
          </div>
          <div className="px-3 py-1 relative bg-white">
            <p className="text-black">Pacific</p>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
