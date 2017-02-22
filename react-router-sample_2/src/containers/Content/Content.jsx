import React, { Component } from 'react';
import {Link} from 'react-router';
import './Content.css';

class Content extends Component {

  render() {
    return (
          <div>
            <h1>Node.University</h1>
            <div className="navbar navbar-default">
              <ul className="nav nav-pills navbar-nav ">
                <li className={(this.props.router.isActive('/about'))? 'active': ''}>
                  <Link to="/about" activeClassName="active">
                    About
                  </Link>
                </li>
                <li className={(this.props.router.isActive('/posts'))? 'active': ''}>
                  <Link to="/posts" activeClassName="active">
                    Blog
                  </Link>
                </li>
                <li className={(this.props.router.isActive('/contact'))? 'active': ''}>
                  <Link to="/contact" activeClassName="active">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/login" activeClassName="active">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            {this.props.children}
          </div>
    );
  }
}

export default Content;
