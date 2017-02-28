import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';
import * as firebase from 'firebase'

// adding firebase configuration
// Replace with your firebase configuration
var firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
