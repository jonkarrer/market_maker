import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
const Footer = () => {
  const { user, isLoading } = useUser();
  return (
    <div>
      <footer className="my-10% mx-std sm:m-auto sm:my-8 sm:w-11/12 lg:w-3/4 lg:mt-8% lg:text-xl xl:w-3/5 2xl:w-4/5 2xl:my-20">
        <nav
          id="links"
          className="grid grid-cols-2 gap-3 w-11/12 sm:w-full pb-3 mx-auto sm:flex sm:justify-around sm:text-sm md:text-base lg:text-lg 2xl:text-1.3vw"
        >
          <a>MML C 2021</a>
          <a href="">About Us</a>
          <a href="">Support</a>
          <a href="">Legal</a>
          <a href="">Disclosures</a>
          <a href="">Sitemap</a>
          <a href="">Pricing</a>
          <a>
            {!user ? (
              <Link href="api/auth/login">Sign In</Link>
            ) : (
              <Link href="/account">Account</Link>
            )}
          </a>
          <a>
            {!user ? (
              <Link href="api/auth/login">Sign Up</Link>
            ) : (
              <Link href="/dashboard">Dashboard</Link>
            )}
          </a>
        </nav>
        <nav
          id="home_nav-icons"
          className="flex justify-around my-5 sm:justify-evenly sm:w-2/3 mx-auto 2xl:my-12"
        >
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
            <img src="/assets/Social/IG-dk.svg" alt="instagram icon" />
          </a>
          <a href="">
            <img src="/assets/Social/pinterest-dk.svg" alt="pinterest icon" />
          </a>
          <a href="">
            <img src="/assets/Social/youtube-dk.svg" alt="youtube icon" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
