import React from 'react'

import { Button, Form, TextField } from '../Form'

class LoginForm extends React.Component {
  render() {
    return (
      <Form store={ this.props.store }>
        <TextField label="Email" fieldName="username" />
        <TextField label="Password" fieldName="password" />
        <Button onPress={ this.props.onSubmit }>Log In</Button>
      </Form>
    )
  }
}

module.exports = LoginForm
