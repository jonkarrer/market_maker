export default function SubHeading() {
  return (
    <header className="h-9 w-full flex items-center bg-subheading">
      <div className="w-4/5 m-auto">
        <Markets />
      </div>
    </header>
  );
}

const Markets = () => (
  <div className="flex items-center space-x-8">
    <a className="text-black dark:text-black font-bold" href="/">
      Home
    </a>
    <a className="text-black dark:text-black" href="/">
      Top Movers
    </a>
    <a className="text-black dark:text-black" href="/">
      Heatmaps
    </a>
    <a className="text-black dark:text-black" href="/">
      Social Sentiment
    </a>
    <a className="text-black dark:text-black" href="/">
      International Markets
    </a>
  </div>
);
