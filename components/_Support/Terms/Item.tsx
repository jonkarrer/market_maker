interface IItem {
  children: React.ReactNode;
  name: string;
  id: string;
}

const Item = ({ children, name, id }: IItem) => (
  <div className="grid gap-6">
    <h3 id={id} className="font-semibold">
      {name}
    </h3>
    {children}
  </div>
);

export default Item;
