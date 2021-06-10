interface ICard {
  name: string;
  price: string;
  length: string;
  button: string;
  color: string;
  productId: string;
  handleSubmit: React.EventHandler<any>;
}
interface ISubCard {
  handleSubmit: React.EventHandler<any>;
}

const Card = ({
  name,
  price,
  button,
  length,
  color,
  handleSubmit,
  productId,
}: ICard) => (
  <div className="w-72 h-72 border rounded-sm text-black bg-white text-center grid place-content-center space-y-6 shadow-xl">
    <h1 className="font-semibold text-4xl">{name}</h1>
    <div className="flex flex-col items-center space-y-16">
      <p className="text-gray-500 text-base">
        <strong className="font-bold text-2xl">${price}</strong> per {length}
      </p>
      <button
        onClick={() => handleSubmit(productId)}
        className={`${color} text-base font-semibold text-white py-3 w-48 rounded`}
      >
        {button}
      </button>
    </div>
  </div>
);

export default function SubCards({ handleSubmit }: ISubCard) {
  return (
    <div className="flex items-center justify-center">
      <Card
        name="Free"
        price="0"
        length="month"
        button="Current plan"
        color="bg-gray-600"
        productId="none"
        handleSubmit={handleSubmit}
      />
      <Card
        name="Monthly"
        price="40"
        length="month"
        button="Subscribe Monthly"
        color="bg-blue-border"
        productId="price_1Iv4eIGCLPB3c1Gbupd88qoS"
        handleSubmit={handleSubmit}
      />
      <Card
        name="Annual"
        price="400"
        length="year"
        button="Subscribe Annualy"
        color="bg-blue-border"
        productId="price_1Iv4eIGCLPB3c1Gbupd88qoS"
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
