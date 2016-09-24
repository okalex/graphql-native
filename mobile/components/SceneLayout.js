import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class SceneLayout extends Component {
  render() {
    return (
      <View style={ styles.container }>
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = SceneLayout
