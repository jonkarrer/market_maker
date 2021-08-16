import { useState } from "react";

export default function Settings() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="space-y-7 lg:space-y-10">
      <h2>Settings</h2>
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
    </div>
  );
}
