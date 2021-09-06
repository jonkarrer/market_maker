import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const homePageRoute = router.pathname;

  return (
    <div>
      <header
        className={`${
          homePageRoute === "/"
            ? "md:absolute"
            : "md:static md:py-4 bg-white dark:bg-black"
        } w-full md:top-3 z-50 md:text-xl 2xl:text-2xl`}
      >
        <div
          className={`hidden md:flex wrapper ${
            homePageRoute === "/" ? "text-white" : "text-black dark:text-white"
          }  items-center justify-between`}
        >
          <nav className="grid grid-flow-col md:space-x-8 lg:space-x-16 ">
            <Link href="/">mml</Link>
            <a href="/#features">Features</a>
            <a href="http://learn.marketmakerlite.com/">Learn</a>
            <Link href="/support">Support</Link>
          </nav>
          <div className="flex items-center md:space-x-8 ">
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
                    className="rounded-full w-12 cursor-pointer"
                    src={`${user.picture}`}
                  />
                </Link>
                <Link href="/dashboard/market">
                  <button className="md:text-lg backdrop-filter backdrop-blur-3xl backdrop-contrast-75 border-none">
                    Dashboard
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        <MobileHeader />
      </header>
    </div>
  );
}
