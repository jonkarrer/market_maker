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
    <header className="h-16 bg-splash w-full">
      <div className="h-full w-full flex items-center">
        <Hamburger />
        <Navigation />
        <Search />
        <Settings />
        <UserIcon />
      </div>
      <SubHeading />
    </header>
  );
}
