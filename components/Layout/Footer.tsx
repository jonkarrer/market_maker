import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
const Footer = () => {
  const { user } = useUser();
  return (
    <div>
      <footer className="flex flex-col items-center justify-center mt-10">
        <div className="wrapper grid place-content-center gap-5 py-4 md:py-10 md:gap-0 md:grid-flow-col md:place-content-between border-b-4">
          <h4 className="text-xl md:text-2xl font-medium 2xl:text-3xl 3xl:text-4xl text-center md:text-left">
            Market Maker Lite
          </h4>
          <nav className="flex space-x-8 items-center m-auto">
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
          className="wrapper py-4 md:py-10 mx-auto grid grid-cols-2 justify-items-center gap-4 sm:flex sm:items-center sm:justify-between sm:text-sm md:text-base lg:text-lg 2xl:text-1.3vw"
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
