import React from 'react';
import style from './search.module.css';
import { AppContent } from '../Dashboards/AppContent';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { getCities } from '../../datasources/cities';

class SearchPage extends React.Component {
  state = {
    cities: [],
    filter: '',
  };

  handleOnChange = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <AppContent>
        <h3>Search for City</h3>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type City"
            value={this.state.filter}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Table striped bordered hover>
          {getCities()
            .filter(city => {
              return city.name.toLowerCase().includes(this.state.filter);
            })
            .map(city => {
              return (
                <tr>
                  <th>
                    <Link to={`search/${city.long}/${city.lat}`}>{city.name}</Link>
                  </th>
                </tr>
              );
            })}
        </Table>
      </AppContent>
    );
  }
}

export default SearchPage;
