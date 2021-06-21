interface ICard {
  name: string;
  price: string;
  length: string;
  children: React.ReactNode;
}

const Card = ({ name, price, length, children }: ICard) => (
  <div className="w-72 h-72 border rounded-sm text-black bg-white text-center grid place-content-center space-y-6 shadow-xl">
    <h1 className="font-semibold text-4xl">{name}</h1>
    <div className="flex flex-col items-center space-y-16">
      <p className="text-gray-500 text-base">
        <strong className="font-bold text-2xl">${price}</strong> per {length}
      </p>
      {children}
    </div>
  </div>
);

export default Card;
