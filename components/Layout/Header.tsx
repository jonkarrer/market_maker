import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";

export default function Nav() {
  const { user, isLoading } = useUser();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const homePageRoute = router.pathname;
  return (
    <div>
      <header
        className={`${
          homePageRoute === "/"
            ? "md:absolute"
            : "md:static md:py-4 bg-white dark:bg-black"
        } w-full md:top-3 z-10 md:text-xl 2xl:text-2xl`}
      >
        <div
          className={`hidden md:flex wrapper ${
            homePageRoute === "/" ? "text-white" : "text-black dark:text-white"
          }  items-center justify-between`}
        >
          <nav className="grid grid-flow-col md:space-x-8 lg:space-x-16 ">
            <Link href="/">mml</Link>
            <Link href="/features">Features</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/support">Support</Link>
          </nav>
          <div className="flex items-center">
            {!isLoading && !user && (
              <>
                <Link href="/api/auth/login">
                  <span className="cursor-pointer">Sign In</span>
                </Link>
                <Link href="/api/auth/login">
                  <span className="cursor-pointer border-2 border-solid border-white rounded-sm px-4 py-1">
                    Sign Up
                  </span>
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
                  <button className="md:text-lg backdrop-filter backdrop-blur-3xl backdrop-contrast-75 border-none">
                    Dashboard
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/** Mobile Menu */}
        <div className="md:hidden fixed top-0 w-screen bg-gray-500 bg-opacity-50">
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
            <Link href="/features">Features</Link>
            <Link href="/learn">Learn</Link>
            <Link href="/support">Support</Link>
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
      </header>
    </div>
  );
}
