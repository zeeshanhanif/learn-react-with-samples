import React, { Component } from 'react';
import './Link.css';

class Link extends Component {

  render() {
    const url='/'+ this.props.label.toLowerCase().trim().replace(' ', '-');
    return (
        <div>
            <a href={url}>{this.props.label}</a>
            <br/>
        </div>
    );
  }
}

export default Link;
