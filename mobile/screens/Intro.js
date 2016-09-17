import React, { Component } from 'react'
import { Text, View } from 'react-native';

import api from '../api/client'
import UsersList from '../components/UsersList'

export default class Intro extends Component {
  render() {
    return (
      <View>
        <Text>MyApp</Text>
        <Text>Entice your users with a catchy tagline!</Text>
        <UsersList />
      </View>
    )
  }
}
