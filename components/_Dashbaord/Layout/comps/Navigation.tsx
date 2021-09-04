import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();

  const currentPath = router.pathname;

  return (
    <div className="flex items-center space-x-8">
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
        name="Portfolio Review"
        link="/dashboard/portfolio"
      />
      <Option
        currentPath={currentPath}
        name="Note Creator"
        link="/dashboard/notes"
      />
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
