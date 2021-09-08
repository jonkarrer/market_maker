import { useState } from "react";

export default function Dropdown() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="grid gap-6">
      <div
        onClick={() => setToggle(!toggle)}
        className="bg-subheading rounded flex items-center justify-between px-3 relative cursor-pointer w-32"
      >
        <a className="text-black">2002/10/5</a>
        <a className="text-black cursor-pointer text-xs">▼</a>
        <div
          className={`${
            toggle ? "hidden" : "block"
          } absolute bottom-0 left-0 w-full transform translate-y-full`}
        >
          <div className="bg-gray-200 px-3 py-1 relative">
            <p className="text-black">2002/10/5</p>
          </div>
          <div className="px-3 py-1 relative bg-gray-300">
            <p className="text-black">2002/10/5</p>
          </div>
          <div className="bg-gray-200 px-3 py-1 relative">
            <p className="text-black">2002/10/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
