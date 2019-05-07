import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { styles } from './post-detail.style'

import { BaseScreen } from '@ui/screens/base'
import { getDateFormated } from '@util'
import { IgIcon } from '@ui/components/IgIcon'

export class PostDetailScreen extends BaseScreen {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    const data = navigation.getParam('data')
    this.setState({ data })
  }

  _renderHeader() {
    if (!this.state.data) return
    return (
      <View style={styles.header}>
        <Text style={styles.mainTitle}>{this.state.data.title}</Text>
        <View style={styles.totalParticipants}>
          <Text style={styles.numbers}>{this.state.data.total_participants}</Text>
          <IgIcon name="user" style={{ fontSize: 14, color: '#ffffff' }} />
        </View>
      </View>
    )
  }

  _renderDescription() {
    if (!this.state.data) return
    return (
      <View style={styles.description}>
        <Text style={styles.secondTitle}>Descrição</Text>
        <Text>{this.state.data.description}</Text>
      </View>
    )
  }

  _renderInfoDate() {
    if (!this.state.data) return
    return (
      <View style={styles.dateSection}>
        <Text style={styles.secondTitle}>Data</Text>
        <Text>{getDateFormated(this.state.data.date_event)}</Text>
      </View>
    )
  }

  _renderButton() {
    return (
      <TouchableHighlight onPress={this._onSubmit} style={styles.button}>
        <Text style={{ color: 'white' }}>Participar</Text>
      </TouchableHighlight>
    )
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {this._renderHeader()}
          {this._renderDescription()}
          {this._renderInfoDate()}
          {this._renderButton()}
        </View>
      </View>
    )
  }
}
