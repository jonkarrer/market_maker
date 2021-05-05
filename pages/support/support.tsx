import SupportSquare from "@/components/SupportSquare";
import Gradient from "@/components/Gradient";
export default function Support() {
  return (
    <div className="h-auto sm:h-screen lg:h-auto">
      <Gradient title="Support" />
      <div
        id="squares-container"
        className="mx-std py-8 grid justify-items-center place-content-around gap-10 grid-cols-2 sm:gap-16 sm:-mt-28 md:-mt-32 xl:-mt-36 sm:grid-cols-3"
      >
        <SupportSquare title="Sitemap" link="/support/sitemap" />
        <SupportSquare title="Pricing" link="/support/pricing" />
        <SupportSquare title="Roadmap" link="/support/roadmap" />
        <SupportSquare title="About Us" link="/support/about" />
        <SupportSquare title="Terms & Privacy" link="/support/terms" />
        <SupportSquare title="Contact" link="/support/contact" />
      </div>
    </div>
  );
}
