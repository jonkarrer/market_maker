import Head from "next/head";
import MobileHeader from "../components/MobileHeader";
export default function Home() {
  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap`}
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap`}
        />
        <title>Market Maker</title>
      </Head>

      {/* Page One */}
      <section className="relative h-screen w-screen overflow-hidden grid grid-row-2 sm:flex sm:items-center">
        <MobileHeader />
        <header className="hidden w-5/6 absolute sm:flex items-center justify-between top-3 mx-std z-10 text-white">
          <nav id="links" className="flex items-center justify-start">
            <a className="mr-9" href="#">
              <img className="w-10 min-w-full" src="./assets/logo.svg" alt="" />
            </a>
            <a className="mr-9" href="">
              Products
            </a>
            <a className="mr-9" href="">
              Learn
            </a>
            <a href="">Support</a>
          </nav>
          <nav id="sign-up" className="flex items-center justify-end w-1/2">
            <a className="mr-10" href="">
              Sign In
            </a>
            <a href="">
              <button className="btn sm:px-4 sm:py-2 hover:bg-btn-hover">
                Sign Up
              </button>
            </a>
          </nav>
        </header>
        <div
          id="gradient-background"
          className="h-screen w-screen absolute scale-150 rotate-45 translate-y-10 backdrop-filter backdrop-blur-3xl backdrop-saturate-150"
        >
          <div className="circle h-5/6 w-5/6 bg-circle-1 -top-20 -left-1/3 opacity-90"></div>
          <div className="circle h-full w-5/6 bg-circle-2 -top-1/3 -right-20 opacity-80"></div>
          <div className="circle h-full w-11/12 bg-circle-3 -bottom-1/2 -left-1/3 opacity-80"></div>
          <div className="circle h-full w-5/6 bg-circle-4 -bottom-1/4 -right-1/4 opacity-90"></div>
        </div>
        <div
          id="home-image"
          className="mx-std flex items-center justify-center sm:mx-0 sm:mr-std sm:w-2/5 sm:order-2 z-10"
        >
          <img
            className="w-2/3 sm:w-full xl:max-w-7xl"
            src="assets/page_one.svg"
            alt="stock image"
          />
        </div>
        <article className="z-10 text-white flex flex-col mx-std sm:mx-0 sm:ml-std sm:order-1 sm:justify-center sm:w-2/3">
          <h1 className="text-mobile-h font-normal leading-none sm:text-desktop-h sm:mr-5">
            The market data we deserve
          </h1>
          <div className="space-y-6 md:space-y-8 xl:space-y-12">
            <p className="text-mobile-p mt-10% sm:text-desktop-p sm:mr-20% sm:mt-12%">
              Trade like never before - visualized data, insights, and
              statistics to make sense of complicated financial markets
            </p>
            <div className="w-full flex justify-center sm:block">
              <button className="btn text-mobile-p px-8 py-3 sm:px-4 sm:py-2 sm:text-1.5vw hover:bg-btn-hover">
                Get Early Access
              </button>
            </div>
          </div>
        </article>
      </section>
      {/* Page Two */}
      <div
        id="banner-butt-container"
        className="w-11/12 sm:w-5/6 mx-auto my-10% sm:my-10 flex justify-center"
      >
        <button
          id="banner-button"
          className="btn shadow-md bg-lt-blue w-max text-3vw sm:text-1.5vw py-3 px-8 sm:py-5 sm:px-14"
        >
          Make a market today! Invite a friend and recieve $10 off each month
          they subscribe.* Learn More {">"}
        </button>
      </div>
      <section className="h-auto sm:mx-std sm:my-16">
        <h1 className="text-center text-mobile-h sm:text-desktop-h">
          Make Sense of Complicated Markets
        </h1>
        <p className="text-mobile-p sm:text-desktop-p mx-std my-10% sm:mx-6% sm:my-14">
          Trading is difficult. That's why we created a financial information
          platform built for everyone. Get the coverage you need, delivered
          through an elegant interface.
        </p>
        {/* Three Info Blocks */}
        <div
          id="blocks-container"
          className="my-20% sm:my-10% grid gap-12 text-center sm:flex sm:justify-start sm:items-start"
        >
          <div className="info-block">
            <img src="./assets/four-circles.svg" alt="4 square icon" />
            <h3>Be a Market Maker</h3>
            <p>
              Easily sign up in the app, and keep your number and phone or
              change both. No matter what, you'll get unlimited data, messages,
              and minutes for one (really) low price.
            </p>
          </div>
          <div className="info-block">
            <img src="./assets/four-circles.svg" alt="4 square icon" />
            <h3>Experience our Service</h3>
            <p>
              After activating your SIM in the app, you're ready to experience
              the power of our network. We know getting Verizon service at a
              fraction of the cost might seem to good to be true, but it is
              true.
            </p>
          </div>
          <div className="info-block">
            <img src="./assets/four-circles.svg" alt="4 square icon" />
            <h3>Bring some Friends</h3>
            <p>
              Since trading only gets better with friends, it makes sense to
              give you several ways to save when you enjoy Visible with them.
              Join a party and cut your bill to $25/mo, or something else.
            </p>
          </div>
        </div>
        {/* Two Price Cards*/}
        <div
          id="price-cards"
          className="grid gap-10 justify-items-center w-11/12 sm:w-auto mx-auto sm:flex sm:justify-between border-blue-500 border-solid border-2"
        >
          <div className="price-card">
            <h2>Free</h2>
            <p>Try out the platform for free</p>
            <h2>$0 / mo</h2>
            <ul>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Twitter Alerts (15 min delay)
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Portfolio Tracking
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Fun Financial Literacy Guides
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Public Discord
              </li>
            </ul>

            <button className="btn">Get Started</button>
          </div>
          <div className="price-card">
            <h2>Premium</h2>
            <p>Ready to play in the big leauges?</p>
            <h2>$40 / mo</h2>
            <ul>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                All Free Features
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Instant Alerts
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Options Flow and Dark Pool Tracking
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Real-Time Charts with Proprietary Overlays
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Social Media & Sentiment Tracking
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Earn Rewards with Real Value
              </li>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Early Access to New Features
              </li>
            </ul>
            <button className="btn">Get Premium</button>
          </div>
        </div>
      </section>
      {/* Page Three */}
      <section className="sm:flex sm:justify-evenly items-center mx-std">
        <div
          id="left-panel"
          className="flex flex-col items-center my-20% sm:my-8% sm:space-y-12"
        >
          <img
            className="w-1/2 my-10% sm:my-0"
            src="./assets/four-circles.svg"
            alt="4 circles logo"
          />
          <article className="space-y-5">
            <h2 className="text-mobile-h sm:text-2vw">Options</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur! <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur!
            </p>
          </article>
        </div>
        <div
          id="right-panel"
          className="flex flex-col items-center my-20% sm:my-8% sm:space-y-12"
        >
          <article className="space-y-5 order-2 sm:order-1">
            <h2 className="text-mobile-h sm:text-2vw">Stocks</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur! <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, mollitia eaque. Neque animi perferendis, ducimus
              veritatis harum mollitia iste, magni nam unde ut error. Enim culpa
              quisquam impedit unde pariatur!
            </p>
          </article>
          <img
            className="w-1/2 my-10% sm:my-0 order-1"
            src="./assets/four-circles.svg"
            alt="4 circles logo"
          />
        </div>
      </section>
      <section className="bottom-banner">
        <h1># made by friends with a passion for markets</h1>
        <p>
          Our team has a diverse background of academic and industry experiences
          including finance, engineering, and media. We aren't paid by in large
          by the banks, we don't sell your information, we stay commited to the
          average investor
        </p>
      </section>
      <footer>
        <nav>
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
        <nav className="icons">
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
}
