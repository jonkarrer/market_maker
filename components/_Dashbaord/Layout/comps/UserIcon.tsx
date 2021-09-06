import { useUser } from "@auth0/nextjs-auth0";

export default function UserIcon() {
  const { user } = useUser();
  const avatar: any = user?.picture;
  return (
    <div className="h-full flex items-center">
      <img
        className="w-10 lg:w-8 xl:w-9 2xl:w-10 rounded-full"
        src={avatar}
        alt=""
      />
    </div>
  );
}
