import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Font } from 'exponent'

import { colors } from '../../Styles'

class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  onChange(text) {
    this.setState({ value: text }, this.props.onChange(text))
  }

  render() {
    let label
    if (this.props.label) {
      label = <Text>{ this.props.label }</Text>
    }

    return (
      <View>
        { label }
        <TextInput
          style={ style }
          autoCapitalize="none"
          onChangeText={ this.onChange.bind(this) }
          value={ this.state.value }
          { ...this.props } />
      </View>
    )
  }
}

const style = {
  ...Font.style('body-regular'),
  alignSelf: 'center',
  backgroundColor: colors.white,
  paddingBottom: 5,
  paddingTop: 7,
  fontSize: 24,
  height: 30,
  width: 354
}

module.exports = TextField
