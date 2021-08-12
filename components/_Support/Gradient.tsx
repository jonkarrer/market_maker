const Gradient = ({ pageName }: { pageName: string }) => (
  <div className="bg-splash h-44 md:h-48 2xl:h-52 text-white">
    <div className="wrapper h-full pb-6 flex items-end md:items-center md:pb-0">
      <h1 className="font-semibold">{pageName}</h1>
    </div>
  </div>
);

export default Gradient;
