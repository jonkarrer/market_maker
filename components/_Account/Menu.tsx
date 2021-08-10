const Menu = ({ selection }: { selection: any }) => {
  return (
    <div>
      <ul className="list-none space-y-10 sm:space-y-3 text-gray-600  dark:text-white">
        <h6 className="font-semibold">Account</h6>
        <li onClick={() => selection(1)}>Profile</li>
        <li onClick={() => selection(2)}>Settings</li>
        <li>
          Alert <br /> Preferences
        </li>
      </ul>
      <ul className="list-none mt-10 space-y-3">
        <h6 className="font-semibold">Billing</h6>
        <li className="font-bold text-black">Subscriptions</li>
      </ul>
    </div>
  );
};

export default Menu;
