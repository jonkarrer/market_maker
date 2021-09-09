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

export default Menu;
