import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import App from './containers/app/App';
import Login from './containers/Login/Login';
import Content from './containers/Content/Content';
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import Contact from './components/Contact/Contact';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Content}>
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
  ),
  document.getElementById('root')
);
