import React, { useState, useEffect } from 'react';
import style from './Chart.module.css';
// import { PieChart } from 'react-easy-chart';
// import { PieChart, Pie, Cell, LabelList, Tooltip, Label } from 'recharts';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { connect } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const COLORS = ['#ffe4c4', '#f0ffff', '#00FFFF', 'cadetblue'];

const data = [
  {
    date: '6.09.2020',
    C: 20,
  },
  {
    date: '7.09.2020',
    C: 18,
  },
  {
    date: '8.09.2020',
    C: 18,
  },
  {
    date: '9.09.2020',
    C: 21,
  },
  {
    date: '10.09.2020',
    C: 17,
  },
  {
    date: '11.09.2020',
    C: 18,
  },
  {
    date: '12.09.2020',
    C: 22,
  },
];

let renderLabel = data => {
  return data.name;
};

const ChartOne = ({ weather }) => {
  const [city, selectCity] = useState('Gdańsk');

  const handleSelectChange = e => {
    selectCity(e.target.value);
  };

  const tempData = weather.find(element => {
    return element.name === city;
  });
  // .daily.map(day => {
  //   return (day.dt - 273.15).toFixed(0);
  // });

  useEffect(() => {
    const selectedData = tempData.daily.map(day => {
      return (day.temp.day - 273.15).toFixed(0);
    });
    {
      console.log('wybrana temp: ', selectedData);
    }
  }, [city]);

  return (
    <>
      <div style={{ marginLeft: '400px' }}>
        <label htmlFor="cityList">Select City:</label>
        <select id="cityList" onChange={handleSelectChange}>
          {weather.map(city => {
            return (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            );
          })}
          ;
        </select>
        {console.log('wybrane miasto: ', city)}
        {console.log('wybrane pogoda: ', tempData)}
      </div>
      <div className={style.wrapper}>
        <h5 className={style.chartDescription}>Forecast temperature in Gdansk next 6 days</h5>
        <AreaChart width={1000} height={600} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="C" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  weather: state,
});
export default connect(mapStateToProps)(ChartOne);
