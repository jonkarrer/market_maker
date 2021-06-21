const Menu = () => (
  <div
    id="menu"
    className="rounded h-screen absolute shadow-term-panel transform -translate-x-full sm:transform-none sm:relative pr-2 sm:pr-10 sm:mr-5 text-xs sm:text-sm lg:text-base text-gray-600 pt-6 sm:w-28 lg:w-56"
  >
    <ul className="list-none space-y-10 sm:space-y-3">
      <li className="font-bold text-black">Account</li>
      <li className="text-gray-600">Profile</li>
      <li>Settings</li>
      <li>
        Alert <br /> Preferences
      </li>
    </ul>
    <ul className="list-none mt-10 space-y-3">
      <li className="font-bold text-black">Billing</li>
      <li className="font-bold text-black">Subscriptions</li>
    </ul>
  </div>
);

export default Menu;
