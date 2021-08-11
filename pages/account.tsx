import { Gradient, Menu, Subscriptions } from "@/components/_Account";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";

export default function Account() {
  const { user } = useUser();
  const [userSelection, setSelection] = useState(0);
  return (
    <React.Fragment>
      <Gradient email={user?.email} />
      <section>
        <div className="wrapper grid gap-20 md:flex">
          <Menu selection={setSelection} />
          {userSelection === 1 ? <h1>Profile</h1> : undefined}
          {userSelection === 2 ? <h1>Settings</h1> : undefined}
          {userSelection === 3 ? <h1>Alerts</h1> : undefined}
          {userSelection === 4 ? <Subscriptions /> : undefined}
        </div>
      </section>
    </React.Fragment>
  );
}

export const getServerSideProps = withPageAuthRequired();
