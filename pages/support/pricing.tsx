import Gradient from "@/components/_Support/Gradient";
import React from "react";
import SubscriptionProvider from "@/components/SubscripContext";
import { useSubscriptionContext } from "@/components/SubscripContext";

export default function Pricing() {
  return (
    <SubscriptionProvider>
      <main>
        <Gradient pageName="Pricing" />

        <section>
          <div className="wrapper grid place-items-center gap-20 w-full">
            <h2 className="font-normal">Compare plan features</h2>
            <PlanWrapper />
          </div>
        </section>
      </main>
    </SubscriptionProvider>
  );
}

const PlanWrapper = () => (
  <div className="w-full grid gap-10 place-items-center lg:flex lg:gap-0">
    <Plan name="Free">
      <div className="grid gap-2">
        <h3>Free</h3>
        <span className="h-8 md:h-10 2xl:h-12">
          <h5>
            <strong>$0</strong>
          </h5>
        </span>
      </div>

      <Benefits>
        <p>Financial literacy tools</p>
        <p>Open Source Models</p>
        <p>Portfolio Tracking</p>
        <p>Discord Community</p>
      </Benefits>
    </Plan>

    <Plan name="Monthly">
      <span className="bg-splash absolute top-0 left-0 right-0 w-full text-white font-bold py-1 text-center">
        Most Popular
      </span>
      <div className="grid gap-2">
        <h3>Monthly</h3>
        <span className="h-8 md:h-10 2xl:h-12">
          <h5>
            <strong>$39 per month</strong>
          </h5>
        </span>
      </div>
      <Benefits>
        <h6 className="font-semibold">All Free Features</h6>
        <p>Premium Discord Channels</p>
        <p>Real-time Alerts</p>
        <p>Real-time Charts</p>
        <p>Options Charts</p>
        <p>Options Flow</p>
        <p>Option Statistics</p>
        <p>Curated News Feeds</p>
        <p>Sentiment Tracking</p>
        <p>Earn Rewards</p>
        <p>Billed monthly</p>
      </Benefits>
    </Plan>

    <Plan name="Annual">
      <div className="grid gap-2">
        <h3>Annual</h3>
        <span className="h-8 md:h-10 2xl:h-12">
          <h5>
            <strong>$399 per year</strong>
          </h5>
        </span>
      </div>
      <Benefits>
        <h6 className="font-semibold">All Monthly Features</h6>
        <p>Exclusive Savings</p>
        <p>Priority Feature Requests</p>
        <p>Support Our Development</p>
      </Benefits>
    </Plan>
  </div>
);

interface IPlan {
  children: React.ReactNode;
  name: string;
}
const Plan = ({ children, name }: IPlan) => {
  const context = useSubscriptionContext();
  return (
    <div
      className={`shadow-xl hover:shadow-2xl border w-80 md:w-96 lg:w-auto lg:flex-1 ${
        context?.userSelection === name ? "gradient-box shadow-2xl z-10" : ""
      }`}
    >
      <div className="bg-white w-full dark:bg-black relative py-12 text-center grid gap-8 md:gap-5">
        {children}
        <div className="gradient-box z-10 lg:w-64">
          <button
            onClick={() => context?.setUserSelection(name)}
            className={`w-full ${
              context?.userSelection === name
                ? "bg-splash text-white"
                : "bg-white"
            }`}
          >
            {`${name === "Free" ? "Always Free" : `Select ${name}`}`}
          </button>
        </div>
      </div>
    </div>
  );
};

const Benefits = ({ children }: { children: React.ReactNode }) => (
  <div className="md:h-110 lg:h-110 2xl:h-120 space-y-3">{children}</div>
);
