import { createStore } from 'redux';
import { weatherData } from '../reducers/weatherData.reducer';

const store = createStore(
  weatherData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
