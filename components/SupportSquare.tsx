import Link from "next/link";
interface ISupport {
  title: string;
  link: string;
}

const SupportSquare = ({ title, link }: ISupport) => (
  <div>
    <Link href={link}>
      <div className=" w-64 h-64 sm:py-5 sm:w-72 sm:h-72 shadow-supp-boxes grid justify-items-center place-content-around cursor-pointer">
        <img className="" src="/cogs.svg" alt="cog" />
        <p className="text-2xl font-medium">{title}</p>
      </div>
    </Link>
  </div>
);

export default SupportSquare;
