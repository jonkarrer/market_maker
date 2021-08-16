import { useState } from "react";
import LogOut from "./LogOut";

export default function Settings() {
  return (
    <div className="grid gap-16">
      <h2>Settings</h2>
      <Dropdown />
      <div className="grid md:grid-cols-2 gap-4 md:w-100 mt-20">
        <LogOut />
        <button className="h-12 md:w-44 lg:w-48 bg-gray-300 text-black flex items-center">
          Reset Password
        </button>
      </div>
    </div>
  );
}

const Dropdown = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="grid gap-6">
      <h6>Dark Mode Settings:</h6>
      <div
        onClick={() => setToggle(!toggle)}
        className="bg-gray-300 flex items-center justify-between px-3 py-1 relative cursor-pointer md:w-80"
      >
        <p className="text-black">System Preface (default)</p>
        <h6 className="text-black cursor-pointer">▼</h6>
        <div
          className={`${
            toggle ? "hidden" : "block"
          } absolute bottom-0 left-0 w-full transform translate-y-full`}
        >
          <div className="bg-gray-200 px-3 py-1 relative">
            <p className="text-black">System Preface (default)</p>
          </div>
          <div className="px-3 py-1 relative bg-gray-300">
            <p className="text-black">Light Mode</p>
          </div>
          <div className="bg-gray-200 px-3 py-1 relative">
            <p className="text-black">Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};
