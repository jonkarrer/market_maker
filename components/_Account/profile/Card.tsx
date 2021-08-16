import { useUser } from "@auth0/nextjs-auth0";
import { useSubscriptionContext } from "@/components/SubscripContext";

export default function Card() {
  const { user } = useUser();
  const image: any = user?.picture;
  const context = useSubscriptionContext();
  const sub = context?.currentSubscription;
  return (
    <div className="bg-splash hidden xl:flex justify-between h-72 2xl:h-80 p-4 rounded shadow-2xl">
      <div className="flex flex-col justify-center pr-16 space-y-2">
        <h4 className="text-3xl 2xl:text-4xl pb-2">Username</h4>
        <Item label="Email" info={user?.email} />
        <Item
          label="Subscription"
          info={sub === "Free" ? sub : `Premium (${sub})`}
        />
        <Item label="Discord" info="Example#0192" />
      </div>

      <img
        className="w-20 h-20 2xl:w-24 2xl:h-24 rounded-full bg-gray-300"
        src={image}
        alt="avatar"
      />
    </div>
  );
}

const Item = ({
  label,
  info,
}: {
  label: string;
  info: string | null | undefined;
}) => (
  <div>
    <h6 className="font-semibold">{label}</h6>
    <p>{info}</p>
  </div>
);
