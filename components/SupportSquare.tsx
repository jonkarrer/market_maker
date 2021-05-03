import Link from "next/link";
interface ISupport {
  title: string;
  link: string;
}

const SupportSquare = ({ title, link }: ISupport) => (
  <div>
    <Link href={link}>
      <div className="py-5 w-72 h-72 shadow-supp-boxes grid justify-items-center place-content-around cursor-pointer">
        <img src="/cogs.svg" alt="cog" />
        <h2 className="text-3xl">{title}</h2>
      </div>
    </Link>
  </div>
);

export default SupportSquare;
