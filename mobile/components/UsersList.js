import React, { Component } from 'react'
import { ListView, Text, View } from 'react-native';
import { graphql } from 'react-apollo'

import SceneLayout from './SceneLayout'
import api from '../api/client'

class UsersList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds
    }
  }

  componentWillReceiveProps(props) {
    console.log(props)
    const users = props.data.users || []
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(users)
    })
  }

  renderUser(user) {
    return <Text>{ user.id }: { user.name }</Text>
  }

  render() {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this.renderUser } />
    )
  }
}

const UsersListWithData = graphql(api.allUsers)(UsersList)

module.exports = UsersListWithData
