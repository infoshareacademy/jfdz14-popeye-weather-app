import React from 'react';
import { DATABASE_URL } from '../../index';
import { AppContent } from '../Dashboards/AppContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Alert } from 'react-bootstrap';
import style from './addLocation.module.css';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

// import style from './currentLocation.module.css';
// import { precipitationDescription } from '../SearchPages/SearchResulItem';
// import { getWeatherForLocation } from '../../datasources/weatherForLocation';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { Alert } from 'react-bootstrap';
// import { MetadataEntry } from '../SearchPages/SearchResulItem';

class UsersLocation extends React.Component {
  state = {
    long: null,
    lat: null,
    cities: ['hhh'],
    isLoading: true,
    error: '',
    errorDownloadingData: false,
  };

  componentDidMount() {
    fetch(`${DATABASE_URL}/addedlocation.json`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const arrayCities = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key],
          };
        });
        this.setState({
          cities: arrayCities,
          isLoading: false,
        });
        console.log(arrayCities);
      })
      .catch(error => {
        this.setState({
          error,
          errorDownloadingData: true,
        });
      });
    // .then(console.log(arrayCities));
  }

  //           getWeatherForLocation(this.state.long, this.state.lat).then(data => {
  //             if (data === 'error') {
  //               this.setState({
  //                 errorDownloadingData: true,
  //               });
  //             } else {
  //               this.setState({
  //                 temperature: data.current.temp,
  //                 pressure: data.current.pressure,
  //                 humidity: data.current.humidity,
  //                 wind_speed: data.current.wind_speed,
  //                 wind_deg: data.current.wind_deg,
  //                 feels_like: data.current.feels_like,
  //                 dew_point: data.current.dew_point,
  //                 precipitation: data.current.weather[0],
  //                 isLoading: false,
  //               });
  //             }
  //           }),
  //       );
  //     },
  //     // else {
  //     //   this.setState({
  //     //     isLoading: false,
  //     //     blockedGeolocation: true,
  //     //   });

  //     //   return <h2>We cannot find your position 😢 </h2>;
  //     // }
  //     // },
  //     error =>
  //       this.setState(
  //         {
  //           isLoading: false,
  //           blockedGeolocation: true,
  //           error: error,
  //         },
  //         () => console.log(error),
  //       ),
  //   );
  // }
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

    return (
      <AppContent>
        <div>
          {this.state.isLoading ? (
            <LinearProgress />
          ) : (
            <>
              <h3>Added Locations:</h3>
              <Table className={style.searchResults} striped bordered hover>
                <tbody>
                  <td>Location</td>
                  <td>Add Date</td>

                  {this.state.cities.map(city => (
                    <tr key={city.id}>
                      <td>
                        <Link to={`search/${city.longitude}/${city.latitude}`}>
                          {city.location}
                        </Link>
                      </td>
                      <td>{city.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </div>
        {/* <div>
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
        </div> */}
      </AppContent>
    );
  }
}

export default UsersLocation;
