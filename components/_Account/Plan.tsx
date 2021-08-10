interface IPlan {
  subscription: string;
  price: string;
  children: React.ReactElement;
  selected: boolean;
  setPlan: any;
  current: boolean;
}
const Plan = ({
  subscription,
  price,
  children,
  selected,
  setPlan,
  current,
}: IPlan) => {
  function selectPlan() {
    if (subscription === "Monthly") {
      setPlan(2);
      return;
    } else if (subscription === "Annual") {
      setPlan(3);
      return;
    } else {
      setPlan(1);
      return;
    }
  }
  return (
    <div
      className={`relative w-64 h-64 sm:w-40 sm:h-44 md:w-44 lg:w-72 lg:h-72 border ${
        selected ? "border-blue-border" : "border"
      } rounded-sm text-black grid shadow-xl`}
    >
      <div className="flex flex-col items-start mx-auto text-left mt-5 lg:w-44">
        <h1 className="font-semibold text-3xl sm:text-xl lg:text-4xl">
          {subscription}
        </h1>
        <div className="text-base text-black">
          <strong className="font-bold text-lg lg:text-2xl">${price}</strong>
          {children}
        </div>
      </div>
      <div className="sm:h-9 lg:h-16 sm:text-xs lg:text-base absolute bottom-4 sm:bottom-0 left-0 right-0">
        {current ? (
          <button className="mx-auto bg-gray-400 text-white">
            Current Plan
          </button>
        ) : (
          <button
            onClick={selectPlan}
            className={`${
              selected
                ? "bg-blue-border text-white"
                : "border border-blue-border text-blue-border"
            } mx-auto`}
          >
            {selected ? "Selected" : `Select ${subscription}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Plan;
