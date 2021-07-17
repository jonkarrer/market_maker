import React from "react";

export const Splash = (): JSX.Element => (
  <React.Fragment>
    <section id="splash" className="splash h-screen relative overflow-hidden">
      <div className="wrapper h-full flex items-center">
        <article className="text-white grid gap-6 md:gap-10">
          <h1 className="sm:w-96 md:w-180 2xl:w-200 md:leading-tight">
            Make the market you deserve
          </h1>
          <span className="text-xl md:text-3xl 3xl:text-4xl lg:w-3/5 2xl:w-1/2">
            Market alerts, statistics and analytics. Delivered through an
            innovative interface. Made for retail investors.
          </span>
          <button>Get Started</button>
        </article>
      </div>
      <a href="#features">
        <img
          className="absolute bottom-0 right-0 left-0 m-auto cursor-pointer"
          src="/Home/splash_arrow.svg"
          alt="downward arrow"
        />
      </a>
    </section>
  </React.Fragment>
);

export default Splash;
