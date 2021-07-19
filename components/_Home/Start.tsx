import React from "react";

const Start = () => (
  <section>
    <div className="wrapper grid place-items-center">
      <article className="text-center space-y-10 md:space-y-16">
        <h2>Get started today</h2>
        <p className="md:w-2/3 md:m-auto">
          Take ownership of your financial future. No matter how much experience
          you have, we've got you covered.
        </p>
        <div className="gradient-box w-60 md:w-72">
          <Subscribe>
            <a href="">Subscribe Now</a>
          </Subscribe>
        </div>
      </article>
    </div>
  </section>
);

export default Start;

const Subscribe = ({ children }: { children: React.ReactNode }) => (
  <div className="py-3 m-auto md:text-xl lg:text-2xl 3xl:text-3xl cursor-pointer rounded">
    {children}
  </div>
);
