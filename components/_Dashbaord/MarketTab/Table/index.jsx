import { ResponsiveStream } from "@nivo/stream";

export default function Table({ data }) {
  return (
    <div className="grid gap-2">
      <h6 className="text_gradient_splash 2xl:text-xl">Today's Top Movers</h6>
      <div className="bg-gray-500 w-80 h-32 lg:h-36 xl:h-40 lg:w-72 2xl:w-80 2xl:h-54">
        <ResponsiveStream
          data={data}
          keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
          margin={{ top: 30, right: 40, bottom: 30, left: 40 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -40,
          }}
          offsetType="silhouette"
          colors={{ scheme: "nivo" }}
          fillOpacity={0.85}
          borderColor={{ theme: "background" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#2c998f",
              size: 4,
              padding: 2,
              stagger: true,
            },
            {
              id: "squares",
              type: "patternSquares",
              background: "inherit",
              color: "#e4c912",
              size: 6,
              padding: 2,
              stagger: true,
            },
          ]}
          fill={[
            {
              match: {
                id: "Paul",
              },
              id: "dots",
            },
            {
              match: {
                id: "Marcel",
              },
              id: "squares",
            },
          ]}
          dotSize={8}
          dotColor={{ from: "color" }}
          dotBorderWidth={2}
          dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: "#999999",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
