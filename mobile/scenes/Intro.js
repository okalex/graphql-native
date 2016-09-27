import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Font } from 'exponent';

import SceneLayout from '../components/SceneLayout'
import { Button } from '../components/Form'
import { colors } from '../Styles'

class Intro extends Component {
  render() {
    return (
      <SceneLayout>
        <Text style={ h1 }>MyApp</Text>
        <Text style={ h2 }>Entice your users with a catchy tagline!</Text>
        <Button onPress={ Actions.signup }>SIGN UP</Button>
        <Text onPress={ Actions.login }>Already have an account?</Text>
      </SceneLayout>
    )
  }
}

const h1 = {
  ...Font.style('heading-bold'),
  color: colors.dark,
  fontSize: 24,
  marginTop: 60
}

const h2 = {
  ...Font.style('heading-regular'),
  color: colors.seafoam,
  fontSize: 18,
  marginBottom: 380
}

module.exports = Intro
