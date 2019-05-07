import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableHighlight, Image } from 'react-native'
import { styles } from './login.style'
import { Input } from '@ui/components'

export class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      loginError: false,
      
    }
  }

  _verifyEmptyInputs = () => {
    if(!this.state.login || !this.state.password){
      return false
    }
    return true
  }

  _clearMessages = () => {
    this.setState({
      loginError: false
    })
  }

  _onSubmit = () => {
    if(this._verifyEmptyInputs()){
      this.props.login()
    }else{
      this.setState({
        loginError: true
      })
    }
  }

  _renderLogo() {
    return (
      <View style={styles.logoContainer}> 
        <Image source={require('../../../img/logo.png')}/>
        <Image style={styles.logoText} source={require('../../../img/logoText.png')}/>
      </View>
    )
  }

  _renderFields() {
    return (
      <View style={styles.fieldContainer}>
        <Input
          onFocus={this._clearMessages}
          style={styles.textFields}
          placeholder="Email"
          onChangeText={login => this.setState({ login })}
        />
        <Input
          onFocus={this._clearMessages}
          secureTextEntry={true}
          style={styles.textFields}
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
        />
        {this.state.loginError && <Text style={styles.emptyField}>There are empty fields.</Text>}
        <TouchableHighlight onPress={this._onSubmit} style={styles.loginButtonContainer}>
          <Text style={styles.buttonStyle}>Entrar</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={StyleSheet.flatten([styles.container, styles.flexCenter])}>
        {this._renderLogo()}
        {this._renderFields()}
      </View>
    )
  }
}
