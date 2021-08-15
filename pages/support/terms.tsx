import Gradient from "@/components/_Support/Gradient";

const Terms = () => (
  <main>
    <Gradient pageName="Terms & Conditions" />
    <section>
      <div className="wrapper flex">
        <Menu />
        <Conditions />
      </div>
    </section>
  </main>
);

export default Terms;

const Menu = () => (
  <div className="hidden md:block md:border-r">
    <div className="text-gray-600 dark:text-white flex sm:pl-0 md:max-w-max md:grid md:gap-12 lg:flex-1 md:pr-12">
      <ul className="list-none grid md:space-y-4 relative text-lg md:text-xl 2xl:text-2xl dark:text-white">
        <a href="#advice" className="cursor-pointer">
          Not Financial Advice
        </a>
        <a href="#terms" className="cursor-pointer">
          Terms & Conditions
        </a>
        <a href="#privacy" className="cursor-pointer">
          Privacy Policy
        </a>
        <a className="cursor-pointer">Payment Terms</a>
        <a className="cursor-pointer">Disclosures</a>
      </ul>
    </div>
  </div>
);

interface IItem {
  children: React.ReactNode;
  name: string;
  id: string;
}
const Item = ({ children, name, id }: IItem) => (
  <div className="grid gap-6">
    <h3 id={id} className="font-semibold">
      {name}
    </h3>
    {children}
  </div>
);

const Conditions = () => (
  <div className="m-auto grid gap-10 md:w-110 lg:w-3/4">
    <Item id="advice" name="Not Financial Advice">
      <p id="advice">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        augue viverra nisi pretium, sed maximus lacus pulvinar. Curabitur vitae
        laoreet ligula, et porttitor velit. Suspendisse sit amet felis nec lacus
        commodo pretium. Sed et pulvinar purus. Curabitur auctor ante nisl, non
        malesuada quam tempor ut. Vestibulum id tempus ligula. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nullam malesuada ultricies justo, non finibus neque commodo
        eget. Suspendisse ut purus eu justo varius pellentesque nec iaculis
        dolor. Phasellus luctus tellus id est feugiat, id gravida nisi
        hendrerit. Ut faucibus a dolor auctor ultricies. Vestibulum ac ipsum
        velit. Proin mollis mauris vitae dui eleifend, vel lacinia odio mollis.
        Sed aliquam, ex non condimentum vehicula, enim est placerat nisi, ut
        tincidunt neque enim ut metus.
      </p>
      <p>
        Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
        malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
        Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
        consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
        Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat eu,
        finibus velit. Etiam nec pulvinar ex. Phasellus at convallis nulla.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean euismod facilisis odio in vestibulum. Cras
        suscipit sodales maximus.
      </p>
      <p>
        Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
        metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
        Phasellus at convallis nulla. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Aenean euismod facilisis
        odio in vestibulum. Cras suscipit sodales maximus.
      </p>
    </Item>
    <Item id="terms" name="Terms & Conditions">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        augue viverra nisi pretium, sed maximus lacus pulvinar. Curabitur vitae
        laoreet ligula, et porttitor velit. Suspendisse sit amet felis nec lacus
        commodo pretium. Sed et pulvinar purus. Curabitur auctor ante nisl, non
        malesuada quam tempor ut. Vestibulum id tempus ligula. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nullam malesuada ultricies justo, non finibus neque commodo
        eget. Suspendisse ut purus eu justo varius pellentesque nec iaculis
        dolor. Phasellus luctus tellus id est feugiat, id gravida nisi
        hendrerit. Ut faucibus a dolor auctor ultricies. Vestibulum ac ipsum
        velit. Proin mollis mauris vitae dui eleifend, vel lacinia odio mollis.
        Sed aliquam, ex non condimentum vehicula, enim est placerat nisi, ut
        tincidunt neque enim ut metus.
      </p>
      <p>
        Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
        malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
        Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
        consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
        Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat eu,
        finibus velit. Etiam nec pulvinar ex. Phasellus at convallis nulla.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean euismod facilisis odio in vestibulum. Cras
        suscipit sodales maximus.
      </p>
      <p>
        Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
        metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
        Phasellus at convallis nulla. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Aenean euismod facilisis
        odio in vestibulum. Cras suscipit sodales maximus.
      </p>
    </Item>
    <Item id="privacy" name="Privacy Policy">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        augue viverra nisi pretium, sed maximus lacus pulvinar. Curabitur vitae
        laoreet ligula, et porttitor velit. Suspendisse sit amet felis nec lacus
        commodo pretium. Sed et pulvinar purus. Curabitur auctor ante nisl, non
        malesuada quam tempor ut. Vestibulum id tempus ligula. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nullam malesuada ultricies justo, non finibus neque commodo
        eget. Suspendisse ut purus eu justo varius pellentesque nec iaculis
        dolor. Phasellus luctus tellus id est feugiat, id gravida nisi
        hendrerit. Ut faucibus a dolor auctor ultricies. Vestibulum ac ipsum
        velit. Proin mollis mauris vitae dui eleifend, vel lacinia odio mollis.
        Sed aliquam, ex non condimentum vehicula, enim est placerat nisi, ut
        tincidunt neque enim ut metus.
      </p>
      <p>
        Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
        malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
        Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
        consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
        Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat eu,
        finibus velit. Etiam nec pulvinar ex. Phasellus at convallis nulla.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean euismod facilisis odio in vestibulum. Cras
        suscipit sodales maximus.
      </p>
      <p>
        Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
        metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
        Phasellus at convallis nulla. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Aenean euismod facilisis
        odio in vestibulum. Cras suscipit sodales maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        augue viverra nisi pretium, sed maximus lacus pulvinar. Curabitur vitae
        laoreet ligula, et porttitor velit. Suspendisse sit amet felis nec lacus
        commodo pretium. Sed et pulvinar purus. Curabitur auctor ante nisl, non
        malesuada quam tempor ut. Vestibulum id tempus ligula. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nullam malesuada ultricies justo, non finibus neque commodo
        eget. Suspendisse ut purus eu justo varius pellentesque nec iaculis
        dolor. Phasellus luctus tellus id est feugiat, id gravida nisi
        hendrerit. Ut faucibus a dolor auctor ultricies. Vestibulum ac ipsum
        velit. Proin mollis mauris vitae dui eleifend, vel lacinia odio mollis.
        Sed aliquam, ex non condimentum vehicula, enim est placerat nisi, ut
        tincidunt neque enim ut metus.
      </p>
      <p>
        Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
        malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
        Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
        consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
        Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat eu,
        finibus velit. Etiam nec pulvinar ex. Phasellus at convallis nulla.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean euismod facilisis odio in vestibulum. Cras
        suscipit sodales maximus.
      </p>
      <p>
        Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
        metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
        Phasellus at convallis nulla. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Aenean euismod facilisis
        odio in vestibulum. Cras suscipit sodales maximus.
      </p>
    </Item>
    <Item id="payment" name="Payment Terms">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        augue viverra nisi pretium, sed maximus lacus pulvinar. Curabitur vitae
        laoreet ligula, et porttitor velit. Suspendisse sit amet felis nec lacus
        commodo pretium. Sed et pulvinar purus. Curabitur auctor ante nisl, non
        malesuada quam tempor ut. Vestibulum id tempus ligula. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nullam malesuada ultricies justo, non finibus neque commodo
        eget. Suspendisse ut purus eu justo varius pellentesque nec iaculis
        dolor. Phasellus luctus tellus id est feugiat, id gravida nisi
        hendrerit. Ut faucibus a dolor auctor ultricies. Vestibulum ac ipsum
        velit. Proin mollis mauris vitae dui eleifend, vel lacinia odio mollis.
        Sed aliquam, ex non condimentum vehicula, enim est placerat nisi, ut
        tincidunt neque enim ut metus.
      </p>
      <p>
        Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
        malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
        Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
        consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
        Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat eu,
        finibus velit. Etiam nec pulvinar ex. Phasellus at convallis nulla.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean euismod facilisis odio in vestibulum. Cras
        suscipit sodales maximus.
      </p>
      <p>
        Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
        metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
        Phasellus at convallis nulla. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Aenean euismod facilisis
        odio in vestibulum. Cras suscipit sodales maximus.
      </p>
    </Item>
    <Item id="disclose" name="Disclosures">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate
        augue viverra nisi pretium, sed maximus lacus pulvinar. Curabitur vitae
        laoreet ligula, et porttitor velit. Suspendisse sit amet felis nec lacus
        commodo pretium. Sed et pulvinar purus. Curabitur auctor ante nisl, non
        malesuada quam tempor ut. Vestibulum id tempus ligula. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Nullam malesuada ultricies justo, non finibus neque commodo
        eget. Suspendisse ut purus eu justo varius pellentesque nec iaculis
        dolor. Phasellus luctus tellus id est feugiat, id gravida nisi
        hendrerit. Ut faucibus a dolor auctor ultricies. Vestibulum ac ipsum
        velit. Proin mollis mauris vitae dui eleifend, vel lacinia odio mollis.
        Sed aliquam, ex non condimentum vehicula, enim est placerat nisi, ut
        tincidunt neque enim ut metus.
      </p>
      <p>
        Praesent non sem maximus, pulvinar ex in, lacinia ipsum. Mauris
        malesuada dui auctor sem volutpat, in aliquam ipsum tincidunt.
        Suspendisse vitae tincidunt dui. Morbi porttitor ligula ac orci
        consectetur, vel sodales nunc faucibus. Curabitur nec interdum ipsum.
        Donec at ultricies dolor. Phasellus ac metus convallis, euismod erat eu,
        finibus velit. Etiam nec pulvinar ex. Phasellus at convallis nulla.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean euismod facilisis odio in vestibulum. Cras
        suscipit sodales maximus.
      </p>
      <p>
        Curabitur nec interdum ipsum. Donec at ultricies dolor. Phasellus ac
        metus convallis, euismod erat eu, finibus velit. Etiam nec pulvinar ex.
        Phasellus at convallis nulla. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Aenean euismod facilisis
        odio in vestibulum. Cras suscipit sodales maximus.
      </p>
    </Item>
  </div>
);
