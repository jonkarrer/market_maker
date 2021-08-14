import Gradient from "@/components/_Support/Gradient";
import React from "react";

const About = () => {
  return (
    <main>
      <Gradient pageName="About Us" />
      <section>
        <div className="wrapper space-y-20 md:space-y-32 lg:w-2/3">
          <div className="grid gap-10 md:gap-20 ">
            <h2 className="font-medium text-center text-4xl lg:text-5xl 2xl:text-6xl">
              Our Mission
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
              Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse
              sit amet felis nec lacus commodo pretium. Sed et pulvinar purus.
              Curabitur auctor ante nisl, non malesuada quam tempor ut.
              Vestibulum id tempus ligula. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nullam
              malesuada ultricies justo, non finibus neque commodo eget.
              Suspendisse ut purus eu justo varius pellentesque nec iaculis
              dolor. Phasellus luctus tellus id est feugiat, id gravida nisi
              hendrerit. Ut faucibus a dolor auctor ultricies. Vestibulum ac
              ipsum velit. Proin mollis mauris vitae dui eleifend, vel lacinia
              odio mollis. Sed aliquam, ex non condimentum vehicula, enim est
              placerat nisi, ut tincidunt neque enim ut metus.
            </p>
          </div>
          <div className="grid gap-10 md:gap-20">
            <h2 className="font-medium text-center text-4xl lg:text-5xl 2xl:text-6xl">
              Our Values
            </h2>
            <Value>
              <h3 className="font-normal text-gradAqua">Value One</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vulputate augue viverra nisi pretium, sed maximus lacus
                pulvinar. Curabitur vitae laoreet ligula, et porttitor velit.
                Suspendisse sit amet felis nec lacus commodo pretium.{" "}
              </p>
            </Value>
            <Value>
              <h3 className="font-normal text-valueBlue">Value Two</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vulputate augue viverra nisi pretium, sed maximus lacus
                pulvinar. Curabitur vitae laoreet ligula, et porttitor velit.
                Suspendisse sit amet felis nec lacus commodo pretium.{" "}
              </p>
            </Value>
            <Value>
              <h3 className="font-normal text-valuePurple">Value Three</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vulputate augue viverra nisi pretium, sed maximus lacus
                pulvinar. Curabitur vitae laoreet ligula, et porttitor velit.
                Suspendisse sit amet felis nec lacus commodo pretium.{" "}
              </p>
            </Value>
          </div>
        </div>
      </section>
    </main>
  );
};

const Value = ({ children }: { children: React.ReactNode }) => (
  <span className="space-y-6 md:space-y-8">{children}</span>
);

export default About;
