import React from "react";

const Splash = (): JSX.Element => (
  <React.Fragment>
    <div className="md:max-w-screen-3xl 2xl:max-h-3xl 2xl:min-h-lg m-auto h-screen bg-splash relative overflow-hidden">
      <div className="wrapper h-full flex items-center">
        <article className="text-white grid gap-7 md:gap-10 2xl:gap-11">
          <h1 className="sm:w-96 md:w-120 lg:w-140 2xl:w-160 lg:leading-tight 3xl:w-200">
            Make the market you deserve
          </h1>
          <span className="text-xl max-w-sm md:max-w-none md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl md:w-96 lg:w-110 2xl:w-130 3xl:w-150">
            Market alerts, statistics and analytics. Delivered through an
            innovative interface. Made for retail investors.
          </span>
          <button>Get Started</button>
        </article>
      </div>
      <a href="#features">
        <img
          className="absolute bottom-0 right-0 left-0 m-auto cursor-pointer z-10 hidden sm:block"
          src="/Home/splash_arrow.svg"
          alt="downward arrow"
        />
      </a>
      <div className="stripes"></div>
    </div>
  </React.Fragment>
);

export default Splash;
