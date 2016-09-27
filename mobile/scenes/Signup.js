import React, { Component } from 'react'
import { Text } from 'react-native'
import { graphql } from 'react-apollo'
import { Actions } from 'react-native-router-flux';
import gql from 'graphql-tag'

import SceneLayout from '../components/SceneLayout'
import { FormStore } from '../components/Form'
import { SignupForm } from '../components/Forms'
import { saveSessionToken } from '../api/session'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.store = new FormStore()
  }

  submit() {
    const formValues = this.store.getAll()
    const name       = formValues.name
    const email      = formValues.username
    const password   = formValues.password
    this.props.mutate({ variables: { name, email, password } })
      .then( data => {
        console.log(data)
        return data
      })
      .then( res => saveSessionToken(res.data.addUser.authToken) )
      .then( _    => Actions.home() )
      //.catch
  }

  render() {
    return (
      <SceneLayout>
        <SignupForm store={ this.store } onSubmit={ this.submit.bind(this) } />
      </SceneLayout>
    )
  }
}

const addUser = gql`mutation AddUser($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    authToken
  }
}`

const SignupWithData = graphql(addUser)(Signup)

module.exports = SignupWithData
