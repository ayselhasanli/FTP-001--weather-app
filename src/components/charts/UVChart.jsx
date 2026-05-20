import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function UVChart() {
  const uvData = [
    { value: 5.5 },  
    { value: 6.5 },  
  ];

  const COLORS = ["#3b82f6", "#232835"];  

  return (
    <div className="w-[200px] h-[100px] relative mx-auto my-[45px] ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={uvData}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={72}
            dataKey="value"
            stroke="none"
          >
            {uvData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export default UVChart;
