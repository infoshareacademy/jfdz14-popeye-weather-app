import React from "react";
import { BarChart, XAxis, Bar, Tooltip, Cell } from "recharts";
import "../CSSForComponents/Dashboard.css";
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

export const ChartTwo = () => {
  return (
    <BarChart
      className="chartOne"
      width={200}
      height={150}
      data={data}
      label={{ fill: "red", fontSize: 20, color: "pink" }}
    >
      <XAxis dataKey="name" />
      <Tooltip className="chartOne" />
      <Bar dataKey="usage" label={{ fill: "black", fontSize: 18 }}>
        {/* background={{ fill: "transparent" }}> */}
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} key={index} />
        ))}
      </Bar>
    </BarChart>
  );
};

// stroke = { colors[index]}
