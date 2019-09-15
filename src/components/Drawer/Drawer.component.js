import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import {
  View,
  Animated,
  TouchableOpacity,
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import styles from './Drawer.style'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window')

class Drawer extends Component {

  constructor(props) {
    super(props)
    this.animatedFade = new Animated.Value(0);
  }

  static propTypes = {
    children: PropTypes.any.isRequired,
    onPressBackdrop: PropTypes.func,
  }

  static defaultProps = {
    onPressBackdrop() { },
  }

  componentDidMount() {
    Animated.spring(this.animatedFade, {
      toValue: 1,
      duration: 200,
      delay: 150,
    }).start()
  }

  close = (callback = () => { }) => {
    Animated.timing(this.animatedFade, {
      toValue: 0,
      duration: 200,
    }).start(callback)
  }

  pressBackdrop = () => {
    this.props.onPressBackdrop()
  }

  render() {
    const { children } = this.props

    const opacity = this.animatedFade.interpolate({
      inputRange: [0, 0.6],
      outputRange: [0, 1]
    })

    const translateX = this.animatedFade.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, 0]
    })

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backdrop} onPress={this.pressBackdrop} />
        <Animated.View style={[styles.content, { opacity, transform: [{ translateX }] }]}>
          <SafeAreaView
            forceInset={{ vertical: 'always' }}
            style={styles.contentSaveArea}>
            {children}
          </SafeAreaView>
        </Animated.View>
      </View>
    )
  }
}

export default Drawer