import { useSubscriptionContext } from "../Context";

export default function PlanContainer() {
  return (
    <div className="grid gap-8 place-content-center m-auto lg:flex lg:gap-0">
      <Plan subscription="Free" price="0" current={true}>
        <Benefits>
          <p>Delayed Data</p>
          <p>Single dashboard</p>
        </Benefits>
      </Plan>
      <Plan subscription="Monthly" price="39" current={false}>
        <Benefits>
          <p>Billed monthly</p>
          <p>Premium features</p>
        </Benefits>
      </Plan>
      <Plan subscription="Annual" price="399" current={false}>
        <Benefits>
          <p>Billed annually</p>
          <p>Premium features</p>
          <p>Priority requests</p>
        </Benefits>
      </Plan>
    </div>
  );
}

interface IPlan {
  subscription: string;
  price: string;
  children: React.ReactElement;
  current: boolean;
}
const Plan = ({ subscription, price, children, current }: IPlan) => {
  const context = useSubscriptionContext();

  const selectPlan = (planName: string) => {
    context?.updateSubscription(planName);
    console.log(context?.currentSubscription, planName);
  };
  return (
    <div className="border shadow-xl grid place-content-center text-center gap-5 w-60 md:w-80 md:py-8 py-3 lg:gap-5 lg:py-4 lg:w-70 xl:w-72 2xl:w-85 2xl:py-9 2xl:gap-7">
      <h3 className="font-bold h-9">{subscription}</h3>

      <h5 className="h-5">
        <strong className="text-lg lg:text-2xl">${price}</strong>
      </h5>
      {children}
      <div className="h-16 sm:text-xs lg:text-base rounded">
        {current ? (
          <button className="mx-auto bg-gray-400 text-white rounded lg:mt-1">
            Current Plan
          </button>
        ) : (
          <div className="gradient-box max-w-max">
            <button
              onClick={() => selectPlan(subscription)}
            >{`Select ${subscription}`}</button>
          </div>
        )}
      </div>
    </div>
  );
};

function Benefits({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-500 sm:text-xs lg:text-base lg:h-24">
      {children}
    </div>
  );
}
