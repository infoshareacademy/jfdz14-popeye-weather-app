import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { AppContent } from '../Dashboards/AppContent';
import FormInput from './FormInput';
import firebase from 'firebase';
import { DATABASE_URL } from '../../index';

class AddLocation extends React.Component {
  state = {
    location: '',
    time: '',
    date: '',
    humidity: '',
    temperature: '',
    pressure: '',
    windSpeed: '',
    precipitation: '',
    wavesSwell: '',
    wavesSwell2: '',
    waves: '',
    windWaves: '',
  };

  handleOnChange = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  handleSubmitNewLocation = e => {
    const { location } = this.state;

    e.preventDefault();
    localStorage.setItem(location, JSON.stringify(this.state));
    this.setState({
      location: '',
      time: '',
      date: '',
      humidity: '',
      temperature: '',
      pressure: '',
      windSpeed: '',
      precipitation: '',
      wavesSwell: '',
      wavesSwell2: '',
      waves: '',
      windWaves: '',
    });
  };

  handleOnSave = e => {
    e.preventDefault();
    const { location } = this.state;
    fetch(`${DATABASE_URL}/addedlocation/${location}.json`, {
      method: 'PUT',
      body: JSON.stringify(this.state),
    }).then(() => {
      this.setState({
        location: '',
        time: '',
        date: '',
        humidity: '',
        temperature: '',
        pressure: '',
        windSpeed: '',
        precipitation: '',
        wavesSwell: '',
        wavesSwell2: '',
        waves: '',
        windWaves: '',
      });
    });
  };

  render() {
    return (
      <AppContent>
        <h3>Add Location</h3>
        <Form onSubmit={this.handleOnSave}>
          <FormInput
            description={'City'}
            required
            name="location"
            type="text"
            placeholder="Enter city name"
            onInputChange={this.handleOnChange}
            value={this.state.location}
          />
          <FormInput
            description={'Date'}
            required
            name="date"
            type="date"
            placeholder="Enter date"
            onInputChange={this.handleOnChange}
            value={this.state.date}
          />
          <FormInput
            description={'Time'}
            required
            name="time"
            type="time"
            placeholder="Enter time"
            onInputChange={this.handleOnChange}
            value={this.state.time}
          />
          <FormInput
            description={'Temperature'}
            required
            name="temperature"
            type="number"
            placeholder="Enter temperature in °C"
            onInputChange={this.handleOnChange}
            value={this.state.temperature}
          />

          <FormInput
            description={'Wind speed'}
            required={false}
            name="windSpeed"
            type="number"
            placeholder="Enter wind speed in m/s"
            onInputChange={this.handleOnChange}
            value={this.state.windSpeed}
          />

          <FormInput
            description={'Precipitation'}
            name="precipitation"
            required={false}
            type="number"
            placeholder="Enter wind direction in °"
            onInputChange={this.handleOnChange}
            value={this.state.precipitation}
          />

          <FormInput
            description={'Humidity'}
            name="humidity"
            required={false}
            type="number"
            placeholder="Enter humidity"
            onInputChange={this.handleOnChange}
            value={this.state.humidity}
          />

          <FormInput
            description={'Pressure'}
            name="pressure"
            required={false}
            type="number"
            placeholder="Enter atmospheric pressure"
            onInputChange={this.handleOnChange}
            value={this.state.pressure}
          />

          <FormInput
            description={'Waves Swell'}
            name="wavesSwell"
            required={false}
            type="number"
            placeholder="Enter waves swell"
            onInputChange={this.handleOnChange}
            value={this.state.wavesSwell}
          />

          <FormInput
            description={'Waves Swell Local'}
            name="wavesSwell2"
            required={false}
            type="number"
            placeholder="Enter local waves swell"
            onInputChange={this.handleOnChange}
            value={this.state.wavesSwell2}
          />

          <FormInput
            description={'Waves'}
            name="waves"
            required={true}
            type="number"
            placeholder="Enter height, period and direction"
            onInputChange={this.handleOnChange}
            value={this.state.waves}
          />

          <FormInput
            description={'Wind Waves'}
            name="windWaves"
            required={true}
            type="number"
            placeholder="Enter height, period and direction"
            onInputChange={this.handleOnChange}
            value={this.state.windWaves}
          />
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
