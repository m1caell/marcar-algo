// React
import React, { Component } from 'react'

// Navigator
import { Navigator } from '@ui/navigator'

// Login
import { LoginScreen } from '@ui/screens/login'

// App
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedUser: false,
    }
  }

  _alterUserStatus = () => {
    this.setState({
      loggedUser: !this.state.loggedUser,
    })
  }

  render() {
    if (this.state.loggedUser) {
      return <Navigator logoff={this._alterUserStatus} />
    }
    return <LoginScreen login={this._alterUserStatus} />
  }
}
