import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content } from 'native-base'

import SceneLayout from '../components/SceneLayout'
import UsersList from '../components/UsersList'

class Home extends Component {
  render() {
    return (
      <SceneLayout>
        <UsersList />
      </SceneLayout>
    )
  }
}

module.exports = Home
