import React, { Component } from 'react'
import { TouchableHighlight, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './IconButton.style'
import { Colors } from '../../constants';

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
  }

  static defaultProps = {
    icon: CLOSE_ICON,
    onPress() { },
    iconSize: 16,
    size: 44,
  }

  render() {
    const {
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
              height: iconSize
            }]} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default IconButton