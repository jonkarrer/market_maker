const Splash = (): JSX.Element => (
  <div className="m-auto h-screen bg-splash relative overflow-hidden md:max-w-screen-3xl 2xl:max-h-3xl 2xl:min-h-lg ">
    <div className="wrapper h-full flex items-center">
      <article className="text-white grid gap-7 md:gap-10 2xl:gap-11">
        <h1 className="sm:w-96 md:w-120 lg:w-140 2xl:w-160 lg:leading-tight">
          Make the market you deserve
        </h1>
        <span className="text-xl max-w-sm md:max-w-none md:text-xl md:w-96 lg:text-2xl lg:w-110 2xl:text-3xl 2xl:w-130">
          Market alerts, statistics and analytics. Delivered through an
          innovative interface. Made for retail investors.
        </span>
        <button className="border-2 border-white w-40 md:w-52 lg:text-2xl lg:py-3 2xl:w-60">
          <a href="http://docs.marketmakerlite.com/">Get Started</a>
        </button>
      </article>
    </div>
    <a href="#features">
      <img
        className="absolute bottom-0 right-0 left-0 m-auto cursor-pointer z-10 hidden sm:block"
        src="/Home/splash_arrow.svg"
        alt="downward arrow"
      />
    </a>

    {/** The style for this is in styles/components */}
    <div className="stripes"></div>
  </div>
);

export default Splash;
