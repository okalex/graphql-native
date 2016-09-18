import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Content } from 'native-base'

import SceneLayout from '../components/SceneLayout'

class Signup extends Component {
  render() {
    return (
      <SceneLayout>
        <Text>Sign Up</Text>
      </SceneLayout>
    )
  }
}

module.exports = Signup
