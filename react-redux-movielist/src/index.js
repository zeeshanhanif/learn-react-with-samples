import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux'
import App from './containers/app/App';
import { store } from './store'
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';
import './index.css';

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Movies} />
                <Route path="movies" component={Movies}>
                    <Route path=":id" component={Movie} />
                </Route>
            </Route>
        </Router>
    </Provider>
  ),
  document.getElementById('root')
);
