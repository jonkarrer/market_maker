import React from "react";
import PlanContainer from "./PlanContainer";
import PaymentContainer from "./PaymentContainer";

const Subscriptions = () => {
  return (
    <section className="py-0 grid place-items-center gap-16 lg:gap-20 bg-blue-400">
      <h2 className="text-center">Choose a subscription</h2>

      <PlanContainer />

      <div className="space-y-5">
        <h2 className="text-center">Billing details</h2>
        <PaymentContainer />
      </div>
    </section>
  );
};

export default Subscriptions;
