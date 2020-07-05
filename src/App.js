import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
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
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
      );
    }


function Dashboard() {
  return <h2>Dashboard</h2>;
}

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
