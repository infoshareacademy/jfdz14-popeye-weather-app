/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './ComponentsDashboard/LoginPages/LoginPage';
import SignUpPage from './ComponentsDashboard/LoginPages/SignUpPage';
import SignInPage from './ComponentsDashboard/LoginPages/SignInPage';
import { Dashboard } from './ComponentsDashboard/Dashboards/Dashboard';
import { NotificationsPage } from './ComponentsDashboard/NotificationsPage/NotificationsPage';
import FavouritesPage from './ComponentsDashboard/Favourites/FavouritesPage';
import SearchPage from './ComponentsDashboard/SearchPages/SearchPage';
import { LocationPage } from './ComponentsDashboard/Currentlocation/LocationPage';
import SearchResultItem from './ComponentsDashboard/SearchPages/SearchResulItem';
import AddLocation from './ComponentsDashboard/AddLocation/AddLocation';

// import SignInPage from "./ComponentsDashboard/SignInPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/newlocation" component={AddLocation}></Route>
          <Route path="/notifications" component={NotificationsPage}></Route>
          <Route path="/favorites/" component={FavouritesPage}></Route>
          <Route exact path="/search" component={SearchPage}></Route>
          <Route path="/search/:id" component={SearchResultItem} />
          <Route path="/location" component={LocationPage}></Route>
          <Route exact path="/" component={LoginPage}></Route>
          <Route path="/signin" component={SignInPage}></Route>
          <Route path="/signup" component={SignUpPage}></Route>
          <Route path="/home" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
