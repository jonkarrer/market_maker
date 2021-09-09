import { Children } from "@/utils/interfaces";

interface IValue extends Children {
  name: string;
  color: string;
}

const Value = ({ children, name, color }: IValue) => (
  <span className="space-y-6 md:space-y-8">
    <h3 className={`font-normal ${color}`}>{name}</h3>
    {children}
  </span>
);
export default Value;
