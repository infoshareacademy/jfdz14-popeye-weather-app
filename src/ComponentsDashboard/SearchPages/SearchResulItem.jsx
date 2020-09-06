import React from 'react';
import style from './search.module.css';
import { AppContent } from '../Dashboards/AppContent';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import { getCities } from '../../datasources/cities';
import { getWeatherForLocation } from '../../datasources/weatherForLocation';
import { isFavourite, toggleFavourites } from '../../datasources/favourites';
import { connect } from 'react-redux';

class SearchResultItem extends React.Component {
  state = {
    stacja: [],
    actualFavourites: [],
  };

  // componentDidMount() {
  //   Promise.all([
  //     getWeatherForLocation(this.long, this.lat),
  //     isFavourite(this.long, this.lat),
  //   ]).then(([weatherData, isFavourite]) => {
  //     this.setState({
  //       weatherData,
  //       isFavourite,
  //     });
  //   });
  // }

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
    return getCities().find(
      city =>
        city.long.toFixed(2) === this.long.toFixed(2) &&
        city.lat.toFixed(2) === this.lat.toFixed(2),
    );
  }

  render() {
    const cityDetails = this.cityDetails;

    const weatherData = this.props.weatherData;
    const isFavourite = this.state.isFavourite;

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
            {(weather.daily[0].temp.day - 273.15).toFixed(0)} ℃
          </MetadataEntry>
          <MetadataEntry name="Feels like">
            {console.log(weather.daily)}
            {(weather.daily[0].feels_like.day - 273.15).toFixed(0)} ℃
          </MetadataEntry>
          <MetadataEntry name="Dew Point">
            {(weather.daily[0].dew_point - 273.15).toFixed(0)} ℃
          </MetadataEntry>
          <MetadataEntry name="Pressure">{weather.daily[0].pressure.toFixed(0)} hPa</MetadataEntry>
          <MetadataEntry name="Humidity">{weather.daily[0].humidity.toFixed(1)}%</MetadataEntry>
          <MetadataEntry name="Wind speed">
            {weather.daily[0].wind_speed.toFixed(2)} m/s
          </MetadataEntry>
          <MetadataEntry name="Wind direction">{weather.daily[0].wind_deg} ° </MetadataEntry>
          <MetadataEntry name="Precipitation">
            {precipitationDescription(weather.daily[0].weather[0])}
          </MetadataEntry>
        </div>
      </>
    );
  }
}

export function precipitationDescription(weather) {
  if (!weather) {
    return 'No rain';
  }
  return weather.description;
}

export function MetadataEntry(props) {
  const { children, name, ...otherProps } = props;
  return (
    <div className={style.metadataEntry} {...otherProps}>
      <dt className={style.metadataEntryTitle}>{name}</dt>
      <dd className={style.metadataEntryContent}>{children}</dd>
    </div>
  );
}

export default connect((state, props) => {
  const long = parseFloat(props.match.params.long).toFixed(2);
  const lat = parseFloat(props.match.params.lat).toFixed(2);

  return {
    weatherData: state.find(x => {
      return x.lon.toFixed(2) === long && x.lat.toFixed(2) === lat;
    }),
  };
})(SearchResultItem);
