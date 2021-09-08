import { useRouter } from "next/router";
import Option from "./comps/Option";

export default function Navigation() {
  const router = useRouter();

  const currentPath = router.pathname;

  return (
    <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8 xl:text-lg 2xl:text-2xl 2xl:space-x-10">
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
