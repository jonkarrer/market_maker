import Link from "next/link";

interface IOption {
  currentPath: string;
  name: string;
  link: string;
}
export default function Option({ currentPath, name, link }: IOption) {
  const selected = "bg-subheading text-gradAqua px-3 pb-2 rounded-t";
  const base = "pb-2 text-white cursor-pointer";
  return (
    <div className={currentPath === link ? selected : base}>
      <Link href={link}>{name}</Link>
    </div>
  );
}
