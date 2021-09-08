import Hamburger from "./Hamburger";
import Navigation from "./Navigation";
import Search from "./Search";
import Settings from "./Settings";

import SubHeading from "./SubHeading";

export default function Header() {
  return (
    <header className="bg-splash w-full fixed top-0 z-50">
      <div className="w-11/12 h-14 2xl:h-16 mx-auto flex items-end justify-between">
        <Hamburger />
        <Navigation />
        <Search />
        <Settings />
      </div>
      <SubHeading />
    </header>
  );
}
