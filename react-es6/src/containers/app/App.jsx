import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Hello from '../../components/hello/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          working
        </p>
        <p className="App-intro">
          Another Info
          Still working
        </p>
        <Hello name="Zeeshan" age={12}  />
      </div>
    );
  }
}

export default App;
