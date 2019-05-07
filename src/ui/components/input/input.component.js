import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './input.style';

export class Input extends Component {
  render() {
    const { name, type, placeholder, onChangeText, multiline, numberOfLines, dateFormat  } = this.props

    return <TextInput name={name} type={type} placeholder={placeholder} onChange={onChangeText} dateFormat={dateFormat} style={styles.textFields} multiline={multiline} numberOfLines={numberOfLines} {...this.props} />
  }
}
