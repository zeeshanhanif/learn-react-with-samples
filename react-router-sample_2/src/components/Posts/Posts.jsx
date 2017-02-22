import React, { Component } from 'react';
import {Link} from 'react-router';
import './Posts.css';

class Posts extends Component {

  render() {
    return (
        <div>Posts
          <ol>
            {this.props.route.posts.map((post, index)=>
              <li key={post.slug}>
                <Link to={`/posts/${post.slug}`} >{post.title}</Link>
              </li>
            )}
          </ol>
        </div>
    );
  }
}

export default Posts;
