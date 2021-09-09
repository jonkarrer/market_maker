import Link from "next/link";

interface IItem {
  name: string;
  image: string;
  link: string;
}
const Item = ({ name, image, link }: IItem) => (
  <Link href={link}>
    <div className="cursor-pointer border shadow-lg hover:shadow-2xl text-center grid place-items-center w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-64 lg:h-64 2xl:w-72 2xl:h-72 dark:bg-dark dark:border-none dark:hover:bg-offBlack">
      <img
        className="h-12 w-12 sm:w-16 sm:h-16 md:w-24 md:h-24 2xl:w-28 2xl:h-28"
        src={image}
        alt="icon"
      />
      <p className="font-semibold lg:text-2xl 2xl:text-3xl">{name}</p>
    </div>
  </Link>
);

export default Item;
