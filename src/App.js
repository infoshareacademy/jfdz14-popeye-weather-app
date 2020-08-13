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
import { NotificationsPage } from "./ComponentsDashboard/NotificationsPage";
import { FavouritesPage } from "./ComponentsDashboard/FavouritesPage";
import SearchPage from "./ComponentsDashboard/SearchPage";
import { LocationPage } from "./ComponentsDashboard/LocationPage";
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
            <Route path="/signup" component={SignUpPage}></Route>
            <Route path="/home" component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// function Dashboard() {
//   return <h2>Dashboard</h2>;
// }

export default App;