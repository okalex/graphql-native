import React from 'react'

import { Button, Form, TextField } from '../Form'

class LoginForm extends React.Component {
  render() {
    return (
      <Form store={ this.props.store }>
        <TextField
          fieldName="username"
          label="Email"
          keyboardType="email-address"
          autoFocus={ true } />

        <TextField
          fieldName="password"
          label="Password"
          secureTextEntry={ true } />

        <Button onPress={ this.props.onSubmit }>Log In</Button>
      </Form>
    )
  }
}

module.exports = LoginForm
