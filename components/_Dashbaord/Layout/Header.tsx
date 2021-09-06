import {
  Hamburger,
  Navigation,
  Search,
  Settings,
  UserIcon,
} from "./comps/index";
import SubHeading from "./SubHeading";

export default function Header() {
  return (
    <header className="bg-splash w-full">
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
