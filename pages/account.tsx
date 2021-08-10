import { Gradient, Menu, MenuProvider } from "@/components/_Account";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

export default function Account() {
  const { user } = useUser();
  const [userSelection, setSelection] = useState(0);
  return (
    <MenuProvider>
      <div>
        <Gradient email={user?.email} />
        <div className="wrapper">
          <Menu selection={setSelection} />
          {userSelection === 1 ? <h1>One</h1> : undefined}
          {userSelection === 2 ? <h1>Two</h1> : undefined}
        </div>
      </div>
    </MenuProvider>
  );
}

export const getServerSideProps = withPageAuthRequired();
