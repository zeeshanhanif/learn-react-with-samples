import React, { Component } from 'react';
import {Link} from 'react-router';
import './Movie.css';
import movies from '../../moviesdata.json';

class Movie extends Component {

  render() {
    let movie = movies[this.props.params.id];
    return (
        <div
        className="movie"
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
        <div
          className="cover"
          style={{backgroundImage: `url(${movie.cover})`}} />
        <div className="description">
          <div className="title">{movie.title}</div>
          <div className="year">{movie.year}</div>
          <div className="starring">
            {movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className="actor">
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className="closeButton"
          to="/movies">
          ←
        </Link>
      </div>
    );
  }
}

export default Movie;
