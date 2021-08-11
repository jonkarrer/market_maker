import { Gradient, Menu, Subscriptions } from "@/components/_Account";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";

export default function Account() {
  const { user } = useUser();
  const [userSelection, setSelection] = useState(0);
  return (
    <React.Fragment>
      <Gradient email={user?.email} />
      <section className="py-8 md:py-20 2xl:py-28">
        <div className="wrapper w-full md:w-11/12 md:max-w-3xl lg:w-10/12 lg:max-w-screen-2xl grid gap-20 md:gap-0 md:flex">
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
