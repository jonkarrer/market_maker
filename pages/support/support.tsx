import SupportSquare from "../../components/SupportSquare";

export default function Support() {
  return (
    <div className="h-screen">
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
        <SupportSquare
          title="Getting Started"
          link="/support/getting-started"
        />
        <SupportSquare title="Pricing" link="/support/pricing" />
        <SupportSquare title="Roadmap" link="/support/roadmap" />
        <SupportSquare title="About Us" link="/support/about" />
        <SupportSquare title="Terms & Privacy" link="/support/terms" />
        <SupportSquare title="Contact" link="/support/contact" />
      </div>
    </div>
  );
}
