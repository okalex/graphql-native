import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { Font } from 'exponent';

import { colors } from '../../Styles'

class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={ this.props.onPress }>
        <Text style={ style(colors.seafoam) }>{ this.props.children }</Text>
      </TouchableHighlight>
    )
  }
}

const style = (color) => {
  return {
    ...Font.style('open-sans-bold'),
    alignSelf: 'center',
    borderColor: colors.seafoam,
    borderWidth: 3,
    paddingBottom: 5,
    paddingTop: 7,
    color: color,
    fontSize: 24,
    textAlign: 'center',
    width: 354
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
