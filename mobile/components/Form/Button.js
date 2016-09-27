import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { Font } from 'exponent';

import { colors } from '../../Styles'

class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={ this.props.onPress }>
        <Text style={ style(colors.light, this.props.style) }>{ this.props.children }</Text>
      </TouchableHighlight>
    )
  }
}

const style = (color, styleOverride = {}) => {
  return {
    ...Font.style('body-regular'),
    alignSelf: 'center',
    backgroundColor: colors.seafoam,
    paddingBottom: 8,
    paddingTop: 8,
    color: color,
    fontSize: 18,
    textAlign: 'center',
    width: 350,
    ...styleOverride
  }
}

// const actionButton = {
//   ...button,
//   backgroundColor: colors.rust,
//   borderColor: colors.rust,
//   borderWidth: 3,
//   color: colors.light
// }

module.exports = Button
