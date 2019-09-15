import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native'

import styles from './CardItem.style'
import { Colors } from '@constants'

const IMAGE = require('@images/herbs/lemon.jpg')

const CardItem = (props) => {

  const {
    title,
    description,
    image,
    onPress
  } = props

  const isHaveDescription = typeof description === 'function'
  const Description = isHaveDescription ? description : Fragment
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Image source={image} style={styles.image} />
        <View style={styles.contentWarpper}>
          <View style={styles.titleWarpper}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.descriptionWarpper}>
            <Description />
          </View>
        </View>
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
}

CardItem.defaultProps = {
  title: '',
  image: IMAGE,
  onPress() { },
}