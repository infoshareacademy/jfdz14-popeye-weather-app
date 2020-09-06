import React from 'react';
import style from '../SearchPages/search.module.css';
import { AppContent } from '../Dashboards/AppContent';
import { getFavourites } from '../../datasources/favourites';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import SearchPage from '../SearchPages/SearchPage';
import { connect } from 'react-redux';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';
import { displayCelcius } from '../SearchPages/SearchPage';
import { displayPressure } from '../SearchPages/SearchPage';
import { Alert } from 'react-bootstrap';
import LinearProgress from '@material-ui/core/LinearProgress';

// import Table from 'react-bootstrap/Table';
// import { FavoriteSharp } from '@material-ui/icons';

class FavouritesPage extends React.Component {
  state = {
    cities: [],
    favCities: [],
    temperature: [],
    pressure: [],
    windSpeed: [],
    humidity: [],
    errorDownloadingData: false,
    loaded: false,
  };

  componentDidMount() {
    getFavourites().then(x => {
      this.setState({ cities: x }, () => {
        this.setState({
          loaded: true,
        });
      });
    });
  }

  // , () => {
  //   this.state.cities.map(city => {
  //       getWeatherForLocation(city.lat, city.long).then(data => {
  //         if (data === 'error') {
  //           this.setState({
  //             errorDownloadingData: true,
  //           });
  //         } else {
  //           this.setState(prevState => ({
  //             temperature: [...prevState.temperature, data.current.temp],
  //             pressure: [...prevState.pressure, data.current.pressure],
  //             humidity: [...prevState.humidity, data.current.humidity],
  //             // windSpeed: [...prevState.wind_speed, data.current.wind_speed],
  //             // precipitation: data.precipitation,
  //             loaded: true,
  //           }));
  //         }
  //       });
  //     });
  //   }),
  //     error => console.log(error);
  // });

  // actualFavorites = () => {
  //     const favourites = JSON.parse(localStorage.getItem('favourites');
  //     this.state.cities.filter(city => favourites.includes(city.name))
  //   // console.log(favourites)
  // }

  // componentDidMount() {

  // }

  // citiesToDisplay = () => {
  //   const cities = this.props.weather.filter(city => city.lat);
  // };

  render() {
    console.log(this.state.cities);
    console.log(this.props.weather);
    if (!this.state.loaded) {
      return (
        <AppContent>
          <LinearProgress />
        </AppContent>
      );
    }

    if (this.state.loaded) {
      return (
        <AppContent>
          <h3>Favourites</h3>
          <Table className={style.searchResults} striped bordered hover>
            <tbody>
              {this.state.cities.map(city => (
                <tr key={city.name}>
                  <td>
                    <Link to={`search/${city.long}/${city.lat}`}>{city.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Table className={style.searchResults} striped bordered hover> */}
          {/* <tbody>
          {this.state.cities.map((city, index) => {
            getWeatherForLocation(city.long, city.lat).then(data => {
              if (data === 'error') {
                console.log('error');
              }
              {
                return <p>{data.current.temp}stopni celciusza</p>;
                console.log('działa');
                console.log(data);
                console.log(data.current.temp);
                return (
                  <Alert variant="info" className={style.currentPositionHeader}>
                    {data.current.temp}
                  </Alert>
                );
              }
              //     <tr key={index}>
              //       <td>
              //         <Alert variant="info" className={style.currentPositionHeader}>
              //           {data.current.temp}
              //           <br />
              //         </Alert>
              //         <Link key={index} to={`search/${city.lon}/${city.lat}`}>
              //           {data.current.clouds}
              //           <span className={style.temperature}>{data.current.temp}</span>
              //           <span className={style.pressure}>{data.current.pressure}</span>
              //         </Link>
              //       </td>
              //     </tr>;
              //   }
              // });
            });
          })}

          {/* // </tbody> */}
          {/* </Table> */}
        </AppContent>
      );
    }
  }
}

// export default FavouritesPage;

const mapStateToProps = state => ({
  weather: state,
});

export default connect(mapStateToProps)(FavouritesPage);

// const list = this.props.weather[country];
// return (
//   <React.Fragment key={index}>
//     <tr>
//       <th>{item.country}</th>
//     </tr>
/* {list.map((city, index) => {
    return (
      <tr key={index}>
        <td>
          <Link key={index} to={`search/${city.lon}/${city.lat}`}>
            {city.name}
            <span className={style.temperature}>
              {displayCelcius(city.daily[0].temp.day)}
            </span>
            <span className={style.pressure}>
              {displayPressure(city.daily[0].pressure)}
            </span>
          </Link>
        </td>
      </tr>
    );
  })} */
// </React.Fragment>
//       );
//     })}
//   </tbody>
