import React, { useState } from "react";
import Link from "next/link";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden flex justify-between mx-3 my-3 font-primary">
      <a id="logo-container" href="#">
        <img
          className="bg-black object-fill w-8"
          src="./assets/logo.svg"
          alt="logo"
        />
      </a>
      <div
        id="circle-dot-dropdown"
        onClickCapture={() => setOpen(true)}
        className={` absolute transition-all z-20 bg-black
       ${
         open
           ? `top-0 right-0 w-screen h-screen absolute`
           : `top-2 right-3 w-10 h-10 rounded-full`
       } overflow-hidden`}
      >
        <div
          id="dropdown-content-container"
          className={`${
            open ? `text-mobile-h space-y-8 list-none` : `hidden`
          } bg-white relative flex justify-center items-center w-full h-full `}
        >
          <div
            id="exit-button"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-mobile-h"
          >
            X
          </div>
          <ul
            id="dropdown-content"
            className="text-mobile-h space-y-8 list-none font-secondary"
          >
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/learn">
              <li>Learn</li>
            </Link>
            <Link href="/support">
              <li>Support</li>
            </Link>
          </ul>
          <div className="absolute bottom-28 w-full h-1/12 flex justify-around ite ">
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/sign-up">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;

//Need to add link destinations

//Need to test
