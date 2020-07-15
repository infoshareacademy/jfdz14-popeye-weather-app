import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import LoginPage from "./ComponentsDashboard/LoginPage";
import SignUpPage from "./ComponentsDashboard/SignUpPage";
import SignInPage from "./ComponentsDashboard/SignInPage";
import { Dashboard } from "./ComponentsDashboard/Dashboard";
import {NotificationsPage} from "./ComponentsDashboard/NotificationsPage";
import {FavouritesPage} from "./ComponentsDashboard/FavouritesPage";
import {SearchPage} from "./ComponentsDashboard/SearchPage";
import {LocationPage} from "./ComponentsDashboard/LocationPage";
// import SignInPage from "./ComponentsDashboard/SignInPage";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/notifications">
            <NotificationsPage />
          </Route>
          <Route path="/favorites">
            <FavouritesPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/location">
            <LocationPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// function Dashboard() {
//   return <h2>Dashboard</h2>;
// }


export default App;
