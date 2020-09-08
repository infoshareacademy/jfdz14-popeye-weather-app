import React from 'react';
import { DATABASE_URL } from '../../index';
import { AppContent } from '../Dashboards/AppContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Alert, Button } from 'react-bootstrap';
import style from './addLocation.module.css';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import AddedlocationDetails from './AddedLocationDetails';

// import style from './currentLocation.module.css';
// import { precipitationDescription } from '../SearchPages/SearchResulItem';
// import { getWeatherForLocation } from '../../datasources/weatherForLocation';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import { Alert } from 'react-bootstrap';
// import { MetadataEntry } from '../SearchPages/SearchResulItem';

class UsersLocation extends React.Component {
  state = {
    long: null,
    lat: null,
    cities: [],
    isLoading: true,
    error: '',
    empty: false,
    errorDownloadingData: false,
  };

  fetchData = () => {
    fetch(`${DATABASE_URL}/addedlocation.json`)
      .then(res => res.json())
      .then(data => {
        if (data === null) {
          console.log('pusty', data);
          return this.setState({
            empty: true,
          });
        }
        // console.log(data);
        const arrayCities = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key],
          };
        });
        this.setState({
          cities: arrayCities,
          isLoading: false,
        });
        console.log(arrayCities);
      })
      .catch(error => {
        this.setState({
          error,
          errorDownloadingData: true,
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleRemoveLocation = id => {
    fetch(`${DATABASE_URL}/addedlocation/${id}.json`, {
      method: 'DELETE',
    }).then(() => {
      this.fetchData();
    });
  };

  render() {
    if (this.state.empty) {
      return (
        <AppContent>
          <Alert variant="info" className={style.currentPositionHeader}>
            You did not add any location 😱
          </Alert>
        </AppContent>
      );
    }

    if (this.state.errorDownloadingData) {
      return (
        <AppContent>
          <Alert variant="info" className={style.currentPositionHeader}>
            Not possible to download data
            {this.state.error.message}
          </Alert>
        </AppContent>
      );
    }

    return (
      <AppContent>
        <div>
          {this.state.isLoading ? (
            <LinearProgress />
          ) : (
            <>
              <h3>Added Locations:</h3>
              <Table className={style.searchResults} striped bordered hover>
                <tbody>
                  <td>Location</td>
                  <td>Add Date</td>
                  <td>Remove</td>

                  {this.state.cities.map(city => (
                    <tr key={city.id}>
                      <td>
                        <Link
                          // id={city.id}
                          // long={city.longitude}
                          // lat={city.latitude}
                          to={`own-location/${city.id}/${city.longitude}/${city.latitude}`}
                        >
                          {city.location}
                        </Link>
                      </td>
                      <td>{city.date}</td>
                      <td>
                        <Button variant="info" onClick={() => this.handleRemoveLocation(city.id)}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </div>
      </AppContent>
    );
  }
}

export default UsersLocation;
