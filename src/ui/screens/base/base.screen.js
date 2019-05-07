import React, { Fragment } from 'react'
import { 
  AppState, 
  BackHandler, 
  View, 
  SafeAreaView, 
  StatusBar,
} from 'react-native'

import Styles from './base.style'

const HARDWARE_BACK_PRESS = 'hardwareBackPress'

export class BaseScreen extends React.Component {
  constructor(props) {
    super(props)

    this._didBlurEvent = null
    this._willBlurEvent = null
    this._didFocusEvent = null
    this._willFocusEvent = null

    this.screenDidBlur = this.screenDidBlur.bind(this)
    this.screenWillBlur = this.screenWillBlur.bind(this)
    this.screenDidFocus = this.screenDidFocus.bind(this)
    this.screenWillFocus = this.screenWillFocus.bind(this)
    this.onBackPress = this.onBackPress.bind(this)
  }

  componentWillMount() {
    this._didBlurEvent && this._didBlurEvent.remove()
    this._willBlurEvent && this._willBlurEvent.remove()
    this._didFocusEvent && this._didFocusEvent.remove()
    this._willFocusEvent && this._willFocusEvent.remove()
    this._willChangeAppState && this._willChangeAppState.remove()

    BackHandler.removeEventListener(HARDWARE_BACK_PRESS, this.onBackPress)
  }

  componentDidMount() {
    this._didBlurEvent = this.props.navigation.addListener(
      'didBlur',
      this.screenDidBlur,
    )
    this._willBlurEvent = this.props.navigation.addListener(
      'willBlur',
      this.screenWillBlur,
    )
    this._didFocusEvent = this.props.navigation.addListener(
      'didFocus',
      this.screenDidFocus,
    )
    this._willFocusEvent = this.props.navigation.addListener(
      'willFocus',
      this.screenWillFocus,
    )

    this._willChangeAppState = AppState.addEventListener(
      'change',
      this.willChangeAppState,
    )

    BackHandler.addEventListener(HARDWARE_BACK_PRESS, this.onBackPress)
  }

  /**
   * Occurs when the backpress event is fired
   */
  onBackPress() {
    // todo: override me if you need.
  }

  /**
   * Occurs when the screen will be presented to user
   * @param {*} event the lifecycle event form navigation
   */
  screenWillFocus(event) {
    // todo: override me if you need.
  }

  /**
   * Occurs when the screen is visible to user
   * @param {*} event the lifecycle event form navigation
   */
  screenDidFocus(event) {
    // todo: override me if you need.
  }

  /**
   * Occurs when the screen goes to background (other screen becomes active or app is putted in background)
   * @param {*} event the lifecycle event form navigation
   */
  screenDidBlur(event) {
    // todo: override me if you need.
  }

  /**
   * Occurs when the screen is going to background (other view will become active or app will be put in background)
   * @param {*} event the lifecycle event form navigation
   */
  screenWillBlur(event) {
    // todo: override me if you need.
  }

  /**
   * Occurs when the app state changes:
   *  - active: The app is running in the foreground;
   *  - background - The app is running in the background;
   *  - inactive - This is a state that occurs when transitioning between foreground & background,
   *  and during periods of inactivity
   * @param {*} event the next app state event from react-native appState
   */
  willChangeAppState(event) {
    // todo: override me if you need.
  }

  renderContent() {
    throw new Error('renderContent is not implemented')
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>        
        { this.renderContent() }
      </SafeAreaView>
    )
  }
}