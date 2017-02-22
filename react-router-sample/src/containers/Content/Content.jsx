import React, { Component } from 'react';
import './Content.css';

class Content extends Component {

  render() {
    return (
        <div>
            <div>Content</div>
            <div>
              {this.props.children}
            </div>
        </div>
    );
  }
}

export default Content;
