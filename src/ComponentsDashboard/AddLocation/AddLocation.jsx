import React from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { AppContent } from '../Dashboards/AppContent';
import FormInput from './FormInput';
import style from './addLocation.module.css';
import { DATABASE_URL } from '../../index';

class AddLocation extends React.Component {
  state = {
    location: '',
    date: '',
    latitude: '',
    longitude: '',
    successfullyAdded: false,
  };

  handleOnChange = (name, text) => {
    this.setState({
      [name]: text,
    });
  };

  // handleSubmitNewLocation = e => {
  //   const { location } = this.state;

  //   e.preventDefault();
  //   localStorage.setItem(location, JSON.stringify(this.state));
  //   this.setState({
  //     location: '',
  //     date: '',
  //     latitude: '',
  //     longitude: '',
  //   });
  // };

  handleOnSave = e => {
    e.preventDefault();
    const { location } = this.state;
    fetch(`${DATABASE_URL}/addedlocation/${location}.json`, {
      method: 'PUT',
      body: JSON.stringify(this.state),
    }).then(() => {
      this.OnSuccessfullyAdded();
      this.setState({
        location: '',
        date: '',
        latitude: '',
        longitude: '',
        successfullyAdded: true,
      });
    });
  };

  OnSuccessfullyAdded = () => {
    setTimeout(() => {
      this.setState({
        successfullyAdded: false,
      });
    }, 1500);
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
        {this.state.successfullyAdded && (
          <Alert variant="info" className={style.currentPositionHeader}>
            Location successfully added 👌
          </Alert>
        )}
      </AppContent>
    );
  }
}

export default AddLocation;
