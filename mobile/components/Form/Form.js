import React from 'react'
import { View } from 'react-native'

import TextField from './TextField'

class Form extends React.Component {
  constructor(props) {
    super(props)
    React.Children.forEach(
      props.children,
      child => this.props.store.set(child.props.fieldName, "")
    )
  }

  onInputChange(fieldName) {
    return value => this.props.store.set(fieldName, value)
  }

  bindInputChange(component) {
    return React.cloneElement(component, {
      onChange: this.onInputChange(component.props.fieldName)
    })
  }

  renderChildren() {
    return React.Children.map(
      this.props.children,
      child => {
        switch (child.type) {
          case TextField: return this.bindInputChange(child)
          default:        return child
        }
      }
    )
  }

  render() {
    return (
      <View>{ this.renderChildren() }</View>
    )
  }
}

module.exports = Form
