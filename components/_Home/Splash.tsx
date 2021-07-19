import React from "react";

const Splash = (): JSX.Element => (
  <React.Fragment>
    <div className="md:max-w-screen-3xl m-auto h-screen bg-splash relative overflow-hidden">
      <div className="wrapper h-full flex items-center">
        <article className="text-white grid gap-7 md:gap-10 2xl:gap-11">
          <h1 className="sm:w-96 md:w-120 lg:w-140 2xl:w-160 lg:leading-tight 3xl:w-200">
            Make the market you deserve
          </h1>
          <span className="text-xl md:text-2xl lg:text-3xl 3xl:text-4xl md:w-3/5 2xl:w-1/2">
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
    </div>
  </React.Fragment>
);

export default Splash;
