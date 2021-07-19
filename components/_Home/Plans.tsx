import React from "react";

export default function Plans(): JSX.Element {
  return (
    <React.Fragment>
      <section className="grid gap-16 md:gap-32 3xl:gap-44">
        <h2 className="text-center">
          Try free or sign up for premium features
        </h2>

        <div className="wrapper lg:px-0 grid gap-16 md:grid-cols-3 md:gap-0">
          <Plan>
            <h3>Free</h3>
            <span className="h-12">
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
            <span className="h-12">
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
            <span className="h-12">
              <h5>
                <strong>$399</strong> per year
              </h5>
              <div>
                <i>15% savings</i>
              </div>
            </span>
            <Benefits>
              <strong>
                <p>
                  <i>All premium features, plus...</i>
                </p>
              </strong>
              <p>Exclusive savigns</p>
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
  <div className="grid text-center relative py-10 gap-10 border shadow-xl 3xl:py-16">
    {children}
  </div>
);

const Benefits = ({ children }: IChild) => (
  <div className="flex flex-col space-y-3 h-72 md:h-80 3xl:h-96 3xl:space-y-5">
    {children}
  </div>
);

const Subscribe = ({ children, border }: IChild) => (
  <div
    className={`w-44 py-2 m-auto md:text-xl lg:text-2xl lg:w-56 3xl:text-3xl 3xl:w-72 3xl:py-3 cursor-pointer ${border} rounded`}
  >
    {children}
  </div>
);
