import React, { Component } from 'react'
import { Text } from 'react-native';
import { graphql } from 'react-apollo'

import api from '../api/client'

class UsersList extends Component {
  render() {
    return (
      <Text>{ JSON.stringify(this.props, null, 2) }</Text>
    )
  }
}

const UsersListWithData = graphql(api.allUsers)(UsersList)

module.exports = UsersListWithData
