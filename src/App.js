import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// import LoginPage from "./ComponentsDashboard/LoginPage";
// import SignUpPage from "./ComponentsDashboard/SignUpPage";
// import SignInPage from "./ComponentsDashboard/SignInPage";
import { Dashboard } from "./ComponentsDashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/location">Location</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/favourites">Favourites</NavLink>
            </li>
            <li>
              <NavLink to="/notifications">Notifications</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route exact path="/">
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

function Location() {
  return <h2>Current Location</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function Favourites() {
  return <h2>Favourites</h2>;
}

function Notifications() {
  return <h2>Notifications</h2>;
}

export default App;
