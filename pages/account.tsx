import { Gradient, Menu, Subscriptions } from "@/components/_Account";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import SubscriptionProvider from "../components/SubscripContext";
import Profile from "@/components/_Account/profile";

import React, { useState } from "react";

export default function Account() {
  const { user } = useUser();
  const [userSelection, setSelection] = useState(1);
  return (
    <React.Fragment>
      <Gradient email={user?.email} />
      <SubscriptionProvider>
        <section>
          <div className="wrapper w-full md:w-11/12 md:max-w-3xl lg:w-10/12 lg:max-w-screen-2xl grid gap-20 md:gap-0 md:flex">
            <Menu selection={setSelection} />
            {userSelection === 1 ? <Profile /> : undefined}
            {userSelection === 2 ? <Subscriptions /> : undefined}
          </div>
        </section>
      </SubscriptionProvider>
    </React.Fragment>
  );
}

export const getServerSideProps = withPageAuthRequired();
