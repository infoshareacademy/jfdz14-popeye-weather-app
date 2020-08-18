import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { AppContent } from '../Dashboards/AppContent';
import FormInput from './FormInput';

class AddLocation extends React.Component {
  state = {
    location: '',
    date: '',
    latitude: '',
    longitude: '',
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
      date: '',
      latitude: '',
      longitude: '',
    });
  };

  render() {
    return (
      <AppContent>
        <h3>Add Location</h3>
        <Form onSubmit={this.handleSubmitNewLocation}>
          <FormInput
            description={'City'}
            required
            name="location"
            type="text"
            placeholder="Enter location name"
            onInputChange={this.handleOnChange}
            value={this.state.location}
          />
          <FormInput
            description={'Date'}
            required
            name="date"
            type="date"
            placeholder="Enter today's date"
            onInputChange={this.handleOnChange}
            value={this.state.date}
          />
          <FormInput
            description={'Longitude'}
            required
            name="longitude"
            type="text"
            placeholder="Enter GPS longitude"
            onInputChange={this.handleOnChange}
            value={this.state.longitude}
          />
          <FormInput
            description={'Latitude'}
            required
            name="latitude"
            type="text"
            placeholder="Enter GPS latitude"
            onInputChange={this.handleOnChange}
            value={this.state.latitude}
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
