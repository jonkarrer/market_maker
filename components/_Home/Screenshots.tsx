import React from "react";

const Screenshots = () => (
  <section>
    <div className="wrapper grid gap-20 md:gap-40 2xl:gap-60">
      <Container>
        <article className="grid gap-3 md:gap-4 place-content-start 2xl:gap-6">
          <h2 className="text-4xl mb-6 md:mb-10 lg:mb-14">Stocks</h2>
          <BlueFeature text="Curated news feeds" />
          <BlueFeature text="Media sentiment tracking" />
          <BlueFeature text="Charts and modeling tools" />
          <BlueFeature text="Alternative data" />
        </article>
        <img
          className="md:w-100 lg:w-130 2xl:w-140"
          src="/Home/screenshots/placeholder.svg"
          alt=""
        />
      </Container>

      <Container alignment="place-content-end">
        <article className="grid gap-3 place-items-end md:place-content-start md:gap-4 md:order-2 2xl:gap-6">
          <h2 className="text-4xl mb-6 md:mb-10 lg:mb-14">Options</h2>
          <AquaFeature text="Unusual order flow tracking" />
          <AquaFeature text="Statistically probable spreads" />
          <AquaFeature text="Macro indicators" />
          <AquaFeature text="Volatility analysis" />
        </article>
        <img
          className="md:w-100 lg:w-130 2xl:w-140"
          src="/Home/screenshots/placeholder.svg"
          alt=""
        />
      </Container>
    </div>
  </section>
);

export default Screenshots;

const Container = ({
  children,
  alignment,
}: {
  children: React.ReactNode;
  alignment?: string;
}) => (
  <div
    className={`grid gap-10 ${alignment} md:flex md:justify-between md:h-96 lg:h-100 2xl:h-110`}
  >
    {children}
  </div>
);

const BlueFeature = ({ text }: { text: string }) => (
  <p className="border-blue-500 border-2 rounded w-max px-2 text-blue-500 py-1 ">
    {text}
  </p>
);

const AquaFeature = ({ text }: { text: string }) => (
  <p className="border-gradAqua border-2 rounded w-max px-2 text-gradAqua py-1 ">
    {text}
  </p>
);
