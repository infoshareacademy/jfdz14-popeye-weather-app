import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/Baloo2-Regular.ttf';
import firebase from 'firebase';
import { cities } from './datasources/cities';
import store from './datasources/store/store';
import { setWeatherData } from './datasources/reducers/weatherData.reducer';

// const firebaseConfig = {
//   apiKey: "AIzaSyBIe1o8mvKeSjXHT0PSwko0Y27o7flM3Bg",
//   authDomain: "popyeweather-352f0.firebaseapp.com",
//   databaseURL: "https://popyeweather-352f0.firebaseio.com",
//   projectId: "popyeweather-352f0",
//   storageBucket: "popyeweather-352f0.appspot.com",
//   messagingSenderId: "824948431301",
//   appId: "1:824948431301:web:8fa0e89a8bb5a1c03793ac",
//   measurementId: "G-CHWD30XWMZ"
// };

export const APIidNumber = '79046bd50d9c29a85ccfe64d72c81584';

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
    console.log(data);
  });

// });

// console.log(allDataFromFetch);

export const DATABASE_URL = 'https://popyeweather-352f0.firebaseio.com';

// firebase.initializeApp(firebaseConfig);

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
