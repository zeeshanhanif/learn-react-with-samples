import React, { Component } from 'react';
const { connect } = require('react-redux')
const { Link } = require('react-router')
const movies = require('../../moviesdata');
import MovieActions from '../../store/actions/movie'
import styles from  './Movies.css';

function mapStateToProps(state) {
    return {
        movies: state.MovieReducer.movies,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchedMovies: () => dispatch(MovieActions.fetchedMovies)
    };
}

class Movies extends Component {

  componentWillMount() {
    this.props.fetchMovies(movies) 
  }
  
  render() {
    return (
        <div className={styles.movies}>
          <div className={this.props.params.id ? styles.listHidden : styles.list}>
            {movies.map((movie, index) => (
              <Link key={index} to={`/movies/${index + 1}`}>
                    <div className={styles.movie} 
                      style={{backgroundImage: `url(${movie.cover})`}} />
              </Link>
            ))}
          </div>
          {this.props.children}
        </div>
    )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movies);
