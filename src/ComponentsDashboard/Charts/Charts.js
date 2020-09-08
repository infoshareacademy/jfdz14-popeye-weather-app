import React from 'react';
import style from './Chart.module.css';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';

const Charts = () => (
  <div className={style.charts}>
    <ChartOne />
    {/* <ChartTwo /> */}
  </div>
);

export default Charts;
