import React from 'react';
import style from './search.module.css';
import {AppContent} from '../Dashboards/AppContent';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {getCities} from '../../datasources/cities';

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
        const cities = getCities()
            .filter(city => {
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
                <Table striped bordered hover>
                    {Object.keys(cities)
                        .map(country => {
                            const list = cities[country];
                            return (<>
                                <tr>
                                    <th>{country}</th>
                                </tr>
                                {list.map((city, index) => {
                                    return <tr>
                                        <td>
                                            <Link key={index} to={`search/${city.long}/${city.lat}`}>{city.name}</Link>
                                        </td>
                                    </tr>
                                })}
                            </>);
                        })}
                </Table>
            </AppContent>
        );
    }
}

export default SearchPage;
