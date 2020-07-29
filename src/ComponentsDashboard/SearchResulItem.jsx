import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { AppContent } from "./AppContent";
import Table from 'react-bootstrap/Table';
import { CodeSharp } from "@material-ui/icons";



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
            // console.log(this.state.stacja)
    };


    render() {
        console.log(this.state.stacja.find(stacja => stacja.id_stacji === this.props.match.params.id))
        return (
            <AppContent>
                <Table striped bordered hover>
                    <div><h2>kot</h2></div>
        <div>{this.stacja}</div>
                    {/* {this.state.stacja.find(stacja =>
                        stacja.id_stacji === this.props.match.params.id)} */}
                </Table>

            </AppContent>)
        // console.log(this.state.stacja.find(stacja => stacja.id_stacji === this.props.match.params.id))
    }

}

export default SearchResultItem;