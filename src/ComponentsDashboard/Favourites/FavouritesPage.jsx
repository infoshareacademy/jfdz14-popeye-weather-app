import React from 'react';
import style from './favourites.module.css';
import { AppContent } from '../Dashboards/AppContent';
// import Table from 'react-bootstrap/Table';
// import { FavoriteSharp } from '@material-ui/icons';

class FavouritesPage extends React.Component {
  state = {
    cities: [],
  };

  // actualFavorites = () => {
  //     const favourites = JSON.parse(localStorage.getItem('favourites');
  //     this.state.cities.filter(city => favourites.includes(city.name))
  //   // console.log(favourites)
  // }

  componentDidMount() {
    const favouriteCities = JSON.parse(localStorage.getItem('favourites')) || [];
    this.setState({ cities: favouriteCities });
  }

  render() {
    return (
      <AppContent>
        <h1>Favourites</h1>
        {this.state.cities.map(city => (
          <p>{city}</p>
        ))}
      </AppContent>
    );
  }
}
export default FavouritesPage;
