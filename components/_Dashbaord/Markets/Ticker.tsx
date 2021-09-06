import { useEffect } from "react";

interface ITrade {
  symbol: string;
  item: string;
}

export default function Ticker({ symbol, item }: ITrade) {
  useEffect(() => {
    let windowState: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    let theme: string = windowState ? "dark" : "light";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "3M",
      colorTheme: theme,
      trendLineColor: "rgba(41, 98, 255, 1)",
      underLineColor: "rgba(41, 98, 255, 0.3)",
      underLineBottomColor: "rgba(41, 98, 255, 0)",
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
    });
    let parent: any = document.getElementById(item);
    parent.appendChild(script);

    return () => parent.removeChild(parent.firstChild);
  });
  return (
    <div id={item} className="xl:w-60 xl:h-44 bg-dark">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}
