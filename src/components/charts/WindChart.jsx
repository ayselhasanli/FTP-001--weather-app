import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";
const windData = [
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 6 },
  { value: 7 },
  { value: 9 },
  { value: 11 },
  { value: 12 },
  { value: 10 },
  { value: 8 },
  { value: 6 },
  { value: 5 },
  { value: 3 },
  { value: 2 },
];

export function WindChart() {
  return (
    <div className="w-full h-[100px] my-[45px]">  
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={windData} margin={{ bottom: 0, top: 10 }}>
          <defs>
            <linearGradient id="windGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Bar
            dataKey="value"
            fill="url(#windGradient)"
            barSize={4}  
            radius={[2, 2, 2, 2]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


export default WindChart;