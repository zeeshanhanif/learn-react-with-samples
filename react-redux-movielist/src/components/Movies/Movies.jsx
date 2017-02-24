import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import './Movies.css';

import moviesData from '../../moviesdata.json';
import MovieActions from '../../store/actions/movie'

function mapStateToProps(state) {
    return {
        movies: state.MovieReducer.movies,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMovies: (movies) => dispatch(MovieActions.fetchedMovies(movies))
    };
}

class Movies extends Component {

  componentWillMount() {
    this.props.fetchMovies(moviesData) 
  }

  render() {
    //console.log(styles)
    return (
        <div className="movies">        
          <div className={this.props.params.id ? "listHidden" : "list"}>
            {this.props.movies.map((movie, index) => (
              <Link key={index} to={`/movies/${index}`}>
                <div className="movieitem" 
                      style={{backgroundImage: `url(${movie.cover})`}} >
                      
                      </div>
              </Link>
            ))}
          </div>
          {this.props.children}
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movies);
