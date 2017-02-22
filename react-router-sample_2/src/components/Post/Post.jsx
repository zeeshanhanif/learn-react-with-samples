import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {
    let post = this.props.route.posts.find(element=>element.slug == this.props.params.id)
    return (
        <div>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
          <p><a href={post.link} target="_blank">Continue reading...</a></p>
        </div>
    );
  }
}

export default Post;
