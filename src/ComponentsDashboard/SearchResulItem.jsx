import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { AppContent } from "./AppContent";
import Table from 'react-bootstrap/Table';
import { CodeSharp } from "@material-ui/icons";
import Card from 'react-bootstrap/Card'



class SearchResultItem extends React.Component {

    state = {
        stacja: []
    }

    

    componentDidMount() {
        fetch("https://danepubliczne.imgw.pl/api/data/synop")
            .then((response) => response.json())
            .then((stacja) =>
                this.setState({
                    stacja: stacja
                })
            );

    };

    


    render() {
        
        const cityDetails = this.state.stacja.find(stacja => stacja.id_stacji === this.props.match.params.id)

        return (
            <AppContent>
                {cityDetails && <Card style={{ width: '30rem' }}>
                    <div><h2>{cityDetails.stacja}</h2></div>

                </Card>}
                

            </AppContent>)

    }

}

export default SearchResultItem;