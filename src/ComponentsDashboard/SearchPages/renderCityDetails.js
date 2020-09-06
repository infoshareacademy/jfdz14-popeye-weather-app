import React from 'react';
import style from './search.module.css';
import Card from 'react-bootstrap/Card';
import { MetadataEntry } from './SearchResulItem';
import { precipitationDescription } from './SearchResulItem';

export function renderCityDetails(weather) {
  return (
    <>
      {/* <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <div>
              <h3>{cityDetails.name}</h3>
            </div>
          </Card.Title>
        </Card.Body>
      </Card> */}
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
