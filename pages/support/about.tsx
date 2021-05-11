import Gradient from "@/components/support_pages/Gradient";
import Wrapper from "@/components/support_pages/Wrapper";
import Member from "@/components/support_pages/Member";
const About = () => (
  <div>
    <Gradient title="About Us" />
    {/** Our Mission */}
    <Wrapper display="grid">
      <div className="flex flex-col mb-20 sm:mb-36 w-full">
        <h1
          id="our-mission"
          className="text-center font-semibold text-mobile-h pb-12 sm:text-4xl lg:text-6xl "
        >
          Our Mission
        </h1>
        <p className="mx-6%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
          Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse sit
          amet felis nec lacus commodo pretium. Sed et pulvinar purus. Curabitur
          auctor ante nisl, non malesuada quam tempor ut. Vestibulum id tempus
          ligula. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Nullam malesuada ultricies justo,
          non finibus neque commodo eget. Suspendisse ut purus eu justo varius
          pellentesque nec iaculis dolor. Phasellus luctus tellus id est
          feugiat, id gravida nisi hendrerit. Ut faucibus a dolor auctor
          ultricies. Vestibulum ac ipsum velit. Proin mollis mauris vitae dui
          eleifend, vel lacinia odio mollis. Sed aliquam, ex non condimentum
          vehicula, enim est placerat nisi, ut tincidunt neque enim ut metus.
          <br />
          <br />
          Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
          malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
          Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
          consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
          Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat
          eu, finibus velit. Etiam nec pulvinar ex. Phasellus at convallis
          nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Aenean euismod facilisis odio in
          vestibulum. Cras suscipit sodales maximus. <br /> <br /> Curabitur nec
          interdum ipsum. Donec at ultricies dolor. Phasellus ac metus
          convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
          Phasellus at convallis nulla.
        </p>
      </div>
    </Wrapper>
    {/** We're just like you */}
    <div className="bg-black w-full sm:pb-36">
      <div className="flex flex-col m-auto max-w-screen-xl pb-20 sm:w-11/12 md:w-4/5">
        <h1
          id="just-like-you"
          className="text-center font-semibold text-mobile-h py-16 lg:px-28 sm:text-4xl lg:text-6xl"
        >
          We're just like you
        </h1>
        <p className="mx-6% m-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
          Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse sit
          amet felis nec lacus commodo pretium. Sed et pulvinar purus. Curabitur
          auctor ante nisl, non malesuada quam tempor ut. Vestibulum id tempus
          ligula. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Nullam malesuada ultricies justo,
          non finibus neque commodo eget. Suspendisse ut purus eu justo varius
          pellentesque nec iaculis dolor. Phasellus luctus tellus id est
          feugiat, id gravida nisi hendrerit. Ut faucibus a dolor auctor
          ultricies. Vestibulum ac ipsum velit. Proin mollis mauris vitae dui
          eleifend, vel lacinia odio mollis. Sed aliquam, ex non condimentum
          vehicula, enim est placerat nisi, ut tincidunt neque enim ut metus.
          <br />
          <br />
          Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
          malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
          Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
          consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
          Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat
          eu, finibus velit. Etiam nec pulvinar ex. Phasellus at convallis
          nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Aenean euismod facilisis odio in
          vestibulum. Cras suscipit sodales maximus. <br /> <br />
          Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
          malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
          Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
          consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
          Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat
          eu, finibus velit. Etiam nec pulvinar ex. Phasellus at convallis
          nulla. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Aenean euismod facilisis odio in
          vestibulum. Cras suscipit sodales maximus. <br /> <br />
        </p>
      </div>
    </div>
    {/** Meet the Team */}
    <div className=" w-full sm:pb-36">
      <div className="flex flex-col m-auto max-w-screen-xl sm:w-11/12 md:w-4/5">
        <h1
          id="meet-the-team"
          className="text-center h-full font-semibold text-mobile-h py-16 lg:py-28 sm:text-4xl lg:text-6xl "
        >
          Meet the team
        </h1>
        <div className="flex flex-col sm:flex-row justify-between space-y-16 sm:space-y-0 sm:space-x-8 w-full">
          <Member name="BakerX">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.{" "}
          </Member>
          <Member name="Kanopy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.{" "}
          </Member>
          <Member name="Prossecing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.{" "}
          </Member>
        </div>
      </div>
    </div>
  </div>
);

export default About;
