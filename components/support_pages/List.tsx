interface IList {
  children: React.ReactNode;
  title: string;
}
const List = ({ children, title }: IList) => (
  <div className="grid justify-items-center gap-5 sm:w-36 md:w-40 lg:w-52 xl:w-64">
    <h2 className="grid place-content-center text-8vw w-3/4 sm:text-lg lg:text-2xl xl:text-3xl sm:h-10 sm:w-28 md:w-32 lg:w-40 xl:w-5/6 xl:h-12 border-blue-border border-solid border-1px rounded-sm">
      {title}
    </h2>
    <ul className="list-disc text-mobile-p sm:text-sm lg:text-lg font-bold space-y-4">
      {children}
    </ul>
  </div>
);

export default List;
