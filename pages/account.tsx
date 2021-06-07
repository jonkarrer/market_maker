import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
export default function Account() {
  const { user, isLoading } = useUser();
  return (
    <div
      id="home_page-one-gradient"
      className="h-screen grid place-content-center space-y-16 "
    >
      <div className="text-lg">
        <p>{user?.email}</p>
        <p>{user?.name}</p>
        <p>{user?.nickname}</p>
        <p>{user?.updated_at}</p>
      </div>
      <Link href="/api/auth/logout">
        <button className="btn"> Sign Out</button>
      </Link>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired();
