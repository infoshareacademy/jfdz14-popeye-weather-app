import React from 'react';
import style from './Chart.module.css';
// import { PieChart } from 'react-easy-chart';
import { PieChart, Pie, Cell, LabelList, Tooltip, Label } from 'recharts';

const COLORS = ['#ffe4c4', '#f0ffff', '#00FFFF'];

const data = [
  {
    name: 'mobile',
    usage: 70,
  },
  {
    name: 'desktop',
    usage: 20,
  },
  {
    name: 'tablets',
    usage: 10,
  },
];

const ChartOne = () => {
  return (
    <>
      <div className={style.wrapper}>
        <h4 className={style.chartDescription}>% of good weather in Europe</h4>
        <PieChart width={200} height={200}>
          <Label>any string or number</Label>
          <Tooltip className={style.chartOne} />

          <Pie data={data} dataKey={'usage'}>
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} key={index} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default ChartOne;
