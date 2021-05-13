import Square from "@/components/support_pages/Square";
import Gradient from "@/components/support_pages/Gradient";
export default function Support() {
  return (
    <div className="h-auto md:h-screen lg:h-auto 2xl:pb-20">
      <Gradient title="Support" />
      <div
        id="squares-container"
        className="mx-std py-8 grid justify-items-center place-content-around gap-10 grid-cols-2 sm:gap-16 sm:-mt-36 sm:grid-cols-3 md:-mt-40 xl:-mt-44 2xl:gap-24 2xl:mx-auto max-w-screen-2xl"
      >
        <Square title="Sitemap" link="/support/sitemap" />
        <Square title="Pricing" link="/support/pricing" />
        <Square title="Roadmap" link="/support/roadmap" />
        <Square title="About Us" link="/support/about" />
        <Square title="Terms & Privacy" link="/support/terms" />
        <Square title="Contact" link="/support/contact" />
      </div>
    </div>
  );
}
