import { useSubscriptionContext } from "@/components/SubscripContext";
import { Children } from "utils/interfaces";

interface IPlan extends Children {
  name: string;
}

export default function Plan({ children, name }: IPlan) {
  const context = useSubscriptionContext();
  return (
    <div
      className={`shadow-xl hover:shadow-2xl border w-80 md:w-96 lg:w-auto lg:flex-1 ${
        context?.userSelection === name ? "gradient-box shadow-2xl z-10" : ""
      }`}
    >
      <div className="bg-white w-full dark:bg-black relative py-12 2xl:py-16 text-center grid gap-8 md:gap-5">
        {children}
        <div className="gradient-box z-10 lg:w-64">
          <button
            onClick={() => context?.setUserSelection(name)}
            className={`w-full ${
              context?.userSelection === name
                ? "bg-splash text-white dark:border-none"
                : "bg-white dark:bg-black dark:border-none"
            }`}
          >
            {`${name === "Free" ? "Always Free" : `Select ${name}`}`}
          </button>
        </div>
      </div>
    </div>
  );
}
