import React from 'react';
import { AppContent } from '../Dashboards/AppContent';
import style from './currentLocation.module.css';
import { renderCityDetails } from '../SearchPages/renderCityDetails';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Alert } from 'react-bootstrap';

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
    responseData: false,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        if (position) {
          this.setState(
            {
              long: position.coords.longitude,
              lat: position.coords.latitude,
            },
            () =>
              getWeatherForLocation(this.state.long, this.state.lat).then(
                // if(!data){
                //   this.setState({
                //     responseData: true,
                //   })
                // }

                data => {
                  if (data === 'error2') {
                    this.setState({
                      responseData: true,
                    });
                  } else {
                    this.setState({
                      temperature: data.current.temp,
                      pressure: data.current.pressure,
                      humidity: data.current.humidity,
                      windSpeed: data.current.wind_speed,
                      // precipitation: data.precipitation,
                      isLoading: false,
                    });
                  }
                },
              ),
          );
        } else {
          return <h2>We cannot find your position 😢 </h2>;
        }
      },
      error => console.log(error),
    );
  }
  render() {
    if (this.state.responseData) {
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
