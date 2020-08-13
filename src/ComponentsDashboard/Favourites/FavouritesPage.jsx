import React from 'react';
import style from './favourites.module.css';
import { AppContent } from '../Dashboards/AppContent';
import {getFavourites} from "../../datasources/favourites";
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
    getFavourites().then(x => {
      this.setState({cities: x});
    })
  }

  render() {
    console.log(this.state);
    return (
      <AppContent>
        <h1>Favourites</h1>
        {this.state.cities.map(city => (
          <p>{city.name}</p>
        ))}
      </AppContent>
    );
  }
}
export default FavouritesPage;
