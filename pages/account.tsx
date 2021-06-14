import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import React, { useContext, useState } from "react";
interface IGradient {
  email: string | null | undefined;
}
const Gradient = ({ email }: IGradient) => (
  <div
    id="home_page-one-gradient"
    className="text-black font-semibold flex flex-col justify-end items-start h-64"
  >
    <h1 className="mx-std mb-6 text-mobile-h sm:text-5xl">Account Settings</h1>
    <button className="btn mx-std font-normal text-black mb-10 md:text-base 2xl:text-xl sm:px-4 sm:py-2 hover:bg-btn-hover">
      {email}
    </button>
  </div>
);

const Menu = () => (
  <div
    id="menu"
    className="rounded shadow-term-panel pr-10 text-gray-600 mt-6 sm:w-56"
  >
    <ul className="list-none space-y-3">
      <li className="font-bold text-black">Account</li>
      <li className="text-gray-600">Profile</li>
      <li>Settings</li>
      <li>Alert Preferences</li>
    </ul>
    <ul className="list-none mt-10 space-y-3">
      <li className="font-bold text-black">Billing</li>
      <li className="font-bold text-black">Subscriptions</li>
    </ul>
  </div>
);

interface ICard {
  subscription: string;
  price: string;
  children: React.ReactElement;
  selected: boolean;
  onSelect: any;
  current: boolean;
}
const Card = ({
  subscription,
  price,
  children,
  selected,
  onSelect,
  current,
}: ICard) => {
  function handleClick() {
    if (subscription === "Monthly") {
      onSelect(2);
      return;
    } else if (subscription === "Annual") {
      onSelect(3);
      return;
    } else {
      onSelect(1);
      return;
    }
  }
  return (
    <div
      className={`relative w-72 h-72 border ${
        selected ? "border-blue-border" : "border"
      } rounded-sm text-black grid shadow-xl`}
    >
      <div className="flex flex-col items-start mx-auto text-left mt-5 sm:w-44">
        <h1 className="font-semibold text-4xl">{subscription}</h1>
        <div className="text-base text-black">
          <strong className="font-bold text-2xl">${price}</strong>
          {children}
        </div>
      </div>
      <div className="h-16 absolute bottom-0 left-0 right-0">
        {current ? (
          <button className="h-10 w-44 mx-auto bg-gray-400 text-white">
            Current Plan
          </button>
        ) : (
          <button
            onClick={handleClick}
            className={`${
              selected
                ? "bg-blue-border text-white"
                : "border border-blue-border text-blue-border"
            } h-10 w-44 mx-auto`}
          >
            {selected ? "Selected" : `Select ${subscription}`}
          </button>
        )}
      </div>
    </div>
  );
};
const Settings = () => {
  const [selectedPlan, setPlan] = useState(0);
  return (
    <div className="mt-5 space-y-12 grid text-center w-full">
      <h1 className="sm:text-4xl font-semibold">Choose a subscription</h1>

      <div className="flex m-auto">
        <Card
          subscription="Free"
          price="0"
          selected={selectedPlan === 1 ? true : false}
          onSelect={setPlan}
          current={true}
        >
          <div className="text-gray-500">
            <p>Delayed Data</p>
            <p>Single dashboard</p>
          </div>
        </Card>
        <Card
          subscription="Monthly"
          price="39.99"
          selected={selectedPlan === 2 ? true : false}
          onSelect={setPlan}
          current={false}
        >
          <div className="text-gray-500">
            <p>Billed monthly</p>
            <p>Premium features</p>
          </div>
        </Card>
        <Card
          subscription="Annual"
          price="399.99"
          selected={selectedPlan === 3 ? true : false}
          onSelect={setPlan}
          current={false}
        >
          <div className="text-gray-500">
            <p>Billed annually</p>
            <p>Premium features</p>
            <p>Priority requests</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default function Account() {
  const { user, isLoading } = useUser();
  return (
    <div>
      <Gradient email={user?.email} />

      <div className="mx-std flex">
        <Menu />
        <Settings />
      </div>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired();
