import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Market Maker</title>
      </Head>

      {/* Page One */}
      <section className="relative h-screen w-screen overflow-hidden grid grid-row-2 bg-gray-400 sm:flex">
        <header className="w-5/6 absolute flex items-center justify-between top-3 mx-std">
          <nav id="links" className="flex items-center justify-start">
            <a className="mr-10" href="#">
              <img className="w-10" src="./assets/piggy.svg" alt="" />
            </a>
            <a className="mr-10" href="">
              Products
            </a>
            <a className="mr-10" href="">
              Learn
            </a>
            <a className="mr-1" href="">
              Support
            </a>
          </nav>
          <nav id="sign-up" className="flex items-center justify-end w-1/2">
            <a className="mr-10" href="">
              Sign In
            </a>
            <a href="">
              <button className="btn">Sign Up</button>
            </a>
          </nav>
        </header>
        <div className="shapeHeader">
          <div className="circle circle--1"></div>
          <div className="circle circle--2"></div>
          <div className="circle circle--3"></div>
          <div className="circle circle--4"></div>
        </div>
        <div className="mx-std grid sm:mx-0 sm:mr-std sm:order-2">
          <img
            className="m-auto w-3/4 sm:w-full"
            src="assets/page_one.svg"
            alt="stock image"
          />
        </div>
        <article className="flex flex-col mx-std space-y-5 lg:space-y-10 sm:mx-0 sm:ml-std sm:order-1 sm:justify-center">
          <h1 className="text-mobile-h font-semibold sm:text-5vw sm:w-11/12 md:text-6vw xl:text-6vw">
            The market data we deserve
          </h1>
          <div className="space-y-5 xl:space-y-8">
            <p className="text-mobile-p sm:text-sm md:text-base lg:text-lg xl:text-2xl sm:w-7/12">
              Trade like never before - visualized data, insights, and
              statistics to make sense of complicated financial markets
            </p>
            <div className="w-full flex justify-center sm:block">
              <button className="btn text-mobile-p px-6 py-3 sm:text-sm lg:text-base xl:text-xl">
                Get Early Access
              </button>
            </div>
          </div>
        </article>
      </section>
      {/* Page Two */}
      <div id="banner-butt-container">
        <button className="btn" id="banner-button">
          Make a market today! Invite a friend and recieve $10 off each month
          they subscribe.* Learn More {">"}
        </button>
      </div>
      <section className="page-two">
        <h1>Make Sense of Complicated Markets</h1>
        <p className="summary">
          Trading is difficult. That's why we created a financial information
          platform built for everyone. Get the coverage you need, delivered
          through an elegant interface.
        </p>
        {/* Page Three */}
        <div className="info-blocks">
          <div>
            <img src="./assets/logo.svg" alt="4 square icon" />
            <h3>Be a Market Maker</h3>
            <p>
              Easily sign up in the app, and keep your number and phone or
              change both. No matter what, you'll get unlimited data, messages,
              and minutes for one (really) low price.
            </p>
          </div>
          <div>
            <img src="./assets/logo.svg" alt="4 square icon" />
            <h3>Experience our Service</h3>
            <p>
              After activating your SIM in the app, you're ready to experience
              the power of our network. We know getting Verizon service at a
              fraction of the cost might seem to good to be true, but it is
              true.
            </p>
          </div>
          <div>
            <img src="./assets/logo.svg" alt="4 square icon" />
            <h3>Bring some Friends</h3>
            <p>
              Since trading only gets better with friends, it makes sense to
              give you several ways to save when you enjoy Visible with them.
              Join a party and cut your bill to $25/mo, or something else.
            </p>
          </div>
        </div>
        {/* Two Price Cards*/}
        <div className="price-cards">
          <div>
            <h2>Free</h2>
            <p>Try out the platform for free</p>
            <h2>$0 / mo</h2>
            <ul>
              <li>
                <img src="./assets/checkmark.svg" alt="checkmark icon" />
                Twitter Alerts(15 min delay)
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
          <div>
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
      <section className="page-three">
        <div className="panel">
          <img src="./assets/logo.svg" alt="4 circles logo" />
          <article>
            <h2>Options</h2>
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
        <div className="panel">
          <article>
            <h2>Stocks</h2>
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
          <img src="./assets/logo.svg" alt="4 circles logo" />
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
