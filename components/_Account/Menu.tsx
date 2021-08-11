import { useState } from "react";

const Menu = ({ selection }: { selection: any }) => {
  const [openAccount, setOpenAccount] = useState(true);
  const [openBilling, setOpenBilling] = useState(true);
  return (
    <div className="text-gray-600 dark:text-white flex md:max-w-max md:grid md:gap-12 lg:flex-1 lg:pr-12 md:border-r">
      <ul className="list-none grid md:block md:space-y-4 relative">
        <h6
          className="font-bold text-2xl pr-10 md:pr-0"
          onClick={() => setOpenAccount(!openAccount)}
        >
          Account
        </h6>
        <div
          className={`absolute -bottom-36 bg-white grid gap-4 z-10 w-32 pl-2 py-3 border md:static md:w-auto md:border-none md:bg-none md:p-0 md:space-y-5 ${
            openAccount ? "hidden md:block" : "block"
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
      <ul className="list-none grid md:block md:space-y-4 relative">
        <h6
          className="font-bold text-2xl"
          onClick={() => setOpenBilling(!openBilling)}
        >
          Billing
        </h6>
        <div
          className={`absolute -bottom-16 grid gap-4 z-10 w-32 pl-2 py-3 border bg-white md:static md:border-none md:w-auto md:bg-none md:p-0 ${
            openBilling ? "hidden md:block" : "block"
          }`}
        >
          <li onClick={() => selection(4)}>Subscriptions</li>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
