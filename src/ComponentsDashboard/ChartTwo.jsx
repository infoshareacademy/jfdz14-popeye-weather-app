import React from "react";
import { BarChart, XAxis, Bar, Tooltip } from "recharts";
import "../CSSForComponents/Dashboard.css";

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
    // <BarChart width={} height={"10vh"} data={data}>
    <BarChart
      width={200}
      height={150}
      data={data}
      label={{ fill: "red", fontSize: 20 }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <Bar dataKey="usage" fill="navy" />
      {/* // background={{ fill: "#eee" }} /> */}
    </BarChart>
  );
};
