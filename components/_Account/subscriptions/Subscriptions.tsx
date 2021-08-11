import React from "react";
import PlanContainer from "./PlanContainer";
import PaymentContainer from "./PaymentContainer";

const Subscriptions = () => {
  return (
    <section className="py-0 grid place-items-center space-y-20 lg:space-y-36">
      <div className="space-y-8 w-full md:space-y-10">
        <h2 className="text-center font-semibold">Choose a subscription</h2>

        <PlanContainer />
      </div>

      <div className="space-y-8 w-full md:space-y-10">
        <h2 className="text-center font-semibold">Billing details</h2>
        <PaymentContainer />
      </div>
    </section>
  );
};

export default Subscriptions;
