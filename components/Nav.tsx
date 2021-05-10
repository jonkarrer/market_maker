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
                <li onClick={() => setOpen(false)}>Products</li>
              </Link>
              <Link href="/learn">
                <li onClick={() => setOpen(false)}>Learn</li>
              </Link>
              <Link href="/support/support">
                <li onClick={() => setOpen(false)}>Support</li>
              </Link>
            </ul>
            <div className="absolute bottom-28 font-semibold w-full h-1/12 flex justify-around ite ">
              <Link href="/sign-up">Sign Up</Link>
              <Link href="/sign-in">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      <header
        id="desktop-header"
        className="hidden sm:flex w-5/6 max-w-screen-2xl absolute font-semibold items-center justify-between top-3 mx-std z-10 text-white"
      >
        <nav id="links" className="flex items-center justify-start md:text-xl">
          <Link href="/">
            <a className="w-10 mr-9" href="#">
              <img className="h-full" src="/logo.svg" alt="" />
            </a>
          </Link>
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
        <nav
          id="sign-up"
          className="flex items-center justify-end w-1/2 md:text-xl"
        >
          <a className="mr-10">Sign In</a>
          <a>
            <button className="btn md:text-xl sm:px-4 sm:py-2 hover:bg-btn-hover">
              Sign Up
            </button>
          </a>
        </nav>
      </header>
    </>
  );
}
