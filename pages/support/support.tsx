import SupportSquare from "@/components/SupportSquare";
import Gradient from "@/components/Gradient";
export default function Support() {
  return (
    <div className="h-screen">
      <Gradient />
      <div
        id="squares-container"
        className="mx-std sm:-mt-20 md:-mt-28 grid justify-items-center place-content-around gap-12 sm:gap-16 grid-cols-2 sm:grid-cols-3"
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
