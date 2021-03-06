import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function UserIcon() {
  const { user } = useUser();
  const avatar: any = user?.picture;
  return (
    <div className="h-full flex items-center">
      <Link href="/account">
        <img
          className="w-10 lg:w-8 xl:w-9 2xl:w-10 rounded-full"
          src={avatar}
          alt=""
        />
      </Link>
    </div>
  );
}
