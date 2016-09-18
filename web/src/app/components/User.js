'use strict'

const React = require('react');

class User extends React.Component {
  render() {
    let user = this.props.user;

    return (
      <div>
        <span>{user.id}: { user.name }, registered at { user.createdAt }</span>
      </div>
    );
  }
}

module.exports = User;
