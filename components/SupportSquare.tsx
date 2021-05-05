import Link from "next/link";

interface ISupport {
  title: string;
  link: string;
}

const SupportSquare = ({ title, link }: ISupport) => (
  <div>
    <Link href={link}>
      <div className=" bg-white rounded-3xl h-square w-square py-3 sm:py-5 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 shadow-supp-boxes grid justify-items-center place-content-around cursor-pointer">
        <img
          className="w-3/5 sm:w-24 md:w-28 lg:w-36"
          src="/cogs.svg"
          alt="cog"
        />
        <p className="text-lg sm:text-2xl lg:text-3xl font-medium">{title}</p>
      </div>
    </Link>
  </div>
);

export default SupportSquare;
