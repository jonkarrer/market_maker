export default function Card() {
  return (
    <div className="bg-splash hidden xl:flex justify-between h-72 2xl:h-80 p-4 rounded shadow-2xl">
      <div className="flex flex-col justify-center pr-16 space-y-2">
        <h4 className="text-3xl 2xl:text-4xl pb-2">Username</h4>
        <Item label="Email" info="example@gmail.com" />
        <Item label="Subscription" info="Premium (Monthly)" />
        <Item label="Discord" info="Example#0192" />
      </div>

      <img
        className="w-20 h-20 2xl:w-24 2xl:h-24 rounded-full bg-gray-300"
        src=""
        alt="avatar"
      />
    </div>
  );
}

const Item = ({ label, info }: { label: string; info: string }) => (
  <div>
    <h6 className="font-semibold">{label}</h6>
    <p>{info}</p>
  </div>
);
