import { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function MobileHeader() {
  const { user, isLoading } = useUser();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden z-50 fixed top-0 w-screen bg-gray-500 bg-opacity-60">
      <h1
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="text-center text-3xl font-extrabold text-white py-3"
      >
        mml
      </h1>
      <nav
        className={`grid place-items-center gap-8 text-2xl text-white ${
          isMenuOpen ? "h-auto py-10 visible" : "h-0 py-0 invisible "
        }`}
      >
        <a href="/#features">
          <p onClick={() => setMenuOpen(!isMenuOpen)}>Features</p>
        </a>
        <a href="http://learn.marketmakerlite.com/">
          <p onClick={() => setMenuOpen(!isMenuOpen)}>Learn</p>
        </a>
        <Link href="/support">
          <p onClick={() => setMenuOpen(!isMenuOpen)}>Support</p>
        </Link>
        <hr />
        {!isLoading && !user && (
          <>
            <Link href="/api/auth/login">
              <p className="cursor-pointer">Sign In</p>
            </Link>
            <Link href="/api/auth/login">
              <button className="cursor-pointer">Sign Up</button>
            </Link>
          </>
        )}
        {!isLoading && user && (
          <>
            <Link href="/account">
              <img
                className="rounded-full w-12 mr-10 cursor-pointer"
                src={`${user.picture}`}
              />
            </Link>
            <Link href="/dashboard">
              <button>
                <a className="">Dashboard</a>
              </button>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}
