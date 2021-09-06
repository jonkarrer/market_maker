export default function SubHeading() {
  return (
    <header className="h-9 w-full flex items-center bg-subheading">
      <div className="lg:w-3/4 xl:w-2/3 m-auto">
        <Markets />
      </div>
    </header>
  );
}

const Markets = () => {
  let style = "text-black dark:text-black text-xs xl:text-base 2xl:text-xl";

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
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
