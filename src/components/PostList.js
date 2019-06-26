import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => {
  // Caution you have to return plain object
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
