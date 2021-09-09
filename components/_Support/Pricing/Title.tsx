interface ITitle {
  title: string;
  price: string;
}

const Title = ({ title, price }: ITitle) => (
  <div className="grid gap-2">
    <h3>{title}</h3>
    <span className="h-8 md:h-10 2xl:h-12">
      <h5>
        <strong>{price}</strong>
      </h5>
    </span>
  </div>
);

export default Title;
