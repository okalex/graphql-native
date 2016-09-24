import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux';

import SceneLayout from '../components/SceneLayout'

class Intro extends Component {
  render() {
    return (
      <SceneLayout>
        <Text>MyApp</Text>
        <Text>Entice your users with a catchy tagline!</Text>
        <Text onPress={ Actions.signup }>Sign Up</Text>
        <Text onPress={ Actions.login }>Log In</Text>
        <Text onPress={ Actions.users }>View all users</Text>
      </SceneLayout>
    )
  }
}

module.exports = Intro
