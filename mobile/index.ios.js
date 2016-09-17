/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container, Header, Title, Content } from 'native-base';
import { ApolloProvider } from 'react-apollo';

import api from './api/client'
import Intro from './screens/Intro'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ api.client }>
        <Container>
          <Header>
            <Title>MyApp</Title>
          </Header>

          <Content>
            <Intro />
          </Content>
        </Container>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mobile', () => App);
