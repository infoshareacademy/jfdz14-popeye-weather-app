import { APIidNumber } from '../index';

export function getWeatherForLocation(long, lat) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${APIidNumber}`,
  )
    .then(r => {
      if (!r.ok) {
        return 'error';
      }
      return r.json();
    })
    .then(data => {
      // console.log(data);
      return data;
    });
}

// if(!r.ok){

// }

//   return fetch('https://api.windy.com/api/point-forecast/v2', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       lat: lat,
//       lon: long,
//       model: 'gfs',
//       parameters: ['rh', 'pressure', 'temp', 'windGust', 'ptype'],
//       levels: ['surface'],
//       key: 'm7zU1cmERbDVXbKfHCM3BW3z56DIoah0',
//     }),
//   })
//     .then(r => r.json())
//     .then(data => {
//       return {
//         humidity: data['rh-surface'][0],
//         temperature: data['temp-surface'][0],
//         pressure: data['pressure-surface'][0],
//         windSpeed: data['gust-surface'][0],
//         precipitation: data['ptype-surface'][0],
//       };
//     });
// }

// const getWeatherData = (long, lat) => {
//   fetch('https://api.windy.com/api/point-forecast/v2', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       lat: lat,
//       lon: long,
//       model: 'gfs',
//       parameters: ['rh', 'pressure', 'temp', 'windGust', 'ptype'],
//       levels: ['surface'],
//       key: 'm7zU1cmERbDVXbKfHCM3BW3z56DIoah0',
//     }),
//   })
//     .then(r => r.json())
//     .then(data => {
//       return {
//         humidity: data['rh-surface'][0],
//         temperature: data['temp-surface'][0],
//         pressure: data['pressure-surface'][0],
//         windSpeed: data['gust-surface'][0],
//         precipitation: data['ptype-surface'][0],
//       };
//     });
// };

// const getWavesData = (long, lat) => {
//   fetch('https://api.windy.com/api/point-forecast/v2', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       lat: lat,
//       lon: long,
//       model: 'wavewatch',
//       parameters: ['wave', 'swell'],
//       levels: ['surface'],
//       key: 'm7zU1cmERbDVXbKfHCM3BW3z56DIoah0',
//     }),
//   })
//     .then(r => r.json())
//     .then(data => {
//       return {
//         waves_heigth: data['waves_height-surface'],
//         waves_period: data['waves_period-surface'][0],
//         swell_waves: data['swell1_height-surface'][0],
//       };
//     });
// };

// export const getWeatherForLocation = (long, lat) => {
//   Promise.all([
//     getWeatherData(long, lat),
//     // getWavesData(long, lat)
//   ]).then(([weatherData]) => {
//     return { weatherData };
//   });
// };
