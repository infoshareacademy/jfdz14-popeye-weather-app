import React from 'react';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';
import { AppContent } from '../Dashboards/AppContent';
import LinearProgress from '@material-ui/core/LinearProgress';
// import { Alert } from 'react-bootstrap';
import { MetadataEntry } from '../SearchPages/SearchResulItem';
import style from './addLocation.module.css';
import { precipitationDescription } from '../SearchPages/SearchResulItem';

class AddedlocationDetails extends React.Component {
  state = {
    temperature: null,
    pressure: null,
    windSpeed: null,
    humidity: null,
    isLoading: true,
    errorDownloadingData: false,
    blockedGeolocation: false,
  };

  componentDidMount() {
    const { long, lat, id } = this.props.match.params;
    console.log(long, lat, 'key');

    getWeatherForLocation(long, lat).then(data => {
      if (data === 'error') {
        this.setState({
          errorDownloadingData: true,
        });
      } else {
        console.log(data, 'z getweathrer');
        this.setState({
          id,
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
    });
  }

  render() {
    return (
      <AppContent>
        {/* <h3>Weather in: {this.state.id}</h3> */}
        <div>
          {this.state.isLoading ? (
            <LinearProgress />
          ) : (
            <>
              <div className={style.currentPositionHeader}>
                <h2>Weather in: {this.state.id} </h2>
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

export default AddedlocationDetails;
