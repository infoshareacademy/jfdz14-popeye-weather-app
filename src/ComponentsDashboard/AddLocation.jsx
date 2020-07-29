import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { AppContent } from './AppContent';

class AddLocation extends React.Component {
  state = {
    id_stacji: '',
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
  // handleOnChange = e => {
  //   this.setState({
  //     e.target.name: e.target.value,
  //   })
  // };

  handleSubmitNewLocation = e => {
    e.preventDefault();
    console.log('location');
  };

  render() {
    return (
      <AppContent>
        {/* <legend>Add new location:</legend> */}
        <Form>
          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                City:
              </Form.Label>
              <Col>
                <Form.Control name='stacja' type='text' placeholder='Enter city name' required />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                Date:
              </Form.Label>
              <Col>
                <Form.Control type='date' placeholder="Enter today's date" required />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                Time:
              </Form.Label>
              <Col>
                <Form.Control type='time' placeholder='Enter time' required />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                Temperature:
              </Form.Label>
              <Col>
                <Form.Control type='number' placeholder='Enter temperature in °C' required />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                Wind speed:
              </Form.Label>
              <Col>
                <Form.Control type='number' placeholder='Enter wind speed in km/h' />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                Wind direction:
              </Form.Label>
              <Col>
                <Form.Control type='text' placeholder='Enter wind direction' />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                Humidity:
              </Form.Label>
              <Col>
                <Form.Control type='number' placeholder='Enter humidity' />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId='formGroupEmail'>
            <Form.Row>
              <Form.Label column lg={2}>
                Pressure:
              </Form.Label>
              <Col>
                <Form.Control
                  column
                  lg={2}
                  type='number'
                  placeholder='Enter atmospheric pressure in hPa'
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Button variant='primary' type='submit' onClick={this.handleSubmitNewLocation}>
            Submit
          </Button>
        </Form>
      </AppContent>
    );
  }
}

export default AddLocation;
