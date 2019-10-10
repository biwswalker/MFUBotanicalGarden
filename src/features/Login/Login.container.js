import React, { Component, createRef, Fragment } from 'react'
import {
  Text,
  View,
  Image,
  Keyboard,
  Animated,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native'
import { connect } from 'react-redux'
import { anonynousSignin } from '@redux/user'
import { BlurView } from '@react-native-community/blur'
import { project, Colors } from '@constants'
import PropTypes from 'prop-types'
import _ from 'lodash'

import styles from './Login.style'

const PLANTS_ICON = require('@images/icon/plants.png')
const USER_ICON = require('@images/icon/user.png')
const EMAIL_ICON = require('@images/icon/mail.png')

class Login extends Component {

  constructor(props) {
    super(props)
    this.animatedFade = new Animated.Value(0);
    this.usernameRef = createRef()
    this.emailRef = createRef()

    this.state = {
      isValidForm: false,
    }
  }

  static propTypes = {
    signin: PropTypes.func,
    onCancel: PropTypes.func,
    onRegisteredSuccess: PropTypes.func,
    code: PropTypes.number,
    isFetching: PropTypes.bool,
    backgroundRef: PropTypes.any,
  }

  static defaultProps = {
    signin() { },
    onCancel() { },
    onRegisteredSuccess() { },
    code: null,
    isFetching: false
  }

  componentDidMount() {
    Animated.spring(this.animatedFade, {
      toValue: 1,
      duration: 200,
      delay: 150,
    }).start()
  }

  componentDidUpdate(prevProp) {
    const { isFetching, code, onRegisteredSuccess } = this.props
    if (isFetching !== prevProp.isFetching && !isFetching && code === 200) {
      this.close(onRegisteredSuccess)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isValidForm !== nextState.isValidForm
      || this.props.isFetching !== nextProps.isFetching
      || this.props.code !== nextProps.code
  }

  validation = (text) => {
    const emailTemplate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    const username = _.get(this.usernameRef, 'current._lastNativeText', '')
    const email = _.get(this.emailRef, 'current._lastNativeText', '')
    if (_.isEmpty(username) || _.isEmpty(email) || _.isEmpty(text) || !emailTemplate.test(email)) {
      return this.setState({ isValidForm: false })
    }
    return this.setState({ isValidForm: true })
  }

  onSubmitUser = () => {
    this.dismissKeyboard()
    const name = this.usernameRef.current._lastNativeText
    const email = this.emailRef.current._lastNativeText
    this.props.signin({ name, email })
  }

  close = (callback = () => { }) => {
    Animated.timing(this.animatedFade, {
      toValue: 0,
      duration: 200,
    }).start(callback)
  }

  dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  render() {
    const opacity = this.animatedFade.interpolate({
      inputRange: [0, 0.6],
      outputRange: [0, 1]
    })

    const scale = this.animatedFade.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    return (
      <View style={styles.container}>
        <BlurView
          viewRef={this.props.backgroundRef}
          style={styles.backdrop}
          blurType='dark'
          blurAmount={2} />
        <TouchableOpacity style={styles.backdrop} onPress={this.dismissKeyboard} activeOpacity={1} />
        <KeyboardAvoidingView behavior='padding'>
          <Animated.View style={[styles.content, { opacity, transform: [{ scale }] }]}>
            <TouchableOpacity onPress={this.dismissKeyboard} activeOpacity={1}>
              <Fragment>
                <View style={styles.titleWrapper}>
                  <Image source={PLANTS_ICON} style={styles.plantsIcon} />
                  <Text style={styles.titleText}>Let us know your name</Text>
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputFieldWarpper}>
                    <Image source={USER_ICON} style={styles.inputIcon} />
                    <TextInput
                      placeholder="Name"
                      autoCapitalize='none'
                      style={styles.input}
                      ref={this.usernameRef}
                      onChangeText={this.validation}
                      onBlur={this.validation} />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputFieldWarpper}>
                    <Image source={EMAIL_ICON} style={styles.inputIcon} />
                    <TextInput
                      placeholder="Email"
                      autoCapitalize='none'
                      ref={this.emailRef}
                      style={styles.input}
                      onChangeText={this.validation}
                      onBlur={this.validation} />
                  </View>
                </View>
                <View style={styles.submitWrapper}>
                  <TouchableHighlight
                    disabled={!this.state.isValidForm}
                    underlayColor={Colors.GREEN_DARKNEST}
                    style={[styles.submitButton, { opacity: this.state.isValidForm ? 1 : 0.3 }]}
                    onPress={this.onSubmitUser}>
                    <Text style={styles.submitText}>Let's Go!</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.cancelWrapper}>
                  <TouchableOpacity style={styles.cancelButton} onPress={() => this.close(this.props.onCancel)}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </Fragment>
            </TouchableOpacity>
          </Animated.View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  code: state[project.name].user.code,
  isFetching: state[project.name].user.isFetching,
})

const mapDispatchToProps = {
  signin: anonynousSignin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)