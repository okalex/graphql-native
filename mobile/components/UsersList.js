import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SceneLayout from './SceneLayout'

const allUsers = gql`query allUsers {
  users {
    id
    name
    email
  }
}`

class UsersList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds
    }
  }

  componentWillReceiveProps(props) {
    const users = props.data.users || []
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(users)
    })
  }

  renderUser(user) {
    return <Text>{ user.id }: { user.name } ({ user.email })</Text>
  }

  render() {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this.renderUser } />
    )
  }
}

const UsersListWithData = graphql(allUsers)(UsersList)

module.exports = UsersListWithData
