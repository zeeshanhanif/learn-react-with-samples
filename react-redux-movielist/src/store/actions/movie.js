export default class MovieActions {

    static FETCH_MOVIES = 'movies/FETCH_MOVIES';
    static FETCH_MOVIE = 'movies/FETCH_MOVIE';

    
    static fetchedMovies(movies) {
        return {
            type: MovieActions.FETCH_MOVIES,
            movies
        }
    }

    static fetchMovie(index) {
        return {
            type: MovieActions.FETCH_MOVIE,
            index
        }
    }
}