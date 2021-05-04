import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="mobile-header" className="sm:hidden font-primary">
        <a
          id="logo-container"
          className="w-8 absolute top-5 left-5 z-10"
          href="#"
        >
          <img src="/logo.svg" alt="logo" />
        </a>
        <div
          id="circle-dot-dropdown"
          onClickCapture={() => setOpen(true)}
          className={`absolute transition-all z-20 bg-white
       ${
         open
           ? `top-0 right-0 w-screen h-screen`
           : `top-5 right-5 w-8 h-8 rounded-full`
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
              className="text-mobile-h space-y-8 list-none font-secondary font-semibold"
            >
              <Link href="/products">
                <li>Products</li>
              </Link>
              <Link href="/learn">
                <li>Learn</li>
              </Link>
              <Link href="/support/support">
                <li>Support</li>
              </Link>
            </ul>
            <div className="absolute bottom-28 font-semibold w-full h-1/12 flex justify-around ite ">
              <Link href="sign-up">Sign Up</Link>
              <Link href="sign-in">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      <header
        id="desktop-header"
        className="hidden sm:flex w-5/6 absolute font-semibold items-center justify-between top-3 mx-std z-10 text-white"
      >
        <nav id="links" className="flex items-center justify-start">
          <a className="mr-9" href="#">
            <img className="w-10 min-w-full" src="/logo.svg" alt="" />
          </a>
          <Link href="/products">
            <a className="mr-9" href="">
              Products
            </a>
          </Link>
          <Link href="/learn">
            <a className="mr-9" href="">
              Learn
            </a>
          </Link>

          <Link href="/support/support">Support</Link>
        </nav>
        <nav id="sign-up" className="flex items-center justify-end w-1/2">
          <a className="mr-10" href="">
            Sign In
          </a>
          <a href="">
            <button className="btn sm:px-4 sm:py-2 hover:bg-btn-hover">
              Sign Up
            </button>
          </a>
        </nav>
      </header>
    </>
  );
}
