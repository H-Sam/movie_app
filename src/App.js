import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
    //Render : componentWillMount() ->  render() -> componentDidMount()
    // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {};
    componentDidMount() {
        /*setTimeout(() => {
            this.setState({
                movies: [{
                        title: "Matrix",
                        poster: "/images/img01.jpg"
                    },
                    {
                        title: "Full Metal Jacket",
                        poster: "/images/img02.jpg"
                    },
                    {
                        title: "Oldboy",
                        poster: "/images/img03.jpg"
                    },
                    {
                        title: "Star Wars",
                        poster: "/images/img04.jpg"
                    },
                    {
                        title: "Ant's Man",
                        poster: "/images/img05.jpg"
                    }
                ]
            });
        }, 3000);*/

        this._getMovies();

        /*.catch( function(error){
            console.log(error)
        })*/
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        // console.log(movies)
        this.setState({
            movies
            // movies : movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return (
                <Movie 
                title = { movie.title_english }
                poster = { movie.medium_cover_image }
                genres = {movie.genres}
                key = { movie.id } 
                synopsis = {movie.synopsis}
                />
            );
        })
        return movies
    }
    render() {
        const {movies} = this.state;
        return (
            <div className={movies ? "App" :"App--loading"}>
                {this.state.movies ? this._renderMovies() : 'Loading'}
            </div>
        );
    }
}

export default App;