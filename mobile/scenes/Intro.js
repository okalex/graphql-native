import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Container, Content } from 'native-base'
import { Actions } from 'react-native-router-flux';

import SceneLayout from '../components/SceneLayout'

class Intro extends Component {
  render() {
    console.log("Rendering Intro")
    return (
      <SceneLayout>
        <Text>MyApp</Text>
        <Text>Entice your users with a catchy tagline!</Text>
        <Button onPress={ Actions.signup }>Sign Up</Button>
        <Button onPress={ Actions.login }>Log In</Button>
        <Text onPress={ Actions.users }>View all users</Text>
      </SceneLayout>
    )
  }
}

module.exports = Intro
