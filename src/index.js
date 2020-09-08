import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/Baloo2-Regular.ttf';
import { cities } from './datasources/cities';
import store from './datasources/store/store';
import { setWeatherData } from './datasources/reducers/weatherData.reducer';

export const DATABASE_URL = 'https://popyeweather-352f0.firebaseio.com';

export const APIidNumber = '7cecfc716fc93e0c8d9c4dcc15cb0301';

const fetchedData = cities.map(city => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&exclude=hourly,minutely&appid=${APIidNumber}`,
  )
    .then(r => r.json())
    .then(data => {
      // console.log(data);
      return data;
    });
});

const allDataFromFetch = Promise.all(fetchedData)
  .then(data => {
    console.log(data, 'przed redux');
    return data.map((el, index) => {
      return {
        ...el,
        name: cities[index].name,
        country: cities[index].country,
      };
    });
  })
  .then(data => {
    store.dispatch(setWeatherData(data));
    console.log(data, 'w redux');
  });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
