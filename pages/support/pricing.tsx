import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";
import { useState } from "react";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Gradient title="Pricing" />
      <Wrapper display="flex">
        <div className="flex flex-col space-y-8 lg:space-y-14 w-full">
          <h1 className="text-center font-bold text-mobile-h py-8 sm:py-0 sm:text-4xl lg:text-5xl ">
            Compare Plans
          </h1>
          <div
            id="monthly-annual-toggle"
            onClick={() => setToggle(!toggle)}
            className="relative w-11/12 m-auto sm:w-500px lg:w-685px h-10 font-semibold flex justify-center items-center shadow-supp-boxes rounded-full text-xl lg:text-2xl cursor-pointer"
          >
            <div className="z-10 w-1/2 h-full rounded-full flex justify-center items-center text-white">
              <p className={`${toggle ? "text-black" : "text-white"}`}>
                Monthly
              </p>
            </div>
            <div
              className={`bg-blue-border absolute w-1/2 h-full rounded-full left-0 transition-all transform ${
                toggle ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
            <div className="z-10 w-1/2 h-full rounded-full flex justify-center items-center">
              <p className={`${toggle ? "text-white" : "text-black"}`}>
                Annual
              </p>
            </div>
          </div>
          <div className="grid mr-10 w-11/12 grid-cols-2 place-content-end justify-items-end sm:text-4xl lg:text-5xl">
            <div className="text-center grid lg:gap-6 font-bold">
              <h1>Free</h1>
              <p className="lg:text-2xl font-bold text-gray-500">
                <strong className="sm:text-4xl lg:text-5xl">$0</strong> per
                month
              </p>
            </div>
            <div className="text-center grid lg:gap-6 font-bold">
              <h1>Premium</h1>
              <p className="lg:text-2xl font-bold text-gray-500">
                <strong className="sm:text-4xl lg:text-5xl font-extrabold">
                  $40
                </strong>{" "}
                per month
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Pricing;
