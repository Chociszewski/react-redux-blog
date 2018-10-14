import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index.js";

class Home extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  showPosts() {
    return this.props.posts.map(post => {
      return (
        <li key={post.title}>
          {post.title}
          <p>{post.body}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.showPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(
  mapStateToProps,
  actions
)(Home);
