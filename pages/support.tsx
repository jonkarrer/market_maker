import SupportSquare from "../components/SupportSquare";
import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";

export default function Support() {
  return (
    <div className="h-screen">
      <MobileHeader />
      <DesktopHeader />
      <div
        id="colorful-stripe"
        className="text-white font-semibold flex items-center h-28 sm:h-44 bg-gradient-to-r from-hot-pink to-lt-blue"
      >
        <h1 className="mx-std text-4xl sm:text-6xl">Support</h1>
      </div>
      <div
        id="squares-container"
        className="mx-std py-10 grid justify-items-center place-content-around gap-12 sm:gap-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <SupportSquare title="Getting Started" link="/getting-started" />
        <SupportSquare title="Pricing" link="/pricing" />
        <SupportSquare title="Roadmap" link="/roadmap" />
        <SupportSquare title="About Us" link="/about" />
        <SupportSquare title="Terms & Privacy" link="/terms" />
        <SupportSquare title="Contact" link="/contact" />
      </div>
    </div>
  );
}
