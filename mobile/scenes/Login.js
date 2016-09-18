import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Content } from 'native-base'

import SceneLayout from '../components/SceneLayout'

class Login extends Component {
  render() {
    return (
      <SceneLayout>
        <Text>Log in</Text>
      </SceneLayout>
    )
  }
}

module.exports = Login
