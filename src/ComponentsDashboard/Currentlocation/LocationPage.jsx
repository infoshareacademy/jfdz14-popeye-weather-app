import React from 'react';
import { AppContent } from '../Dashboards/AppContent';
import style from './currentLocation.module.css';
import { precipitationDescription } from '../SearchPages/SearchResulItem';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Alert } from 'react-bootstrap';
import { MetadataEntry } from '../SearchPages/SearchResulItem';

class LocationPage extends React.Component {
  state = {
    long: null,
    lat: null,
    temperature: null,
    pressure: null,
    windSpeed: null,
    humidity: null,
    // precipitation: null,
    isLoading: true,
    errorDownloadingData: false,
    blockedGeolocation: false,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        // if (position) {
        this.setState(
          {
            long: position.coords.longitude,
            lat: position.coords.latitude,
          },
          () =>
            getWeatherForLocation(this.state.long, this.state.lat).then(data => {
              if (data === 'error') {
                this.setState({
                  errorDownloadingData: true,
                });
              } else {
                this.setState({
                  temperature: data.current.temp,
                  pressure: data.current.pressure,
                  humidity: data.current.humidity,
                  wind_speed: data.current.wind_speed,
                  wind_deg: data.current.wind_deg,
                  feels_like: data.current.feels_like,
                  dew_point: data.current.dew_point,
                  precipitation: data.current.weather[0],
                  isLoading: false,
                });
              }
            }),
        );
      },
      // else {
      //   this.setState({
      //     isLoading: false,
      //     blockedGeolocation: true,
      //   });

      //   return <h2>We cannot find your position 😢 </h2>;
      // }
      // },
      error =>
        this.setState(
          {
            isLoading: false,
            blockedGeolocation: true,
            error: error,
          },
          () => console.log(error),
        ),
    );
  }
  render() {
    if (this.state.errorDownloadingData) {
      return (
        <AppContent>
          <Alert
            variant="info"
            // className="text-center"
            className={style.currentPositionHeader}
          >
            Not possible to download data
          </Alert>
        </AppContent>
      );
    }

    if (this.state.blockedGeolocation) {
      return (
        <AppContent>
          <Alert variant="info" className={style.currentPositionHeader}>
            We cannot find your position 😢
            <br />
            {this.state.error.message && this.state.error.message}
          </Alert>
        </AppContent>
      );
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
              <div className={style.metadata}>
                <MetadataEntry name="Temperature">
                  {(this.state.temperature - 273.15).toFixed(0)} ℃
                </MetadataEntry>
                <MetadataEntry name="Feels like">
                  {console.log(this.state)}
                  {(this.state.feels_like - 273.15).toFixed(0)} ℃
                </MetadataEntry>
                <MetadataEntry name="Dew Point">
                  {(this.state.dew_point - 273.15).toFixed(0)} ℃
                </MetadataEntry>
                <MetadataEntry name="Pressure">{this.state.pressure} hPa</MetadataEntry>
                <MetadataEntry name="Humidity">{this.state.humidity}%</MetadataEntry>
                <MetadataEntry name="Wind speed">{this.state.wind_speed} m/s</MetadataEntry>
                <MetadataEntry name="Wind direction">{this.state.wind_deg} ° </MetadataEntry>
                <MetadataEntry name="Precipitation">
                  {precipitationDescription(this.state.precipitation)}
                </MetadataEntry>
              </div>
            </>
          )}
        </div>
      </AppContent>
    );
  }
}

export default LocationPage;
