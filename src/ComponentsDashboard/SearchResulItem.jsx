import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { AppContent } from "./AppContent";


class SearchResultItem extends React.Component {

    componentDidMount() {
        fetch("https://danepubliczne.imgw.pl/api/data/synop")
            .then((response) => response.json())
            .then((cities) =>
                this.setState({
                    cities: cities
                })
            );
    };

    render() {
        return <AppContent><div>kot</div></AppContent>
    }
}

export default SearchResultItem;