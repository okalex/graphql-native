'use strict'

const React = require('react');
const { connect } = require('react-redux');
const { runQuery } = require('../actions/actions');
const api = require('../api/client');
const User = require('./User');

class UsersList extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      runQuery(api.getUsers)
    );
  }

  render() {
    let users = this.props.users.map(user => {
      return (<User key={ "User-"+user.id } user={user} />);
    });

    return (
      <div>
        <h2>Users List</h2>
        { users }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.get('data').toObject().users || []
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

module.exports = connect(mapStateToProps)(UsersList);
