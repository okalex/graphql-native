import React, { Component } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux';

import { styles } from '../Styles'
import SceneLayout from '../components/SceneLayout'

class Intro extends Component {
  render() {
    return (
      <SceneLayout>
        <Text style={ styles.h1 }>This is MyApp</Text>
        <Text style={ styles.h2 }>Entice your users with a catchy tagline!</Text>
        <TouchableHighlight onPress={ Actions.signup }>
          <Text style={ styles.actionButton }>SIGN UP</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ Actions.login }>
          <Text style={ styles.button }>LOG IN</Text>
        </TouchableHighlight>
      </SceneLayout>
    )
  }
}

module.exports = Intro
