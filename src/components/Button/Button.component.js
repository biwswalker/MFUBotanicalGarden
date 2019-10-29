import React, { Component } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from '@constants';

import styles from './Button.style'

class IconButton extends Component {

  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    opacity: PropTypes.number,
    disabled: PropTypes.bool,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }

  static defaultProps = {
    text: '',
    onPress() { },
    opacity: 1,
    disabled: false,
    borderColor: Colors.WHITE_FA,
    backgroundColor: Colors.TRANSPARENT,
  }

  render() {
    const {
      backgroundColor,
      borderColor,
      disabled,
      onPress,
      opacity,
      text,
    } = this.props

    const opacityState = disabled ? 0.3 : opacity
    return (
      <TouchableHighlight
        onPress={onPress}
        disabled={disabled}
        underlayColor='rgba(250,250,250,0.2)'
        style={[styles.container, { backgroundColor }]}>
        <View style={[
          styles.warpper,
          { borderColor, opacity: opacityState, }
        ]}>
          <Text
            style={styles.text}>{text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default IconButton