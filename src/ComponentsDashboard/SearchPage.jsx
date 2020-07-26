import React from "react";
import { AppContent } from "./AppContent";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

class SearchPage extends React.Component {
  state = {
    cities: [],
    filter: '',
  };

  componentDidMount() {
    fetch("https://danepubliczne.imgw.pl/api/data/synop")
      .then((response) => response.json())
      .then((cities) =>
        this.setState({
          cities: cities
        })
      );
  };

  handleOnChange = (e) => {
      this.setState({
          filter: e.target.value.toLowerCase()
      })
  }

  render() {
    return (
      <AppContent>
        <h1>MIASTO</h1>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Miasto"
            value={this.state.filter}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <ListGroup variant="flush">
          
            {this.state.cities
              .filter((city) => {
                  return city.stacja.toLowerCase().includes(this.state.filter)
              })
              .map((city) => {
                return <ListGroup.Item>{city.stacja}</ListGroup.Item>
                
              })}
          
        </ListGroup>
      </AppContent>
    );
  }
}

export default SearchPage;
