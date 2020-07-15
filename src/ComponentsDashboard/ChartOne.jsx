import React from "react";
import { PieChart, Pie } from "recharts";

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
      <Pie data={data} dataKey={"usage"}></Pie>
    </PieChart>
  );
};
