interface ICard {
  name: string;
  children: React.ReactNode;
}

const Card = ({ name, children }: ICard) => (
  <div className="w-72 h-72 border rounded-sm text-black text-center grid place-content-center space-y-6 shadow-xl">
    <h1 className="font-semibold text-4xl">{name}</h1>
    <div className="flex flex-col items-center space-y-16">{children}</div>
  </div>
);

export default function SubCards() {
  return (
    <div className="flex items-center justify-center ">
      <Card name="Free">
        <p className="text-gray-500 text-base">
          <strong className="font-bold text-2xl">$0</strong> per month
        </p>
        <button className="bg-gray-600 text-base font-semibold text-white py-3 w-48 rounded">
          Current Plan
        </button>
      </Card>
      <Card name="Free">
        <p className="text-gray-500 text-base">
          <strong className="font-bold text-2xl">$40</strong> per month
        </p>
        <button className="bg-blue-border text-base font-semibold text-white py-3 w-48 rounded">
          Subscribe Monthly
        </button>
      </Card>
      <Card name="Free">
        <p className="text-gray-500 text-base">
          <strong className="font-bold text-2xl">$400</strong> per year
        </p>
        <button className="bg-blue-border text-base font-semibold text-white py-3 w-48 rounded">
          Subscribe Annualy
        </button>
      </Card>
    </div>
  );
}
