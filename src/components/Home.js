import React, { Component } from "react";
import axios from "axios";

import _ from "lodash";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  takeTen() {
    let postsTen = this.state.posts.map(post => {
      return (
        <li key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <ul>{this.takeTen()}</ul>
        </div>
      </div>
    );
  }
}

export default Home;
