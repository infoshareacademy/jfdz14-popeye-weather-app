import React from 'react';
import style from './search.module.css';
import { AppContent } from '../Dashboards/AppContent';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { getCities } from '../../datasources/cities';
import { connect } from 'react-redux';

// const SearchPage = ({weather}) => {
//   return (
//     <AppContent>
//       <h3>Search for City</h3>
//       <Form.Group>
//         <Form.Control
//           type="text"
//           placeholder="Please type the city"
//           value={this.state.filter}
//           onChange={this.handleOnChange}
//         />
//       </Form.Group>
//       <Table striped bordered hover>
//         {Object.keys(cities).map(country => {
//           const list = cities[country];
//           return (
//             <>
//               <tr>
//                 <th>{country}</th>
//               </tr>
//               {list.map((city, index) => {
//                 return (
//                   <tr>
//                     <td>
//                       <Link key={index} to={`search/${city.long}/${city.lat}`}>
//                         {city.name}
//                       </Link>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </>
//           );
//         })}
//       </Table>
//     </AppContent>
//   );
// };

class SearchPage extends React.Component {
  state = {
    cities: [],
    filter: '',
  };

  handleOnChange = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  get citiesToDisplay() {
    const cities = this.props.weather.filter(city => {
      return city.name.toLowerCase().includes(this.state.filter);
    });

    const result = {};
    for (const city of cities) {
      if (!(city.country in result)) {
        result[city.country] = [];
      }
      result[city.country].push(city);
    }
    return result;
  }

  render() {
    const cities = this.citiesToDisplay;
    return (
      <AppContent>
        <h3>Search for City</h3>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Please type the city"
            value={this.state.filter}
            onChange={this.handleOnChange}
          />
        </Form.Group>
        <Table className={style.searchResults} striped bordered hover>
          <tbody>
            {Object.keys(cities).map((country, index) => {
              const list = cities[country];
              return (
                <React.Fragment key={index}>
                  <tr>
                    <th>{country}</th>
                  </tr>
                  {list.map((city, index) => {
                    return (
                      <tr key={index}>
                        <td className={style.list}>
                          <Link key={index} to={`search/${city.lon}/${city.lat}`}>
                            {city.name}
                            <span className={style.temperature}>
                              {displayCelcius(city.daily[0].temp.day)}
                            </span>
                            <span className={style.pressure}>
                              {displayPressure(city.daily[0].pressure)}
                            </span>
                            <span className={style.humidity}>
                              {displayHumidity(city.daily[0].humidity)}
                            </span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </Table>
      </AppContent>
    );
  }
}

const tempFormat = new Intl.NumberFormat('pl-PL');
export function displayCelcius(temp) {
  const finalTemp = temp - 272.15;

  return 'T: ' + tempFormat.format(finalTemp) + ' °C'
}

const pressureFormat = new Intl.NumberFormat('pl-PL');
export function displayPressure(press) {
  return 'P: ' + pressureFormat.format(press) + ' hPa';
}


const humidityFormat = new Intl.NumberFormat('pl-PL');
export function displayHumidity(press) {
  return 'H: ' +humidityFormat.format(press) + '  %';
}

const mapStateToProps = state => ({
  weather: state,
});

export default connect(mapStateToProps)(SearchPage);
