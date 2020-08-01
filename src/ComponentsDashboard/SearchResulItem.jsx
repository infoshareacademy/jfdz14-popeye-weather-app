import React from 'react';
import { AppContent } from './AppContent';
import { AddFavorites } from './AddFavorites';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

class SearchResultItem extends React.Component {
  state = {
    stacja: [],
  };

  componentDidMount() {
    fetch('https://danepubliczne.imgw.pl/api/data/synop')
      .then(response => response.json())
      .then(stacja =>
        this.setState({
          stacja,
        }),
      );
  }

  render() {
    const cityDetails = this.state.stacja.find(
      stacja => stacja.id_stacji === this.props.match.params.id,
    );

    return (
      <AppContent>
        {cityDetails && (
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://source.unsplash.com/random/180x100" />
            <Card.Body>
              <Card.Title>
                <div>
                  <h3>{cityDetails.stacja}</h3>
                  <Button variant="info" size="sm" onClick={AddFavorites}>Add to favorites</Button>
                </div>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Date of measurement: {cityDetails.data_pomiaru}</ListGroupItem>
              <ListGroupItem>Time of measurement: {cityDetails.godzina_pomiaru}</ListGroupItem>
              <ListGroupItem>Temperature in °C: {cityDetails.temperatura}</ListGroupItem>
              <ListGroupItem>Wind speed in Beaufort: {cityDetails.predkosc_wiatru}</ListGroupItem>
              <ListGroupItem>Wind direction: {cityDetails.kierunek_wiatru}</ListGroupItem>
              <ListGroupItem>Total precipitation: {cityDetails.suma_opadu}</ListGroupItem>
              <ListGroupItem>Pressure: {cityDetails.cisnienie}</ListGroupItem>
            </ListGroup>

            {/* <div><h2>{cityDetails.stacja}</h2></div> */}
          </Card>
        )}
      </AppContent>
    );
  }
}

export default SearchResultItem;
