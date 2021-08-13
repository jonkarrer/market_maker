import Gradient from "@/components/_Support/Gradient";
import Link from "next/link";
export default function Support() {
  return (
    <main>
      <Gradient pageName="Support" />
      <section>
        <Grid />
      </section>
    </main>
  );
}

const Grid = () => (
  <div className="wrapper grid grid-cols-2 gap-4 place-items-center md:grid-cols-3 md:gap-12 lg:gap-16 ">
    <Item
      name="Getting Started"
      image="/Support/start.svg"
      link="/support/start"
    />
    <Item name="Pricing" image="/Support/pricing.svg" link="/support/pricing" />
    <Item
      name="Account Settings"
      image="/Support/account.svg"
      link="/account"
    />
    <Item name="About Us" image="/Support/about.svg" link="/support/start" />
    <Item
      name="Terms & Conditions"
      image="/Support/terms.svg"
      link="/support/terms"
    />
    <Item name="Contact" image="/Support/contact.svg" link="/support/start" />
  </div>
);

interface IItem {
  name: string;
  image: string;
  link: string;
}

const Item = ({ name, image, link }: IItem) => (
  <Link href={link}>
    <div className="cursor-pointer border shadow-lg hover:shadow-2xl text-center grid place-items-center w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-64 lg:h-64 ">
      <img
        className="h-12 w-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
        src={image}
        alt="icon"
      />
      <p className="font-semibold lg:text-2xl">{name}</p>
    </div>
  </Link>
);
