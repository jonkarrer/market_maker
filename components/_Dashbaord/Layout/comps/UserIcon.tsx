import { useUser } from "@auth0/nextjs-auth0";

export default function UserIcon() {
  const { user } = useUser();
  const avatar: any = user?.picture;
  return (
    <div className="h-full flex items-center">
      <img className="w-8 rounded-full" src={avatar} alt="" />
    </div>
  );
}
