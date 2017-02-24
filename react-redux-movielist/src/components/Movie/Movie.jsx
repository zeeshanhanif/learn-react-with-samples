import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import './Movie.css';
import movies from '../../moviesdata.json';
import MovieActions from '../../store/actions/movie'

function mapStateToProps(state) {
    return {
        movieone: state.MovieReducer.movie,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovie: (id) => dispatch(MovieActions.fetchMovie(id))
    };
}


class Movie extends Component {
  componentWillMount() {
    console.log("componentWillMount Movie");
    console.log("id == "+this.props.params.id);
    this.props.fetchMovie(this.props.params.id)
  }

  componentWillUpdate(next) {
    console.log("componentWillUpdate Movie");
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovie(next.params.id)
    }
  }

  render() {
    
    return (
        <div
        className="movie"
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${this.props.movieone.cover})`}}>
        <div
          className="cover"
          style={{backgroundImage: `url(${this.props.movieone.cover})`}} />
        <div className="description">
          <div className="title">{this.props.movieone.title}</div>
          <div className="year">{this.props.movieone.year}</div>
          <div className="starring">
            {this.props.movieone.starring.map((actor = {}, index) => (
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

export default connect(mapStateToProps,mapDispatchToProps)(Movie)
