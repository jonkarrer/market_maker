import { useState } from "react";
import { Children } from "utils/interfaces";

interface IDrop extends Children {
  title: string;
}

export default function Dropdown({ title, children }: IDrop) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="grid gap-2">
      <h6>{title}</h6>
      <div
        onClick={() => setToggle(!toggle)}
        className="bg-darkGrey flex items-center justify-between px-3 py-1 relative cursor-pointer md:w-72"
      >
        <p className="text-white">System Preface (default)</p>
        <h6 className="text-white">▼</h6>
        <div
          className={`${
            toggle ? "hidden" : "block"
          } absolute bottom-0 left-0 w-full transform translate-y-full`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
