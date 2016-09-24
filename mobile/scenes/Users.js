import React, { Component } from 'react'
import { Text, View } from 'react-native'

import SceneLayout from '../components/SceneLayout'
import UsersList from '../components/UsersList'

class Users extends Component {
  render() {
    return (
      <SceneLayout>
        <UsersList />
      </SceneLayout>
    )
  }
}

module.exports = Users
