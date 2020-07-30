import React from 'react';
import { AppContent } from './AppContent';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

class SearchPage extends React.Component {
  state = {
    cities: [],
    filter: '',
  };

  componentDidMount() {
    fetch('https://danepubliczne.imgw.pl/api/data/synop')
      .then(response => response.json())
      .then(cities =>
        this.setState({
          cities,
        }),
      );
  }

  handleOnChange = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <AppContent>
        <h1>City</h1>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type City"
            value={this.state.filter}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Table striped bordered hover>
          {this.state.cities
            .filter(city => {
              return city.stacja.toLowerCase().includes(this.state.filter);
            })
            .map(city => {
              return (
                <tr>
                  <th>
                    <Link to={`search/${city.id_stacji}`}>{city.stacja}</Link>
                  </th>
                  {/* <th>{city.stacja}</th> */}
                </tr>
              );
            })}
        </Table>
      </AppContent>
    );
  }
}

export default SearchPage;
