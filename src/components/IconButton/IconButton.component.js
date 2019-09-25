import React, { Component } from 'react'
import { TouchableHighlight, View, Image } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from '@constants';

import styles from './IconButton.style'

const CLOSE_ICON = require('../../assets/images/icon/close.png')

class IconButton extends Component {

  static propTypes = {
    icon: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    onPress: PropTypes.func,
    iconSize: PropTypes.number,
    size: PropTypes.number,
    tintColor: PropTypes.string,
    opacity: PropTypes.number,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    icon: CLOSE_ICON,
    onPress() { },
    iconSize: 16,
    size: 44,
    tintColor: Colors.WHITE,
    opacity: 1,
    disabled: false,
  }

  render() {
    const {
      tintColor,
      disabled,
      iconSize,
      onPress,
      opacity,
      icon,
      size,
    } = this.props

    const opacityState = disabled ? 0.3 : opacity
    return (
      <TouchableHighlight
        onPress={onPress}
        disabled={disabled}
        underlayColor='rgba(250,250,250,0.2)'
        style={[styles.container, {
          width: size,
          height: size,
          borderRadius: size / 2
        }]}>
        <View style={styles.warpper}>
          <Image
            source={icon}
            style={[styles.iconImage, {
              opacity: opacityState,
              height: iconSize,
              width: iconSize,
              tintColor,
            }]} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default IconButton