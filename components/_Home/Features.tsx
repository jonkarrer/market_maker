const Features = () => (
  <section id="features" className="grid gap-16 text-center md:gap-32">
    <h2>Simplify your market research</h2>
    <div className="wrapper grid gap-16 md:flex md:gap-0 md:justify-between">
      <div className="md:border-r-1px">
        <Item
          img="/Home/features/flag.svg"
          feature="Actionable notifications"
          info="Timely, insightful, high-quality alerts delivered directly."
        />
      </div>
      <div className="md:border-r-1px md:border-l-1px">
        <Item
          img="/Home/features/news.svg"
          feature="Curated news feed"
          info="News wires and social media, all in one place."
        />
      </div>
      <div className="md:border-l-1px">
        <Item
          img="/Home/features/options.svg"
          feature="Advanced analytics"
          info="Interactive charts. Custom models. Learn the Greeks."
        />
      </div>
    </div>
  </section>
);

export default Features;

interface Item {
  img: string;
  feature: string;
  info: string;
}

const Item = ({ img, feature, info }: Item) => (
  <article className="grid place-items-center gap-4 md:mx-10 md:gap-7 2xl:mx-12 2xl:gap-9">
    <img className="h-24 2xl:h-28 m-auto" src={img} alt="icon" />
    <h4 className="lg:w-44 2xl:w-48 text-center">{feature}</h4>
    <p className="w-60 md:w-auto md:h-32 2xl:h-40 text-center">{info}</p>
  </article>
);
