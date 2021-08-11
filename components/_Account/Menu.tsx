import { useState } from "react";

const Menu = ({ selection }: { selection: any }) => {
  const [openAccount, setOpenAccount] = useState(true);
  const [openBilling, setOpenBilling] = useState(true);
  return (
    <div className="text-gray-600 dark:text-white flex md:max-w-max md:block lg:flex-1 lg:pr-12 md:border-r">
      <ul className="list-none grid md:block md:space-y-3 relative">
        <h6
          className="font-bold text-2xl pr-10 md:pr-0"
          onClick={() => setOpenAccount(!openAccount)}
        >
          Account
        </h6>
        <div
          className={`absolute -bottom-36 bg-white grid gap-4 z-10 w-32 pl-2 py-3 border md:w-auto md:bg-none  ${
            openAccount ? "hidden" : "block"
          }`}
        >
          <li
            onClick={() => {
              selection(1);
              setOpenAccount(!openAccount);
            }}
          >
            Profile
          </li>
          <li
            onClick={() => {
              selection(2);
              setOpenAccount(!openAccount);
            }}
          >
            Settings
          </li>
          <li
            onClick={() => {
              selection(3);
              setOpenAccount(!openAccount);
            }}
          >
            Alerts
          </li>
        </div>
      </ul>
      <ul className="list-none grid md:block md:space-y-3 relative">
        <h6
          className="font-bold text-2xl"
          onClick={() => setOpenBilling(!openBilling)}
        >
          Billing
        </h6>
        <div
          className={`absolute -bottom-16 grid gap-4 z-10 w-32 pl-2 py-3 border bg-white md:w-auto md:bg-none  ${
            openBilling ? "hidden" : "block"
          }`}
        >
          <li onClick={() => selection(4)}>Subscriptions</li>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
