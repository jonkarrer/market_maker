import Gradient from "@/components/Gradient";
import { useRef, useState } from "react";
const Terms = () => {
  const [bold, setBold] = useState(0);
  const container: any = useRef(null);
  const financial: any = useRef(0);
  const terms: any = useRef(0);
  const privacy: any = useRef(0);
  const payment: any = useRef(0);
  const handleScroll = () => {
    let position = container.current.scrollTop;
    let one = financial.current.clientHeight + 50;
    let two = terms.current.clientHeight + 50;
    let three = privacy.current.clientHeight + 50;
    let four = payment.current.clientHeight + 50;
    if (position > one + two + three + four) {
      setBold(4);
    } else {
      if (position > one && position < one + two) {
        setBold(1);
      } else if (position > one + two && position < one + two + three) {
        setBold(2);
      } else if (
        position > one + two + three &&
        position < one + two + three + four
      ) {
        setBold(3);
      } else {
        setBold(0);
      }
    }
  };
  return (
    <div className="h-auto sticky top-0">
      <Gradient title="Terms & Privacy" />
      <div
        id="page-container"
        className="flex h-auto rounded-3xl sm:py-16 sm:w-11/12 md:w-4/5 max-w-screen-xl m-auto sm:-mt-20 md:-mt-32 xl:-mt-36 bg-white"
      >
        <div className="shadow-term-panel pr-2 hidden sm:block">
          <ul className=" sm:w-36 ml-8 sm:mt-5 sm:text-sm md:w-40 md:text-base lg:w-44 lg:text-lg space-y-6">
            <li>
              <a
                href="#terms"
                className={`${bold === 0 ? "font-bold" : "font-normal"}`}
              >
                Not Financial Advice
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className={`${bold === 1 ? "font-bold" : "font-normal"}`}
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className={`${bold === 2 ? "font-bold" : "font-normal"}`}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#payment"
                className={`${bold === 3 ? "font-bold" : "font-normal"}`}
              >
                Payment Terms
              </a>
            </li>
            <li>
              <a
                href="#disclosures"
                className={`${bold === 4 ? "font-bold" : "font-normal"}`}
              >
                Disclosures
              </a>
            </li>
          </ul>
        </div>
        <div
          ref={container}
          onScroll={handleScroll}
          className="ml-6% h-auto mt-8 sm:h-screen sm:mt-5 overflow-y-auto pb-32 lg:pb-72"
        >
          <h2 id="finance" className="text-3xl font-bold mb-5 sm:text-4xl">
            Not Financial Advice
          </h2>
          <p ref={financial} className="font-normal mr-6%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse sit
            amet felis nec lacus commodo pretium. Sed et pulvinar purus.
            Curabitur auctor ante nisl, non malesuada quam tempor ut. Vestibulum
            id tempus ligula. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nullam malesuada
            ultricies justo, non finibus neque commodo eget. Suspendisse ut
            purus eu justo varius pellentesque nec iaculis dolor. Phasellus
            luctus tellus id est feugiat, id gravida nisi hendrerit. Ut faucibus
            a dolor auctor ultricies. Vestibulum ac ipsum velit. Proin mollis
            mauris vitae dui eleifend, vel lacinia odio mollis. Sed aliquam, ex
            non condimentum vehicula, enim est placerat nisi, ut tincidunt neque
            enim ut metus. Praesent non sem maximus, pulvinar ex in, lacinia
            ipsum. Mauris malesuada dui auctor sem volutpat, in aliquam ipsum
            tincidunt. Suspendisse vitae tincidunt dui. Morbi porttitor ligula
            ac orci consectetur, vel sodales nunc faucibus. Curabitur nec
            interdum ipsum. Donec at ultricies dolor. Phasellus ac metus
            convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
            Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
            metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar
            ex. Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Terms & Conditions Curabitur nec interdum ipsum. Donec at ultricies
            dolor. Phasellus ac metus convallis, euismod erat eu, finibus velit.
            Etiam nec pulvinar ex. Phasellus at convallis nulla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Aenean euismod facilisis odio in vestibulum. Cras suscipit
            sodales maximus.
          </p>
          <h2 id="terms" className="text-3xl mt-8% mb-5 font-bold sm:text-4xl">
            Terms and Conditions
          </h2>
          <p ref={terms} className="font-normal mr-6%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse sit
            amet felis nec lacus commodo pretium. Sed et pulvinar purus.
            Curabitur auctor ante nisl, non malesuada quam tempor ut. Vestibulum
            id tempus ligula. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nullam malesuada
            ultricies justo, non finibus neque commodo eget. Suspendisse ut
            purus eu justo varius pellentesque nec iaculis dolor. Phasellus
            luctus tellus id est feugiat, id gravida nisi hendrerit. Ut faucibus
            a dolor auctor ultricies. Vestibulum ac ipsum velit. Proin mollis
            mauris vitae dui eleifend, vel lacinia odio mollis. Sed aliquam, ex
            non condimentum vehicula, enim est placerat nisi, ut tincidunt neque
            enim ut metus. Praesent non sem maximus, pulvinar ex in, lacinia
            ipsum. Mauris malesuada dui auctor sem volutpat, in aliquam ipsum
            tincidunt. Suspendisse vitae tincidunt dui. Morbi porttitor ligula
            ac orci consectetur, vel sodales nunc faucibus. Curabitur nec
            interdum ipsum. Donec at ultricies dolor. Phasellus ac metus
            convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
            Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
            metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar
            ex. Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Terms & Conditions Curabitur nec interdum ipsum. Donec at ultricies
            dolor. Phasellus ac metus convallis, euismod erat eu, finibus velit.
            Etiam nec pulvinar ex. Phasellus at convallis nulla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Aenean euismod facilisis odio in vestibulum. Cras suscipit
            sodales maximus.
          </p>
          <h2
            id="privacy"
            className="text-3xl mt-8% mb-5 font-bold sm:text-4xl"
          >
            Privacy Policy
          </h2>
          <p ref={privacy} className="font-normal mr-6%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse sit
            amet felis nec lacus commodo pretium. Sed et pulvinar purus.
            Curabitur auctor ante nisl, non malesuada quam tempor ut. Vestibulum
            id tempus ligula. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nullam malesuada
            ultricies justo, non finibus neque commodo eget. Suspendisse ut
            purus eu justo varius pellentesque nec iaculis dolor. Phasellus
            luctus tellus id est feugiat, id gravida nisi hendrerit. Ut faucibus
            a dolor auctor ultricies. Vestibulum ac ipsum velit. Proin mollis
            mauris vitae dui eleifend, vel lacinia odio mollis. Sed aliquam, ex
            non condimentum vehicula, enim est placerat nisi, ut tincidunt neque
            enim ut metus. Praesent non sem maximus, pulvinar ex in, lacinia
            ipsum. Mauris malesuada dui auctor sem volutpat, in aliquam ipsum
            tincidunt. Suspendisse vitae tincidunt dui. Morbi porttitor ligula
            ac orci consectetur, vel sodales nunc faucibus. Curabitur nec
            interdum ipsum. Donec at ultricies dolor. Phasellus ac metus
            convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
            Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
            metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar
            ex. Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Terms & Conditions Curabitur nec interdum ipsum. Donec at ultricies
            dolor. Phasellus ac metus convallis, euismod erat eu, finibus velit.
            Etiam nec pulvinar ex. Phasellus at convallis nulla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Aenean euismod facilisis odio in vestibulum. Cras suscipit
            sodales maximus.
          </p>
          <h2
            id="payment"
            className="text-3xl mt-8% mb-5 font-bold sm:text-4xl"
          >
            Payment Terms
          </h2>
          <p ref={payment} className="font-normal mr-6%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse sit
            amet felis nec lacus commodo pretium. Sed et pulvinar purus.
            Curabitur auctor ante nisl, non malesuada quam tempor ut. Vestibulum
            id tempus ligula. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nullam malesuada
            ultricies justo, non finibus neque commodo eget. Suspendisse ut
            purus eu justo varius pellentesque nec iaculis dolor. Phasellus
            luctus tellus id est feugiat, id gravida nisi hendrerit. Ut faucibus
            a dolor auctor ultricies. Vestibulum ac ipsum velit. Proin mollis
            mauris vitae dui eleifend, vel lacinia odio mollis. Sed aliquam, ex
            non condimentum vehicula, enim est placerat nisi, ut tincidunt neque
            enim ut metus. Praesent non sem maximus, pulvinar ex in, lacinia
            ipsum. Mauris malesuada dui auctor sem volutpat, in aliquam ipsum
            tincidunt. Suspendisse vitae tincidunt dui. Morbi porttitor ligula
            ac orci consectetur, vel sodales nunc faucibus. Curabitur nec
            interdum ipsum. Donec at ultricies dolor. Phasellus ac metus
            convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
            Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
            metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar
            ex. Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Terms & Conditions Curabitur nec interdum ipsum. Donec at ultricies
            dolor. Phasellus ac metus convallis, euismod erat eu, finibus velit.
            Etiam nec pulvinar ex. Phasellus at convallis nulla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Aenean euismod facilisis odio in vestibulum. Cras suscipit
            sodales maximus.
          </p>
          <h2
            id="disclosures"
            className="text-3xl mt-8% mb-5 font-bold sm:text-4xl"
          >
            Disclosures
          </h2>
          <p className="font-normal mr-6%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate augue viverra nisi pretium, sed maximus lacus pulvinar.
            Curabitur vitae laoreet ligula, et porttitor velit. Suspendisse sit
            amet felis nec lacus commodo pretium. Sed et pulvinar purus.
            Curabitur auctor ante nisl, non malesuada quam tempor ut. Vestibulum
            id tempus ligula. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nullam malesuada
            ultricies justo, non finibus neque commodo eget. Suspendisse ut
            purus eu justo varius pellentesque nec iaculis dolor. Phasellus
            luctus tellus id est feugiat, id gravida nisi hendrerit. Ut faucibus
            a dolor auctor ultricies. Vestibulum ac ipsum velit. Proin mollis
            mauris vitae dui eleifend, vel lacinia odio mollis. Sed aliquam, ex
            non condimentum vehicula, enim est placerat nisi, ut tincidunt neque
            enim ut metus. Praesent non sem maximus, pulvinar ex in, lacinia
            ipsum. Mauris malesuada dui auctor sem volutpat, in aliquam ipsum
            tincidunt. Suspendisse vitae tincidunt dui. Morbi porttitor ligula
            ac orci consectetur, vel sodales nunc faucibus. Curabitur nec
            interdum ipsum. Donec at ultricies dolor. Phasellus ac metus
            convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
            Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
            metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar
            ex. Phasellus at convallis nulla. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod facilisis odio in vestibulum. Cras suscipit sodales maximus.
            Terms & Conditions Curabitur nec interdum ipsum. Donec at ultricies
            dolor. Phasellus ac metus convallis, euismod erat eu, finibus velit.
            Etiam nec pulvinar ex. Phasellus at convallis nulla. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Aenean euismod facilisis odio in vestibulum. Cras suscipit
            sodales maximus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
