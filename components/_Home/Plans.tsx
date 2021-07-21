import React from "react";

export default function Plans(): JSX.Element {
  return (
    <React.Fragment>
      <section className="grid gap-16 md:gap-32 3xl:gap-44">
        <h2 className="text-center leading-normal md:w-2/3 m-auto lg:w-auto">
          Try free or sign up for premium features
        </h2>

        <div className="m-auto w-5/6 md:w-full lg:w-86% 2xl:w-9/12 max-w-screen-3xl lg:px-0 grid gap-16 md:grid-cols-3 md:gap-0">
          <Plan>
            <h3>Free</h3>
            <span className="h-8 md:h-10 2xl:h-12">
              <h5>
                <strong>$0</strong> per month
              </h5>
            </span>
            <Benefits>
              <p>Twitter alerts</p>
              <p>Public discord</p>
              <p>Portfolio analysis</p>
              <p>Financial literacy tools</p>
            </Benefits>
            <Subscribe border="border-4">
              <a>Get Started</a>
            </Subscribe>
          </Plan>

          <Plan>
            <span className="bg-splash absolute top-0 w-full text-white font-bold py-1 3xl:text-2xl">
              Most Popular
            </span>
            <h3>Premium</h3>
            <span className="h-8 md:h-10 2xl:h-12">
              <h5>
                <strong>$39</strong> per month
              </h5>
            </span>
            <Benefits>
              <strong>
                <p>
                  <i>All free features, plus...</i>
                </p>
              </strong>
              <p>Instant alerts</p>
              <p>Options and spreads</p>
              <p>Charts and models</p>
              <p>Curated news feed</p>
              <p>Sentiment tracking</p>
              <p>Earn rewards</p>
            </Benefits>
            <div className="gradient-box">
              <Subscribe>
                <a>Subscribe Monthly</a>
              </Subscribe>
            </div>
          </Plan>

          <Plan>
            <h3>Annual</h3>
            <span className="h-10 md:h-10 2xl:h-12">
              <h5>
                <strong>$399</strong> per year
              </h5>
              <p className="font-light">
                <i className="text-lg 2xl:text-xl 3xl:text-3xl">15% savings</i>
              </p>
            </span>
            <Benefits>
              <strong>
                <p>
                  <i>All premium features, plus...</i>
                </p>
              </strong>
              <p>Exclusive savings</p>
              <p>Priotiry feature requests</p>
              <p>Support our development</p>
            </Benefits>
            <div className="gradient-box">
              <Subscribe>
                <a>Subscribe Annually</a>
              </Subscribe>
            </div>
          </Plan>
        </div>
      </section>
    </React.Fragment>
  );
}

interface IChild {
  children: React.ReactNode;
  border?: string;
}
const Plan = ({ children }: IChild) => (
  <div className="grid text-center relative py-10 gap-12 border shadow-xl lg:gap-12 2xl:gap-14 3xl:py-20 3xl:gap-16">
    {children}
  </div>
);

const Benefits = ({ children }: IChild) => (
  <div className="flex flex-col font-light space-y-1 h-56 md:h-64 2xl:h-72 md:space-y-3 3xl:h-85 3xl:space-y-5">
    {children}
  </div>
);

const Subscribe = ({ children, border }: IChild) => (
  <div
    className={`font-normal w-44 py-3 m-auto md:text-xl lg:py-4 lg:w-56 3xl:text-3xl 3xl:w-72 cursor-pointer ${border} rounded dark:bg-black`}
  >
    {children}
  </div>
);
