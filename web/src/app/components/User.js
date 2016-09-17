'use strict'

const React = require('react');

class User extends React.Component {
  render() {
    let user = this.props.user;

    return (
      <div>
        <span>{user.id}: { user.name }</span>
        <a href="#" onClick={ this.props.onDelete }>Delete</a>
      </div>
    );
  }
}

module.exports = User;
