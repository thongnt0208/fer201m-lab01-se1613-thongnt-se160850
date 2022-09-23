import React, {Component} from "react";
import {FilmsList} from "../lists/ListOfFilms"
import DisplayFilms from "../components/DisplayFilms";

export class Content extends Component {
    filmsList = FilmsList;

    render() {
        return <DisplayFilms films = {this.filmsList}/>;
    }
}
export default Content;