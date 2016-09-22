import React, { Component } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import { Container, Content } from 'native-base'
import { Actions } from 'react-native-router-flux';
import tcomb from 'tcomb-form-native'

import SceneLayout from '../components/SceneLayout'
import api from '../api/client'
import { saveSessionToken } from '../api/session'

const Form = tcomb.form.Form

const LoginFields = tcomb.struct({
  username: tcomb.String,
  password: tcomb.String
})

const options = {}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginFailed: false
    }
  }

  submit() {
    const formValue = this.refs.form.getValue()
    const username = formValue.username
    const password = formValue.password
    if (username && password) {
      api.submitLogin(username.toLowerCase(), password.toLowerCase())
        .then( response => response.json() )
        .then( data => saveSessionToken(data.authToken) )
        .then( _ => Actions.home() )
        .catch( err => {
          console.error(err)
          this.setState({
            loginFailed: true
          })
        })
    }
  }

  render() {
    let loginFailedMessage = this.state.loginFailed ? "Username or password were not valid." : ""
    return (
      <SceneLayout>
        <Text>Log in</Text>
        <Text>{ loginFailedMessage }</Text>
        <Form
          ref="form"
          type={ LoginFields }
          options={ options }
          autoCapitalize={ false }
        />
        <TouchableHighlight onPress={ this.submit.bind(this) }>
          <Text>Log In</Text>
        </TouchableHighlight>
      </SceneLayout>
    )
  }
}

module.exports = Login
