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
  }

  static defaultProps = {
    icon: CLOSE_ICON,
    onPress() { },
    iconSize: 16,
    size: 44,
    tintColor: Colors.WHITE,
  }

  render() {
    const {
      tintColor,
      iconSize,
      onPress,
      icon,
      size,
    } = this.props
    return (
      <TouchableHighlight
        onPress={onPress}
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
              width: iconSize,
              height: iconSize,
              tintColor: tintColor
            }]} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default IconButton