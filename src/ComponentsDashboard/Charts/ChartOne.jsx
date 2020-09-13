import React, { useState, useEffect } from 'react';
import style from './Chart.module.css';

import { connect } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ChartOne = props => {
  console.log('weather', props.weather);

  const [city, selectCity] = useState('Gdańsk');
  const [tempData, setTempData] = useState([20, 24, 23, 20, 19, 25, 17]);

  const handleSelectChange = e => {
    e.preventDefault();
    selectCity(e.target.value);
  };

  const findSelectedCityWeather = () => {
    const newCityWeather = props.weather.find(element => {
      return element.name === city;
    });
    return newCityWeather;
  };

  useEffect(() => {
    const newTempData = findSelectedCityWeather();
    console.log('ddd', newTempData);
    const d = new Date();
    setTempData(
      newTempData.daily.map((day, index) => {
        return {
          temp: parseInt((day.temp.day - 272.15).toFixed(0)),
          date: `${d.getDate() + index}: ${d.getMonth()}: ${d.getFullYear()}`,
        };
      }),
    );
  }, [city]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginLeft: '400px' }}>
        <label htmlFor="cityList">Select City:</label>
        <select id="cityList" onChange={handleSelectChange}>
          {props.weather.map(city => {
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
      <br />
      <div className={style.wrapper}>
        <h5
          className={style.chartDescription}
        >{`Forecast temperature in ${city} in next 7 days`}</h5>
        <AreaChart width={1700} height={600} data={tempData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="temp" stroke="#23395d" fill="#0066cc" />
        </AreaChart>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  weather: state,
});
export default connect(mapStateToProps)(ChartOne);
