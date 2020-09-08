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

export const DATABASE_URL = 'https://popyeweather-352f0.firebaseio.com';

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

// const fetchUserAddedData = fetch(`${DATABASE_URL}/addedlocation.json`)
//   .then(res => res.json())
//   .then(data => {
//     // console.log(data);
//     const arrayCities = Object.keys(data).map(key => {
//       return {
//         id: key,
//         ...data[key],
//       };
//     });
//     return arrayCities;
//   })
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(async data => {
//     console.log(data, 'tutaj');

//     return Promise.all(
//       data.map(
//         city =>
//           fetch(
//             `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=hourly,minutely&appid=${APIidNumber}`,
//           )
//             .then(r => r.json())
//             .then(data => {
//               console.log(data);
//               return data;
//             }),

//         // .then((data)=>{
//         //   return data
//         // }),
//       ),
//     )
//       .then(data => {
//         console.log(data, 'tablica');

//         return data;
//       })
//       .then(data => {
//         return;
//       });

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

//tu jest za szybko return i zwraca zanim zostaną dostarczone dane z promisów
// console.log(newCitiesArray);
// return newCitiesArray;

// .then(data => {
//   console.log(data, 'maped');
//   return data;
// })
// .catch(error => {
//   throw new Error(error);
// });

// });

// console.log(allDataFromFetch);

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
