import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native'
import _ from 'lodash'
import { Colors } from '@constants'
import styles from './CardItem.style'

const IMAGE = require('@images/herbs/lemon.jpg')

const CardItem = (props) => {

  const {
    title,
    description,
    image,
    onPress,
    imageSize,
    rightIcon,
    containerStyle,
  } = props

  const isHaveDescription = typeof description === 'function'
  const Description = isHaveDescription ? description : Fragment

  const isHaveRightIcon = typeof rightIcon === 'number'
  return (
    <TouchableHighlight
      style={[styles.container, containerStyle]}
      onPress={onPress}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Image source={image} style={[styles.image, { width: imageSize, height: imageSize }]} />
        <View style={styles.contentWarpper}>
          <View style={styles.titleWarpper}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          {isHaveDescription && (
            <View style={styles.descriptionWarpper}>
              <Description />
            </View>
          )}
        </View>
        {isHaveRightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
      </Fragment>
    </TouchableHighlight>
  )
}

export default CardItem

CardItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.func,
  image: PropTypes.any,
  onPress: PropTypes.func,
  imageSize: PropTypes.number,
  rightIcon: PropTypes.number,
  containerStyle: PropTypes.object,
}

CardItem.defaultProps = {
  imageSize: 60,
  title: '',
  image: IMAGE,
  onPress() { },
  containerStyle: {},
}