import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './ComponentsDashboard/LoginPage';
import SignUpPage from './ComponentsDashboard/SignUpPage';
import SignInPage from './ComponentsDashboard/SignInPage';
import { Dashboard } from './ComponentsDashboard/Dashboard';
import { NotificationsPage } from './ComponentsDashboard/NotificationsPage';
import { FavouritesPage } from './ComponentsDashboard/FavouritesPage';
import SearchPage from './ComponentsDashboard/SearchPage';
import { LocationPage } from './ComponentsDashboard/LocationPage';
import SearchResultItem from './ComponentsDashboard/SearchResulItem';
import AddLocation from './ComponentsDashboard/AddLocation';
// import SignInPage from "./ComponentsDashboard/SignInPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/newlocation'>
            <AddLocation />
          </Route>
          <Route path='/notifications'>
            <NotificationsPage />
          </Route>
          <Route path='/favorites'>
            <FavouritesPage />
          </Route>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
          <Route path='/search/:id'component={SearchResultItem}>
          </Route>
          <Route path='/location'>
            <LocationPage />
          </Route>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route path='/signin'>
            <SignInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path='/home'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
