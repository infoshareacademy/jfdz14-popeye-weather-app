import React from 'react';
import { AppContent } from '../Dashboards/AppContent';
import style from './currentLocation.module.css';
import { renderCityDetails } from '../SearchPages/renderCityDetails';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';
import LinearProgress from '@material-ui/core/LinearProgress';

class LocationPage extends React.Component {
  state = {
    long: null,
    lat: null,
    temperature: null,
    pressure: null,
    windSpeed: null,
    humidity: null,
    precipitation: null,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(
        {
          long: position.coords.longitude,
          lat: position.coords.latitude,
        },
        () =>
          getWeatherForLocation(this.state.long, this.state.lat).then(data =>
            // data => console.log(data.precipitation),
            this.setState({
              temperature: `${(data.temperature - 273.15).toFixed(0)} ℃`,
              pressure: `${(data.pressure / 100).toFixed(0)} hPa`,
              humidity: `${data.humidity.toFixed(1)} %`,
              windSpeed: `${data.windSpeed.toFixed(2)} m/s`,
              precipitation: `${data.precipitation} mm`,
            }),
          ),
      );
    });
  }
  render() {
    return (
      <AppContent>
        <div>
          {!this.state.long ? (
            <h4>
              {this.state.temperature}, {this.state.humidity}, {this.state.windSpeed},
              {this.state.precipitation}, {this.state.pressure}
            </h4>
          ) : (
            <LinearProgress />
          )}
        </div>
      </AppContent>
    );
  }
}

export default LocationPage;
