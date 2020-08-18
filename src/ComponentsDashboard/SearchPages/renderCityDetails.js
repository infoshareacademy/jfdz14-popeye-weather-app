import React from 'react';
import style from './search.module.css';
import Card from 'react-bootstrap/Card';
import { MetadataEntry } from './SearchResulItem';
import { precipitationDescription } from './SearchResulItem';

export function renderCityDetails(cityDetails, weather) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={cityDetails.image} />
        <Card.Body>
          <Card.Title>
            <div>
              <h3>{cityDetails.name}</h3>
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
      </div>
    </>
  );
}
