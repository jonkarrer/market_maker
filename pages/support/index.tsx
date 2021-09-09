import Gradient from "@/components/_Support/Gradient";
import Item from "@/components/_Support/Main/Item";

const Support = () => (
  <main>
    <Gradient pageName="Support" />
    <section>
      <div className="wrapper grid grid-cols-2 gap-4 place-items-center md:grid-cols-3 md:gap-12 lg:gap-16 ">
        <Item
          name="Getting Started"
          image="/Support/start.svg"
          link="http://docs.marketmakerlite.com/"
        />
        <Item
          name="Pricing"
          image="/Support/pricing.svg"
          link="/support/pricing"
        />
        <Item
          name="Account Settings"
          image="/Support/account.svg"
          link="/account"
        />
        <Item
          name="About Us"
          image="/Support/about.svg"
          link="/support/about"
        />
        <Item
          name="Terms & Conditions"
          image="/Support/terms.svg"
          link="/support/terms"
        />
        <Item
          name="Contact"
          image="/Support/contact.svg"
          link="/support/contact"
        />
      </div>
    </section>
  </main>
);

export default Support;
