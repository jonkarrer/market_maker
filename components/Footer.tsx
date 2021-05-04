const Footer = () => (
  <div>
    <footer className="my-12% m-auto sm:my-8 sm:w-11/12 lg:w-4/5 lg:text-xl lg:my-10 ">
      <nav
        id="links"
        className="grid grid-cols-2 gap-3 w-11/12 pb-3 mx-auto sm:flex sm:justify-around sm:text-1.5vw"
      >
        <a>MML C 2021</a>
        <a href="">About Us</a>
        <a href="">Support</a>
        <a href="">Privacy {"&"} Legal</a>
        <a href="">Disclosures</a>
        <a href="">Sitemap</a>
        <a href="">Pricing</a>
        <a href="">Log in</a>
        <a href="">Sign in</a>
      </nav>
      <nav
        id="home_nav-icons"
        className="flex justify-around my-8 sm:justify-evenly sm:w-2/3 mx-auto"
      >
        <a href="">
          <img src="./assets/Social/reddit-dk.svg" alt="reddit icon" />
        </a>
        <a href="">
          <img src="./assets/Social/twitter-dk.svg" alt="twitter icon" />
        </a>
        <a href="">
          <img src="./assets/Social/Discord-dk.svg" alt="discord icon" />
        </a>
        <a href="">
          <img src="./assets/Social/IG-dk.svg" alt="instagram icon" />
        </a>
        <a href="">
          <img src="./assets/Social/pinterest-dk.svg" alt="pinterest icon" />
        </a>
        <a href="">
          <img src="./assets/Social/youtube-dk.svg" alt="youtube icon" />
        </a>
      </nav>
    </footer>
  </div>
);

export default Footer;
