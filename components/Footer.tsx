const Footer = () => (
  <div>
    <footer className="my-10% mx-std sm:m-auto sm:my-8 sm:w-11/12 sm:max-w-screen-2xl lg:w-3/4 lg:text-xl xl:w-3/5 lg:mt-8%">
      <nav
        id="links"
        className="grid grid-cols-2 gap-3 w-11/12 sm:w-full pb-3 mx-auto sm:flex sm:justify-around sm:text-sm md:text-base lg:text-lg"
      >
        <a>MML C 2021</a>
        <a href="">About Us</a>
        <a href="">Support</a>
        <a href="">Privacy {"&"} Legal</a>
        <a href="">Disclosures</a>
        <a href="">Sitemap</a>
        <a href="">Pricing</a>
        <a>Sign In</a>
        <a>Sign Up</a>
      </nav>
      <nav
        id="home_nav-icons"
        className="flex justify-around my-5 sm:justify-evenly sm:w-2/3 mx-auto"
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

export default Footer;
