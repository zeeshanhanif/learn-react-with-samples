import React, { Component } from 'react';
import logo from '../../logo.svg';
const styles = require('./App.css')

class App extends Component {
  render() {
    const {
      children
    } = this.props

    return (
      <div className={styles.app}>
        {children}
      </div>
    )
  }
}

export default App;
