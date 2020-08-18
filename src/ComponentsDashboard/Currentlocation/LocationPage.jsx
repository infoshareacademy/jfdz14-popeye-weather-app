import React from 'react';
import { AppContent } from '../Dashboards/AppContent';
import style from './currentLocation.module.css';
import SearchResultItem from '../SearchPages/SearchResulItem';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';

// export function LocationPage() {
//   return <AppContent>
//     <h3>Current Location</h3>
//   </AppContent>;
// }

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
          <h4>
            {/* {this.state.long}, {this.state.lat},  */}
            {this.state.temperature}, {this.state.humidity}, {this.state.windSpeed},
            {this.state.precipitation}, {this.state.pressure}
            {/* <SearchResultItem long={this.state.long} lat={this.state.lat} /> */}
            {/* {this.state.long ? (
              // `${this.state.long} , ${this.state.lat}`
              <SearchResultItem long={this.state.long} lat={this.state.lat} />
            ) : ( */}
            {/* <h2>You did not allow to see your position</h2> */}
            {/* )} */}
          </h4>
        </div>
      </AppContent>
    );
  }
}

export default LocationPage;
