import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { AppContent } from './AppContent';
import FormInput from './FormInput';
class AddLocation extends React.Component {
  state = {
    stacja: '',
    data_pomiaru: '',
    godzina_pomiaru: '',
    temperatura: '',
    predkosc_wiatru: '',
    kierunek_wiatru: '',
    wilgotnosc_wzgledna: '',
    suma_opadu: '',
    cisnienie: '',
  };

  handleOnChange = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  handleSubmitNewLocation = e => {
    const { stacja } = this.state;

    e.preventDefault();
    localStorage.setItem(stacja, JSON.stringify(this.state));
    this.setState({
      stacja: '',
      data_pomiaru: '',
      godzina_pomiaru: '',
      temperatura: '',
      predkosc_wiatru: '',
      kierunek_wiatru: '',
      wilgotnosc_wzgledna: '',
      suma_opadu: '',
      cisnienie: '',
    });
  };

  render() {
    return (
      <AppContent>
        <Form onSubmit={this.handleSubmitNewLocation}>
          <FormInput
            description={'City'}
            required
            name="stacja"
            type="text"
            placeholder="Enter city name"
            onInputChange={this.handleOnChange}
            value={this.state.stacja}
          />
          <FormInput
            description={'Date'}
            required
            name="data_pomiaru"
            type="date"
            placeholder="Enter today's date"
            onInputChange={this.handleOnChange}
            value={this.state.stacja}
          />
          {/* <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Date:
              </Form.Label>
              <Col>
                <Form.Control
                  required
                  onChange={this.handleOnChange}
                  value={this.state.data_pomiaru}
                  name="data_pomiaru"
                  type="date"
                  placeholder="Enter today's date"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Time:
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.godzina_pomiaru}
                  name="godzina_pomiaru"
                  type="time"
                  placeholder="Enter time"
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Temperature:
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.temperatura}
                  name="temperatura"
                  type="number"
                  placeholder="Enter temperature in °C"
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Wind speed:
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.predkosc_wiatru}
                  name="predkosc_wiatru"
                  type="number"
                  placeholder="Enter wind speed in km/h"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Wind direction:
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.kierunek_wiatru}
                  name="kierunek_wiatru"
                  type="text"
                  placeholder="Enter wind direction"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Humidity:
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.wilgotnosc_wzgledna}
                  name="wilgotnosc_wzgledna"
                  type="number"
                  placeholder="Enter humidity"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Pressure:
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={this.handleOnChange}
                  value={this.state.cisnienie}
                  name="cisnienie"
                  type="number"
                  placeholder="Enter atmospheric pressure in hPa"
                />
              </Col>
            </Form.Row>
          </Form.Group> */}

          <Button
            variant="primary"
            type="submit"
            //  onClick={this.handleSubmitNewLocation}
          >
            Submit
          </Button>
        </Form>
      </AppContent>
    );
  }
}

export default AddLocation;
