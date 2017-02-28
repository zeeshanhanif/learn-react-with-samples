import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';

//Simply importing config file of firebase
import './config'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
