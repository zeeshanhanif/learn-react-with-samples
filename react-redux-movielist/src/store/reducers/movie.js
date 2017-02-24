import MovieActions from "./../actions/movie";

const INITIAL_STATE = {
    movies: [],
    movie: {starring:[]},
    shan:{}
}

function MovieReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case MovieActions.FETCH_MOVIES:
            let obj1 = Object.assign({}, state, { movies: action.movies });
            console.log("obj movies",obj1.movies);
            return obj1;
            /*
            return {
                ...state,
                all: action.movies
            }*/
        case MovieActions.FETCH_MOVIE:
            console.log("movie data reducer = ",state.movies[action.index] );
            let obj = Object.assign({}, state, { movie: state.movies[action.index] });
            console.log("obj",obj.movie);
            return obj;
            /*
            return {
                ...state,
                current: action.movie
            }
            */
        default:
            return state;
    }
}

export default MovieReducer;