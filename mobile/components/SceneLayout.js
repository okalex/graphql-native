import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, Header } from  'native-base'

class SceneLayout extends Component {
  render() {
    return (
      <Container>
        <Header></Header>
        <Content>
          { this.props.children }
        </Content>
      </Container>
    )
  }
}

module.exports = SceneLayout
