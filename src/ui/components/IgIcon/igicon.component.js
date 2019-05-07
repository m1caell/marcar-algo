import React, { Component } from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '../../../assets/font/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf')

export class IgIcon extends Component {
  render() {
    const { name, style } = this.props

    return <Icon name={name} style={style} {...this.props} />
  }
}
