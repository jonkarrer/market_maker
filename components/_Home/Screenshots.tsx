const Screenshots = () => (
  <section>
    <div className="wrapper grid gap-20 md:gap-40 lg:gap-60">
      <div className="grid gap-10 md:flex md:justify-between ">
        <div className="grid gap-3 md:gap-4 place-content-start">
          <h2 className="mb-6 md:mb-10 lg:mb-14">Stocks</h2>
          <BlueFeature text="Curated news feeds" />
          <BlueFeature text="Social media sentiment tracking" />
          <BlueFeature text="Charts and modeling tools" />
          <BlueFeature text="Alternative data" />
        </div>
        <img
          className="md:w-100 lg:w-120 2xl:w-140"
          src="/Home/screenshots/placeholder.svg"
          alt=""
        />
      </div>

      <div className="grid gap-10 md:flex md:justify-between">
        <div className="grid gap-3 md:gap-4 md:place-content-start place-items-end md:order-2">
          <h2 className="mb-6 md:mb-10 lg:mb-14">Options</h2>
          <AquaFeature text="Unusual order flow tracking" />
          <AquaFeature text="Statistically probable spreads" />
          <AquaFeature text="Macro indicators" />
          <AquaFeature text="Volatility analysis" />
        </div>
        <img
          className="md:w-100 lg:w-120 2xl:w-140"
          src="/Home/screenshots/placeholder.svg"
          alt=""
        />
      </div>
    </div>
  </section>
);

export default Screenshots;

const BlueFeature = ({ text }: { text: string }) => (
  <p className="border-blue-500 border-2 rounded w-max px-2 text-blue-500 py-1 lg:text-2xl">
    {text}
  </p>
);

const AquaFeature = ({ text }: { text: string }) => (
  <p className="border-gradAqua border-2 rounded w-max px-2 text-gradAqua py-1 lg:text-2xl">
    {text}
  </p>
);
