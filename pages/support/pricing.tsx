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
          <PlanWrapper />
        </section>
      </main>
    </SubscriptionProvider>
  );
}

const PlanWrapper = () => {
  const context = useSubscriptionContext();
  console.log(context);
  return (
    <div className="wrapper grid place-items-center">
      <h2 className="font-normal">Compare plan features</h2>
      <div className="w-full flex">
        <Plan>
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
          <div className="gradient-box w-64">
            <button className="w-full focus:bg-splash">Always Free</button>
          </div>
        </Plan>
        <Plan>
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
          <div className="gradient-box w-64">
            <button
              onClick={() => context?.setUserSelection("Monthly")}
              className={`w-full ${
                context?.userSelection === "Monthly"
                  ? "bg-splash text-white"
                  : ""
              }`}
            >
              Select Monthly
            </button>
          </div>
        </Plan>
        <Plan>
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
          <div className="gradient-box w-64">
            <button
              onClick={() => context?.setUserSelection("Annual")}
              className={`w-full ${
                context?.userSelection === "Annual"
                  ? "bg-splash text-white"
                  : ""
              }`}
            >
              Select Annual
            </button>
          </div>
        </Plan>
      </div>
    </div>
  );
};

const Plan = ({ children }: { children: React.ReactNode }) => (
  <div className="border shadow-xl relative py-12 flex-1 text-center">
    {children}
  </div>
);

const Benefits = ({ children }: { children: React.ReactNode }) => (
  <div className="h-96">{children}</div>
);
