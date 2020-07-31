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
            placeholder="Enter date"
            onInputChange={this.handleOnChange}
            value={this.state.data_pomiaru}
          />
          <FormInput
            description={'Time'}
            required
            name="godzina_pomiaru"
            type="time"
            placeholder="Enter time"
            onInputChange={this.handleOnChange}
            value={this.state.godzina_pomiaru}
          />
          <FormInput
            description={'Temperature'}
            required
            name="temperatura"
            type="number"
            placeholder="Enter temperature in °C"
            onInputChange={this.handleOnChange}
            value={this.state.temperatura}
          />

          <FormInput
            description={'Wind speed'}
            required={false}
            name="predkosc_wiatru"
            type="number"
            placeholder="Enter wind speed in km/h"
            onInputChange={this.handleOnChange}
            value={this.state.predkosc_wiatru}
          />

          <FormInput
            description={'Wind direction'}
            name="kierunek_wiatru"
            required={false}
            type="number"
            placeholder="Enter wind direction in °"
            onInputChange={this.handleOnChange}
            value={this.state.kierunek_wiatru}
          />

          <FormInput
            description={'Humidity'}
            name="wilgotnosc_wzgledna"
            required={false}
            type="number"
            placeholder="Enter humidity"
            onInputChange={this.handleOnChange}
            value={this.state.wilgotnosc_wzgledna}
          />

          <FormInput
            description={'Pressure'}
            name="cisnienie"
            required={false}
            type="number"
            placeholder="Enter atmospheric pressure"
            onInputChange={this.handleOnChange}
            value={this.state.cisnienie}
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
