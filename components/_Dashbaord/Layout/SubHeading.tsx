export default function SubHeading() {
  return (
    <header className="h-9 w-full flex items-center bg-subheading">
      <div className="lg:w-4/5 xl:w-3/4 2xl:w-2/3 m-auto flex justify-between">
        <Markets />

        <div className="hidden lg:grid grid-flow-col gap-4 text-sm">
          <div className="gradient-box-small z-10">
            <span className="flex justify-evenly bg-subheading rounded w-24 z-20">
              <img src="/Dashboard/Header/lock.svg" alt="" />{" "}
              <a className="text_gradient_splash">Arrange</a>
            </span>
          </div>
          <div className="gradient-box-small z-10">
            <span className="flex justify-evenly bg-subheading rounded w-24 z-20">
              <img src="/Dashboard/Header/export.svg" alt="" />{" "}
              <a className="text_gradient_splash">Export</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

const Markets = () => {
  let style = "text-black dark:text-black text-xs xl:text-base 2xl:text-xl";

  return (
    <div className="flex items-center space-x-2 lg:space-x-8">
      <a className={style} href="/">
        Home
      </a>
      <a className={style} href="/">
        Top Movers
      </a>
      <a className={style} href="/">
        Heatmaps
      </a>
      <a className={style} href="/">
        Social Sentiment
      </a>
      <a className={style} href="/">
        International Markets
      </a>
    </div>
  );
};
