import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
  }

  render() {
    const { users, userId } = this.props;
    const user = users.find(user => user.id === userId);

    if (!user) {
      return null;
    }

    return <div>{user.name}</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
