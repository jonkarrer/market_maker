import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
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
            <Icon
              ltImg="/assets/Social/reddit_lt.svg"
              dkImg="/assets/Social/reddit_dk.svg"
              link=""
            />
            <Icon
              ltImg="/assets/Social/twitter_lt.svg"
              dkImg="/assets/Social/twitter_dk.svg"
              link=""
            />
            <Icon
              ltImg="/assets/Social/discord_lt.svg"
              dkImg="/assets/Social/discord_dk.svg"
              link=""
            />
            <Icon
              ltImg="/assets/Social/email_lt.svg"
              dkImg="/assets/Social/email_dk.svg"
              link=""
            />
          </nav>
        </div>

        <nav
          id="links"
          className="wrapper py-4 md:py-10 mx-auto grid grid-cols-2 justify-items-center gap-4 sm:flex sm:items-center sm:justify-between sm:text-sm md:text-base lg:text-lg 2xl:text-1.3vw dark:text-white"
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

interface Icon {
  ltImg: string;
  dkImg: string;
  link: string;
}

const Icon = ({ ltImg, dkImg, link }: Icon) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let windowState = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(windowState);
  });

  return (
    <a href={link}>
      <img
        className="w-6 h-6 md:w-7 md:h-7 2xl:w-9 2xl:h-9"
        src={darkMode ? ltImg : dkImg}
        alt="discord icon"
      />
    </a>
  );
};
