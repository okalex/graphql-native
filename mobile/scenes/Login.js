import React, { Component } from 'react'
import { Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import tcomb from 'tcomb-form-native'

import SceneLayout from '../components/SceneLayout'
import api from '../api/client'
import { saveSessionToken } from '../api/session'
import { styles } from '../Styles'
import { FormStore } from '../components/Form'
import { LoginForm } from '../components/Forms'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginFailed: false
    }
    this.store = new FormStore()
  }

  handleLoginResponse(response) {
    if (response.status != 200) {
      throw new Error("Login failed due to error " + response.status)
    } else {
      return response.json()
    }
  }

  loginFailed(err) {
    this.setState({
      loginFailed: true
    })
  }

  submit() {
    const formValues = this.store.getAll()
    const username = formValues.username
    const password = formValues.password
    if (username && password) {
      api.submitLogin(username, password)
        .then( response => this.handleLoginResponse(response) )
        .then( data     => saveSessionToken(data.authToken) )
        .then( _        => Actions.home() )
        .catch( err     => this.loginFailed(err) )
    }
  }

  render() {
    let loginFailedMessage = this.state.loginFailed ? "Username or password were not valid." : ""
    return (
      <SceneLayout>
        <Text>{ loginFailedMessage }</Text>
        <LoginForm store={ this.store } onSubmit={ this.submit.bind(this) } />
        <Text style={ styles.p }>Forgot your password?</Text>
      </SceneLayout>
    )
  }
}

module.exports = Login
