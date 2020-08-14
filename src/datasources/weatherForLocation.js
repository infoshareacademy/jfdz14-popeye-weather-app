export function getWeatherForLocation(long, lat) {
    return fetch('https://api.windy.com/api/point-forecast/v2', {
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
    })
        .then(r => r.json())
        .then(data => {
            return {
                humidity: data['rh-surface'][0],
                temperature: data['temp-surface'][0],
                pressure: data['pressure-surface'][0],
                windSpeed: data['gust-surface'][0],
                precipitation: data['ptype-surface'][0]
            };
        });
}