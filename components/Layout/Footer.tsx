import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
const Footer = () => {
  const { user } = useUser();
  return (
    <div>
      <footer className="h-72 sm:h-64 flex flex-col items-center justify-center bg-foot">
        <div className="wrapper flex items-center justify-between h-32 sm:h-32 border-b-4">
          <h2 className="text-xl lg:text-2xl">Market Maker Lite</h2>
          <nav className="flex space-x-8 items-center">
            <a href="">
              <img src="/assets/Social/reddit-dk.svg" alt="reddit icon" />
            </a>
            <a href="">
              <img src="/assets/Social/twitter-dk.svg" alt="twitter icon" />
            </a>
            <a href="">
              <img src="/assets/Social/Discord-dk.svg" alt="discord icon" />
            </a>
            <a href="">
              <img src="/assets/Social/email-dk.svg" alt="email icon" />
            </a>
          </nav>
        </div>

        <nav
          id="links"
          className=" w-10/12 lg:w-9/12 m-auto max-w-screen-3xl py-10 sm:py-0 mx-auto grid grid-cols-2 justify-items-center gap-4 sm:h-32 sm:flex sm:items-center sm:justify-between sm:w-5/6 sm:text-sm md:text-base lg:text-lg 2xl:text-1.3vw"
        >
          <a>MML C 2021</a>
          <a href="">About</a>
          <a href="">Support</a>
          <a href="">Terms</a>
          <a href="">Pricing</a>
          <a href="">Sitemap</a>
          <div>
            {!user ? (
              <Link href="/api/auth/login">Sign In</Link>
            ) : (
              <Link href="/account">Account</Link>
            )}
          </div>
          <div>
            {!user ? (
              <Link href="/api/auth/login">Sign Up</Link>
            ) : (
              <Link href="/dashboard">Dashboard</Link>
            )}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
