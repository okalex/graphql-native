/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import { ApolloProvider } from 'react-apollo';

import api from './api/client'
import Scenes from './scenes'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ api.client }>
        <Router>
          <Scene key="root" hideNavBar={ true }>
            <Scene key="launch" component={ Scenes.Launch } title="Launch" initial={ true } />
            <Scene key="intro" component={ Scenes.Intro } title="Intro" />
            <Scene key="login" component={ Scenes.Login } title="Log In" />
            <Scene key="signup" component={ Scenes.Signup } title="Sign Up" />
            <Scene key="home" component={ Scenes.Home } title="Home" />
          </Scene>
        </Router>
      </ApolloProvider>
    )
  }
}

AppRegistry.registerComponent('mobile', () => App);
