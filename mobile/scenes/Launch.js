import React, { Component } from 'react'
import { Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { loadSessionToken, deleteSessionToken } from '../api/session'
import api from '../api/client'

class Launch extends Component {
  componentWillMount() {
    deleteSessionToken()
      .then(loadSessionToken)
      .then( api.checkLogin )
      .then( isLoggedIn => {
        if (isLoggedIn) Actions.home()
        else Actions.intro()
      })
      .catch( err => {
        console.error(err)
        Actions.intro()
      })
  }

  render() {
    return (
      <Text>Loading</Text>
    )
  }
}

module.exports = Launch
