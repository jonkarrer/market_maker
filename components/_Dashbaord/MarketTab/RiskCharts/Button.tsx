import { useState } from "react";

export default function Button({ item }: { item: string }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className="gradient-box-small bg-white dark:bg-black"
      onClick={() => setSelected(!selected)}
    >
      <div
        className={`dashboard_button w-20 lg:w-24 ${
          selected
            ? "text-white bg-splash rounded-none"
            : "text-black dark:text-white rounded-lg"
        }`}
      >
        <a>{item}</a>
      </div>
    </div>
  );
}
