import React from 'react';
import style from './Chart.module.css';
// import { PieChart } from 'react-easy-chart';
import { PieChart, Pie, Cell, LabelList, Tooltip, Label } from 'recharts';

const COLORS = ['#ffe4c4', '#f0ffff', '#00FFFF', 'cadetblue'];

const data = [
  {
    name: 'great',
    usage: 50,
  },
  {
    name: 'good',
    usage: 20,
  },
  {
    name: 'so-so',
    usage: 20,
  },
  {
    name: 'bad',
    usage: 10,
  },
];

let renderLabel = data => {
  return data.name;
};

const ChartOne = () => {
  return (
    <>
      <div className={style.wrapper}>
        <h5 className={style.chartDescription}>% of good weather in Europe</h5>
        <PieChart width={240} height={190}>
          <Tooltip className={style.chartOne} />

          <Pie data={data} dataKey={'usage'} label={renderLabel} paddingAngle={1}>
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
