import { Gradient, Menu, Settings } from "@/components/_Account";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Account() {
  const { user } = useUser();
  return (
    <div>
      <Gradient email={user?.email} />

      <div className="sm:mx-std flex">
        <Menu />
        <Settings />
      </div>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired();
