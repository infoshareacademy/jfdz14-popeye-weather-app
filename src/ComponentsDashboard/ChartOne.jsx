import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "../CSSForComponents/Chart.css";

const COLORS = ["#A45A52", "#00C49F", "#FFBB28", "#FF8042"];

const data = [
  {
    name: "mobile",
    usage: 70,
  },
  {
    name: "desktop",
    usage: 20,
  },
  {
    name: "tablets",
    usage: 10,
  },
];

export const ChartOne = () => {
  return (
    <PieChart width={150} height={150}>
      <Pie data={data} dataKey={"usage"}>
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} key={index} />
        ))}
      </Pie>
    </PieChart>
  );
};
