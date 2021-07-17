import React from "react";

const Features = () => (
  <React.Fragment>
    <section className="grid gap-16 md:gap-40" id="features">
      <h2 className="text-center">Simplify your market research</h2>
      <div className="wrapper grid gap-16 md:grid-flow-col md:gap-0">
        <div className="border-r-1px">
          <Item
            img="/Home/features/flag.svg"
            feature="Actionable notifications"
            info="Timely, insightful, high-quality alerts delivered directly to you."
          />
        </div>
        <div className="border-r-1px border-l-1px">
          <Item
            img="/Home/features/news.svg"
            feature="Curated news feed"
            info="News wires and social media, all in one place."
          />
        </div>
        <div className="border-l-1px">
          <Item
            img="/Home/features/options.svg"
            feature="Advanced analytics"
            info="Interactive charts. Custom models. Comprehend the Greeks."
          />
        </div>
      </div>
    </section>
  </React.Fragment>
);

interface Item {
  img: string;
  feature: string;
  info: string;
}
export default Features;

const Item = ({ img, feature, info }: Item) => (
  <article className="grid place-items-center gap-6 md:px-10">
    <img className="h-24" src={img} alt="icon" />
    <h4 className="md:w-44 2xl:w-44 text-center">{feature}</h4>
    <p className="w-72 md:w-auto md:h-32 2xl:h-40 lg:text-center">{info}</p>
  </article>
);
