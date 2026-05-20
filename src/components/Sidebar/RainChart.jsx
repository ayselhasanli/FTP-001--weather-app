import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Mock Data
const data = [
  { time: "10AM", percentage: 65 },
  { time: "11AM", percentage: 55 },
  { time: "12AM", percentage: 90 },
  { time: "01PM", percentage: 35 },
  { time: "02PM", percentage: 75 },
  { time: "03PM", percentage: 25 },
];

function RainChart() {
  return (
    <div className="w-full  flex justify-center items-center">
      <ComposedChart
        width={460}
        height={210}
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#232835"
        />

        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          stroke="#9ca3af"
          fontSize={14}
          dy={10}  
        />

        <YAxis
          type="number"
          domain={[0, 100]}
          ticks={[25, 65, 90]}
          tickFormatter={(value) => {
            if (value === 90) return "Rainy";
            if (value === 65) return "Sunny";
            if (value === 25) return "Heavy";
            return "";
          }}
          tickLine={false}
          axisLine={false}
          stroke="#9ca3af"
          fontSize={14}
        />

        <Tooltip cursor={false} />

        <Bar
          dataKey="percentage"
          barSize={6}
          fill="#b5cbe4"
          radius={[4, 4, 0, 0]}
        />

        <Line
          type="monotone"
          dataKey="percentage"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ r: 4, fill: "#b5cbe4", stroke: "#3b82f6", strokeWidth: 2 }}
          activeDot={{ r: 6 }}
        />
      </ComposedChart>
    </div>
  );
}

export default RainChart;
