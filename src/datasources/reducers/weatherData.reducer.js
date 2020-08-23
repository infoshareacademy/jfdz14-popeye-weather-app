const initialState = [];

const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

export const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const setWeatherData = data => ({ type: SET_WEATHER_DATA, payload: data });
