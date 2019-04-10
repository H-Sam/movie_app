import React, { Component } from 'react';
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

/*class Movie extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		poster: PropTypes.string.isRequired
	}
	render() {
		return (
			<div>
				<p>{this.props.title}</p>
				<MoviePoster poster={this.props.poster}></MoviePoster>
			</div>
		);
	}

}*/

function Movie({ title, poster, genres, synopsis }) {
	return (
		<div className="movie">
			<div className="movie__column">
				<MoviePoster poster={poster} alt={title} />
			</div>
			<div className="movie__column">
				<h1>{title}</h1>
				<div className="movie__genres">
					{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
				</div>
				<div className="movie__synopsis">
					<LinesEllipsis
                    text={synopsis}
                    maxLine='5'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
				</div>
			</div>
		</div>
	)
}

function MovieGenre({ genre }) {
	return (
		<span className="moive_genre">{genre}</span>
	)
}

function MoviePoster({ poster, alt }) {
	return (
		<img src={poster} alt={alt} title={alt} className="movie__poster" />
	)
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}

// class MoviePoster extends Component {
// 	static propTypes = {
// 		poster: PropTypes.string.isRequired
// 	}
// 	render() {
// 		return (
// 			<img src={process.env.PUBLIC_URL+this.props.poster} />
// 		)
// 	}
// }

export default Movie;