import React from "react";
import { Children } from "utils/interfaces";

const Screenshots = () => (
  <section>
    <div className="wrapper grid gap-20 md:gap-40 2xl:gap-60">
      <Container img="/Home/screenshots/placeholder.svg">
        <article className="grid gap-3 md:gap-4 place-content-start 2xl:gap-6">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl mb-6 md:mb-10 lg:mb-14">
            Stocks
          </h2>
          <BlueFeature text="Curated news feeds" />
          <BlueFeature text="Media sentiment tracking" />
          <BlueFeature text="Charts and modeling tools" />
          <BlueFeature text="Alternative data" />
        </article>
      </Container>

      <Container
        alignment="place-content-end"
        img="/Home/screenshots/placeholder.svg"
      >
        <article className="grid gap-3 place-items-end md:place-content-start md:gap-4 md:order-2 2xl:gap-6">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl mb-6 md:mb-10 lg:mb-14">
            Options
          </h2>
          <AquaFeature text="Unusual order flow tracking" />
          <AquaFeature text="Statistically probable spreads" />
          <AquaFeature text="Macro indicators" />
          <AquaFeature text="Volatility analysis" />
        </article>
      </Container>
    </div>
  </section>
);

export default Screenshots;

interface IContainer extends Children {
  alignment?: string;
  img: string;
}

const Container = ({ children, alignment, img }: IContainer) => (
  <div
    className={`grid gap-10 ${alignment} md:flex md:justify-between md:h-96 lg:h-100 2xl:h-110`}
  >
    {children}
    <img className="md:w-100 lg:w-130 2xl:w-160" src={img} alt="screenshot" />
  </div>
);

const BlueFeature = ({ text }: { text: string }) => (
  <p className="border-blue-500 border-2 rounded w-max px-2 text-blue-500 py-1 2xl:text-3xl">
    {text}
  </p>
);

const AquaFeature = ({ text }: { text: string }) => (
  <p className="border-gradAqua border-2 rounded w-max px-2 text-gradAqua py-1 2xl:text-3xl ">
    {text}
  </p>
);
