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
        <Text style={ styles.h1 }>This is MyApp</Text>
        <Text style={ styles.h2 }>Entice your users with a catchy tagline!</Text>
        <Button onPress={ Actions.signup }>SIGN UP</Button>
        <Button onPress={ Actions.login }>LOG IN</Button>
      </SceneLayout>
    )
  }
}

const h1 = {
  ...Font.style('open-sans-bold'),
  color: colors.dark,
  fontSize: 48,
  marginTop: 60
}

const h2 = {
  ...Font.style('open-sans-bold'),
  color: colors.seafoam,
  fontSize: 24,
  marginBottom: 100
}

const body = {
  ...Font.style('open-sans'),
  color: colors.medium,
  fontSize: 18
}

const p = {
  ...Font.style('open-sans'),
  alignSelf: 'center',
  fontSize: 16,
  marginTop: 10
}

const styles = StyleSheet.create({
  h1,
  h2,
  body,
  p
});

module.exports = Intro
