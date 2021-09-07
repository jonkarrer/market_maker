import { useState } from "react";

export default function Button({ item }: { item: string }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className="gradient-box-small bg-white"
      onClick={() => setSelected(!selected)}
    >
      <div
        className={`text-center w-28 cursor-pointer z-20 h-full ${
          selected
            ? "text-white bg-splash rounded-none"
            : "text_gradient_splash rounded-lg"
        }`}
      >
        <a>{item}</a>
      </div>
    </div>
  );
}
