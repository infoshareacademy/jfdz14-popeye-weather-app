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
    isLoading: true,
    responseData: false,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      if (position) {
        this.setState(
          {
            long: position.coords.longitude,
            lat: position.coords.latitude,
          },
          () =>
            getWeatherForLocation(this.state.long, this.state.lat)
              // .then(response => {
              //   if (!response.ok) {
              //     this.setState({
              //       responseData: true,
              //     });
              //   }
              //   response.json();
              // })

              .then(data =>
                this.setState({
                  // temperature: `${(data.temperature - 273.15).toFixed(0)} ℃`,
                  // pressure: `${(data.pressure / 100).toFixed(0)} hPa`,
                  // humidity: `${data.humidity.toFixed(1)} %`,
                  // windSpeed: `${data.windSpeed.toFixed(2)} m/s`,
                  // precipitation: `${data.precipitation} mm`,
                  // isLoading: false,

                  temperature: data.temperature,
                  pressure: data.pressure,
                  humidity: data.humidity,
                  windSpeed: data.windSpeed,
                  precipitation: data.precipitation,
                  isLoading: false,
                }),
              ),
        );
      } else {
        return <h2>We cannot find your position 😢 </h2>;
      }
    });
  }
  render() {
    if (this.state.responseData) {
      return <h1> not possible to download data</h1>;
    }
    return (
      <AppContent>
        <div>
          {this.state.isLoading ? (
            <LinearProgress />
          ) : (
            <>
              <div className={style.currentPositionHeader}>
                <h2>Weather in your current position: </h2>
              </div>
              <div>{renderCityDetails(this.state)}</div>
            </>
          )}
        </div>
      </AppContent>
    );
  }
}

export default LocationPage;

// const renderCurrentPosition = () => (
//   <>
//     <div>
//       <h2>Weather in your current position: </h2>
//     </div>
//     <div>{renderCityDetails('dom', this.state)}</div>
//   </>
// );
