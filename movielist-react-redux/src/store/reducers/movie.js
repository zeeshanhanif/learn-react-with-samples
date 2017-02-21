import MovieActions from "./../actions/movie";

const INITIAL_STATE = {
    movies: [],
    movie: {},
    shan:{}
}

function MovieReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case MovieActions.FETCH_MOVIES:
            return Object.assign({}, state, { movies: action.movies });
            /*
            return {
                ...state,
                all: action.movies
            }*/
        case MovieActions.FETCH_MOVIE:
            return Object.assign({}, state, { movie: action.movie });
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