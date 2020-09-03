import React from 'react';
import style from '../SearchPages/search.module.css';
import { AppContent } from '../Dashboards/AppContent';
import { getFavourites } from '../../datasources/favourites';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import SearchPage from '../SearchPages/SearchPage';
import { connect } from 'react-redux';

// import Table from 'react-bootstrap/Table';
// import { FavoriteSharp } from '@material-ui/icons';

class FavouritesPage extends React.Component {
  constructor(props) {
    super(props);
    getFavourites().then(x => {
      this.setState({ cities: x }, () => {
        this.setState({ favCities: this.props.weather.map(city => city.lat) });
      });
    });
    this.state = {
      cities: [],
      favCities: [],
    };
  }

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
    console.log(this.state.favCities);
    return (
      <AppContent>
        <h3>Favourites</h3>
        {this.state.cities.map(city => {
          // {
          //   console.log(city);
          // }
          return <p>{city.name}</p>;
        })}
        {/* {this.state.cities.map(city => {
          if (this.state.favCities.includes(city.lat)) {
            console.log(city.name);
            console.log(city);
            return <p>{this.props.weather[0].country}</p>;
          }
        })} */}

        {/* <h3>Favourites</h3>
       {this.state.cities.map(city => { */}
        {/*     
    //       console.log(city);
    //     }
    //     return <p>{city.name}</p>;
    //   })} */}

        {
          /* <Table className={style.searchResults} striped bordered hover>
          <tbody>
            {this.state.cities.map(city => {
              this.props.weather.filter(
                (item, index) => {
                  if (this.props.weather[index].includes(city.lat)) {
                    return <p>{(item, this.props.weather[index].country)}</p>;
                  }
                },
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
          // </Table> */}
          // </AppContent>
          // );
        }
      </AppContent>
    );
  }
}
// export default FavouritesPage;

const mapStateToProps = state => ({
  weather: state,
});

export default connect(mapStateToProps)(FavouritesPage);
