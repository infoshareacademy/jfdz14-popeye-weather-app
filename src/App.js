/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './ComponentsDashboard/LoginPages/LoginPage';
import SignUpPage from './ComponentsDashboard/LoginPages/SignUpPage';
import SignInPage from './ComponentsDashboard/LoginPages/SignInPage';

import { NotificationsPage } from './ComponentsDashboard/NotificationsPage/NotificationsPage';
import FavouritesPage from './ComponentsDashboard/Favourites/FavouritesPage';
import SearchPage from './ComponentsDashboard/SearchPages/SearchPage';
import LocationPage from './ComponentsDashboard/Currentlocation/LocationPage';
import SearchResultItem from './ComponentsDashboard/SearchPages/SearchResulItem';
import AddLocation from './ComponentsDashboard/AddLocation/AddLocation';
import Dashboard from './ComponentsDashboard/Dashboards/Dashboard';

// import SignInPage from "./ComponentsDashboard/SignInPage";

class App extends React.Component {
  state = {
    fetchedData: [],
  };
  componentDidMount() {
    // fetch('https://api.windy.com/api/point-forecast/v2', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     lat: 49.809,
    //     lon: 16.787,
    //     model: 'gfs',
    //     parameters: ['wind', 'dewpoint', 'rh', 'pressure'],
    //     levels: ['surface', '800h', '300h'],
    //     key: 'Gv1p6Lr8XUC97mGw62Rj4HaX3VoW99c0',
    //   }),
    // })
    //   .then(r => r.json())
    //   .then(data => console.log(data));
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/newlocation" component={AddLocation}></Route>
            <Route path="/notifications" component={NotificationsPage}></Route>
            <Route path="/favorites/" component={FavouritesPage}></Route>
            <Route exact path="/search" component={SearchPage}></Route>
            <Route path="/search/:long/:lat" component={SearchResultItem} />
            <Route path="/location" component={LocationPage}></Route>
            <Route exact path="/" component={LoginPage}></Route>
            <Route path="/signin" component={SignInPage}></Route>
            <Route path="/signup" component={() => <SignUpPage isSignUp /> }></Route>
            <Route path="/home" component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
