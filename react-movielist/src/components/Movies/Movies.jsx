import React, { Component } from 'react';
import {Link} from 'react-router';
import './Movies.css';

import movies from '../../moviesdata.json';

class Movies extends Component {

  render() {
    //console.log(styles)
    return (
        <div className="movies">        
          <div className={this.props.params.id ? "listHidden" : "list"}>
            {movies.map((movie, index) => (
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

export default Movies;
