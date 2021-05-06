interface IList {
  children: React.ReactNode;
  title: string;
}
const List = ({ children, title }: IList) => (
  <div className="grid justify-items-center gap-4 w-36">
    <h2 className="grid place-content-center sm:text-lg sm:h-10 sm:w-28 border-blue-border border-solid border-1px rounded-sm">
      {title}
    </h2>
    <ul className="list-disc text-sm space-y-3">{children}</ul>
  </div>
);

export default List;
