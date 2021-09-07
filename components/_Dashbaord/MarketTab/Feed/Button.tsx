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
        className={`dashboard_button w-16 text-xs ${
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
