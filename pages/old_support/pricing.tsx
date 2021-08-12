import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";
import { useState } from "react";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Gradient title="Pricing" />
      <Wrapper display="flex">
        <div className="flex flex-col space-y-10 lg:space-y-14 w-full">
          <h1 className="text-center font-semibold text-mobile-h pt-8 sm:pt-0 sm:text-4xl lg:text-6xl ">
            Compare Plans
          </h1>
          {/**Toggle Switch */}
          <div
            id="monthly-annual-toggle"
            onClick={() => setToggle(!toggle)}
            className="relative w-11/12 m-auto h-10 font-semibold flex justify-center items-center shadow-supp-boxes rounded-full text-xl sm:w-500px lg:w-685px lg:text-2xl cursor-pointer"
          >
            <div className="z-10 w-1/2 h-full rounded-full flex justify-center items-center text-white">
              <p className={`${toggle ? "text-black" : "text-white"}`}>
                Monthly
              </p>
            </div>
            <div
              className={`bg-blue-border absolute w-1/2 h-full rounded-full left-0 transition-all transform
               ${toggle ? "translate-x-full" : "translate-x-0"}`}
            ></div>
            <div className="z-10 w-1/2 h-full rounded-full flex justify-center items-center">
              <p className={`${toggle ? "text-white" : "text-black"}`}>
                Annual
              </p>
            </div>
          </div>
          {/**Free + Premium row */}
          <div className="grid grid-cols-3 text-2xl sm:mr-5 sm:text-4xl lg:text-5xl">
            <div>{/** Empty div to even out columns */}</div>
            <div className="text-center mr-5 grid gap-3 font-semibold sm:mr-0 lg:gap-7">
              <h1>Free</h1>
              <p className="text-gray-500 text-base lg:text-2xl">
                <strong className="font-bold sm:text-4xl lg:text-5xl">
                  $0
                </strong>{" "}
                per month
              </p>
              <button className="w-full m-auto h-7 shadow-lg rounded text-sm sm:w-4/5 sm:h-auto sm:py-2 lg:text-2xl text-blue-border border-blue-border border-1px border-solid ">
                Try for Free
              </button>
            </div>
            <div className="text-center font-semibold grid gap-3 lg:gap-6">
              <h1>Premium</h1>
              <p className="text-base font-bold text-gray-500 lg:text-2xl">
                <strong className="sm:text-4xl lg:text-5xl font-bold">
                  $40
                </strong>{" "}
                per month
              </p>
              <button className="w-full m-auto h-7 shadow-lg rounded text-sm text-white bg-blue-border sm:h-auto sm:px-0 sm:py-2 sm:w-4/5 lg:text-2xl">
                Subscribe Today
              </button>
            </div>
          </div>
          {/** Features Grid. Styles in global.css */}
          <div className="grid grid-cols-3">
            {/**Column-1 */}
            <div className="column-1">
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Financial literacy tools</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Open source models</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Portfolio Tracking</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Discord Community</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Real time alerts</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Real time stock charts</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Options Charts</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Options flow</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Options spread statistics</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Sentiment tracking</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Earn rewards & discounts</p>
              </div>
              <div>
                <img src="/infoIcon.svg" alt="info icon" />
                <p>Beta access to new tools</p>
              </div>
            </div>
            {/**Column-2 */}
            <div className="column-2">
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
            </div>
            {/**Column-3 */}
            <div className="column-3">
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
              <div>X</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Pricing;
