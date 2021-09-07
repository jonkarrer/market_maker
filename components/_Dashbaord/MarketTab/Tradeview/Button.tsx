import { Dispatch, SetStateAction } from "react";

interface IButton {
  item: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export default function Button({ item, selected, setSelected }: IButton) {
  return (
    <div
      className="gradient-box-small bg-white"
      onClick={() => setSelected(item)}
    >
      <div
        className={`text-center w-20 cursor-pointer z-20 h-full ${
          selected === item
            ? "text-white bg-splash rounded-none"
            : "text_gradient_splash rounded-lg"
        }`}
      >
        <a>{item}</a>
      </div>
    </div>
  );
}
