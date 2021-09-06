import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();

  const currentPath = router.pathname;

  return (
    <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6 xl:text-lg 2xl:text-2xl 2xl:space-x-8">
      <Option
        currentPath={currentPath}
        name="Market"
        link="/dashboard/market"
      />
      <Option
        currentPath={currentPath}
        name="Equities"
        link="/dashboard/equities"
      />
      <Option
        currentPath={currentPath}
        name="Options"
        link="/dashboard/options"
      />
      <Option
        currentPath={currentPath}
        name="Crypto"
        link="/dashboard/crypto"
      />
      <Option
        currentPath={currentPath}
        name="Futures"
        link="/dashboard/futures"
      />
      <Option
        currentPath={currentPath}
        name="Climate"
        link="/dashboard/climate"
      />
      <Option
        currentPath={currentPath}
        name="Portfolio"
        link="/dashboard/portfolio"
      />
      <Option currentPath={currentPath} name="Notes" link="/dashboard/notes" />
    </div>
  );
}

interface IOption {
  currentPath: string;
  name: string;
  link: string;
}
const Option = ({ currentPath, name, link }: IOption) => {
  const selected = "bg-subheading text-gradAqua px-3 pb-2 rounded-t";
  const base = "pb-2 text-white cursor-pointer";
  return (
    <div className={currentPath === link ? selected : base}>
      <Link href={link}>{name}</Link>
    </div>
  );
};
