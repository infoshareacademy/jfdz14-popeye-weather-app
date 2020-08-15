import React from 'react';
import style from './search.module.css';
import { AppContent } from '../Dashboards/AppContent';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import { getCities } from '../../datasources/cities';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';
import { getWavesForLocation } from '../../datasources/weatherForLocation';

import { isFavourite, toggleFavourites } from '../../datasources/favourites';

class SearchResultItem extends React.Component {
  state = {
    stacja: [],
    actualFavourites: [],
  };

  componentDidMount() {
    Promise.all([
      getWeatherForLocation(this.long, this.lat),
      isFavourite(this.long, this.lat),
      // getWavesForLocation(this.long, this.lat),
    ]).then(([weatherData, isFavourite]) => {
      this.setState({
        weatherData,
        isFavourite,
        // waves,
      });
    });
  }

  addStorage = () => {
    const toState = !this.state.isFavourite;
    toggleFavourites(toState, this.long, this.lat, this.cityDetails.name).then(x => {
      this.setState({ isFavourite: toState });
    });
  };

  get long() {
    return parseFloat(this.props.match.params.long);
  }

  get lat() {
    return parseFloat(this.props.match.params.lat);
  }

  get cityDetails() {
    return getCities().find(city => city.long === this.long && city.lat === this.lat);
  }
  render() {
    const cityDetails = this.cityDetails;

    const weatherData = this.state.weatherData;
    const isFavourite = this.state.isFavourite;
    // const waves = this.state.waves;

    console.log(this.state);
    return (
      <AppContent>
        {cityDetails && weatherData
          ? this.renderCityDetails(cityDetails, weatherData, isFavourite)
          : null}
      </AppContent>
    );
  }

  renderCityDetails(cityDetails, weather, isFavourite) {
    return (
      <>
        <Card>
          <Card.Img variant="top" src={cityDetails.image} />
          <Card.Body>
            <Card.Title>
              <div>
                <h3>{cityDetails.name}</h3>

                <Button variant="info" size="sm" onClick={this.addStorage}>
                  {isFavourite ? 'Remove from favourites' : 'Add to favourites'}
                </Button>
              </div>
            </Card.Title>
          </Card.Body>
        </Card>
        <div className={style.metadata}>
          <MetadataEntry name="Temperature">
            {(weather.temperature - 273.15).toFixed(0)} ℃
          </MetadataEntry>
          <MetadataEntry name="Pressure">{(weather.pressure / 100).toFixed(0)} hPa</MetadataEntry>
          <MetadataEntry name="Humidity">{weather.humidity.toFixed(1)}%</MetadataEntry>
          <MetadataEntry name="Wind speed">{weather.windSpeed} m/s</MetadataEntry>
          <MetadataEntry name="Precipitation">
            {precipitationDescription(weather.precipitation)}
          </MetadataEntry>
          <MetadataEntry name="Waves">{weather.waves} m/s</MetadataEntry>
          {/* jak to ☝  dodac ? */}
        </div>
      </>
    );
  }
}

function precipitationDescription(type) {
  switch (parseInt(type, 10)) {
    case 1:
      return 'Rain';
    case 5:
      return 'Snow';
    case 6:
      return 'Wet snow';
    case 7:
      return 'Rain with snow';
  }
  return 'No rain';
}

function MetadataEntry(props) {
  const { children, name, ...otherProps } = props;
  return (
    <div className={style.metadataEntry} {...otherProps}>
      <dt className={style.metadataEntryTitle}>{name}</dt>
      <dd className={style.metadataEntryContent}>{children}</dd>
    </div>
  );
}

export default SearchResultItem;
