import React, { useState } from "react";
import Link from "next/link";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden font-primary">
      <a className="w-8 absolute top-5 left-5" href="#">
        <img className="w" src="./assets/piggy.svg" alt="" />
      </a>
      <div
        onClickCapture={() => setOpen(true)}
        className={`absolute transition-all z-20 bg-white
       ${
         open
           ? `top-0 right-0 w-screen h-screen`
           : `top-5 right-5 w-8 h-8 rounded-full`
       } overflow-hidden`}
      >
        <div
          className={`${
            open ? `text-mobile-h space-y-8 list-none` : `hidden`
          } bg-white relative flex justify-center items-center w-full h-full `}
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-mobile-h"
          >
            X
          </div>
          <ul className="text-mobile-h space-y-8 list-none">
            <Link href="">
              <li>Products</li>
            </Link>
            <Link href="">
              <li>Learn</li>
            </Link>
            <Link href="">
              <li>Support</li>
            </Link>
          </ul>
          <div className="absolute bottom-8 w-full h-1/12 flex justify-around ite ">
            <Link href="">Sign Up</Link>
            <Link href="">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
