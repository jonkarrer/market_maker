interface IBlock {
  q: string;
  year: string;
}

const Block = ({ q, year }: IBlock) => (
  <div className=" shadow-supp-boxes h-24 w-72 lg:h-28 lg:w-96 text-center grid place-content-center space-y-3 bg-white border-blue-border border-solid border-1px transform translate-y-1/2 absolute rounded">
    <h2 className="text-blue-border font-semibold underline">
      {q} {year}
    </h2>
    <div className="border-blue-border border-solid border-1px text-blue-border w-60 lg:w-80 rounded">
      0%
    </div>
  </div>
);

export default Block;
