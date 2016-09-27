import React from 'react'

import { Button, Form, TextField } from '../Form'

class SignupForm extends React.Component {
  render() {
    return (
      <Form store={ this.props.store }>
        <TextField
          fieldName="name"
          label="Your name"
          autoFocus={ true } />

        <TextField
          fieldName="username"
          label="Email"
          keyboardType="email-address" />

        <TextField
          fieldName="password"
          label="Password"
          secureTextEntry={ true } />

        <Button onPress={ this.props.onSubmit }>Sign Up</Button>
      </Form>
    )
  }
}

module.exports = SignupForm
