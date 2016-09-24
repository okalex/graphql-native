import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from '../Styles'

class SceneLayout extends Component {
  render() {
    return (
      <View style={ styles.container }>
        { this.props.children }
      </View>
    )
  }
}

module.exports = SceneLayout
