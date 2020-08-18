import React from 'react';
import { AppContent } from '../Dashboards/AppContent';
import style from './currentLocation.module.css';
// import SearchResultItem from '../SearchPages/SearchResulItem';
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
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(
        {
          long: position.coords.longitude,
          lat: position.coords.latitude,
        },
        getWeatherForLocation(this.state.long, this.stare.lat),
      );
    });
  }

  render() {
    return (
      <AppContent>
        <div>
          <h4>
            {this.state.long ? (
              // `${this.state.long} , ${this.state.lat}`
              <SearchResultItem long={this.state.long} lat={this.state.lat} />
            ) : (
              <h2>You did not allow to see your position</h2>
            )}
          </h4>
        </div>
      </AppContent>
    );
  }
}

export default LocationPage;
