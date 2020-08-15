export function getWeatherForLocation(long, lat) {
  Promise.all([
    fetch('https://api.windy.com/api/point-forecast/v2', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lat: lat,
        lon: long,
        model: 'gfs',
        parameters: ['rh', 'pressure', 'temp', 'windGust', 'ptype'],
        levels: ['surface'],
        key: 'Gv1p6Lr8XUC97mGw62Rj4HaX3VoW99c0',
      }),
    }).then(r => r.json()),

    fetch('https://api.windy.com/api/point-forecast/v2', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lat: lat,
        lon: long,
        model: 'waveWatch',
        parameters: ['waves', 'windWaves', 'swell1', 'swell2'],
        levels: ['surface'],
        key: 'Gv1p6Lr8XUC97mGw62Rj4HaX3VoW99c0',
      }),
    }).then(r => r.json()),
  ])
    // .then(r => r.json())
    .then(([weather, waves]) => {
      console.log(weather);
      console.log(waves);

      return {
        humidity: weather['rh-surface'][0],
        temperature: weather['temp-surface'][0],
        pressure: weather['pressure-surface'][0],
        windSpeed: weather['gust-surface'][0],
        precipitation: weather['ptype-surface'][0],

        wavesSwell: waves['swell1-height-surface'][0],
        wavesSwell2: waves['swell2-height-surface'][0],
        waves: waves['waves-height-surface'][0],
        windWaves: waves['windWaves-height-surface'][0],
      };
    });
  //   .then(data => {
  //     console.log(data);
}

// export function getWavesForLocation(long, lat) {
//   return
//     .then(r => r.json())
//     .then(data => {
//       console.log(data);

//       return {
//         // ☝ nie wiem jak to dokładnie dodac, ale przydałyby się również takie parametry
//       };
//     });
// }
