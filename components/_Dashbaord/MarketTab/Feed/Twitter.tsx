import { useEffect } from "react";

export default function Twitter() {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);
  return (
    <div className="h-120 lg:h-140 xl:h-160 2xl:h-180 overflow-scroll">
      <div></div>
      <a
        className="twitter-timeline"
        href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
      >
        Tweets by TwitterDev
      </a>
    </div>
  );
}
