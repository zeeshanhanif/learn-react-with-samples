import React, { Component } from 'react';
const { connect } = require('react-redux')
const { Link } = require('react-router')
import MovieActions from '../../store/actions/movie'

import styles from './Movie.css';

function mapStateToProps(state) {
    return {
        movie: state.MovieReducer.movie,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovie: ()  => dispatch(MovieActions.fetchMovie)
    };
}

class Movie extends Component {

  componentWillMount() {
    this.props.fetchMovie(this.props.params.id)
  }

  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovie(next.params.id)
    }
  }

  render() {
    return (
      <div
        className={styles.movie}
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${this.props.movie.cover})`}}>
        <div
          className={styles.cover}
          style={{backgroundImage: `url(${this.props.movie.cover})`}} />
        <div className={styles.description}>
          <div className={styles.title}>{this.props.movie.title}</div>
          <div className={styles.year}>{this.props.movie.year}</div>
          <div className={styles.starring}>
            {this.props.movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className={styles.closeButton}
          to="/movies">
          ←
        </Link>
      </div>
    );
  }
}


//export default Movie;
export default connect(mapStateToProps,mapDispatchToProps)(Movie)