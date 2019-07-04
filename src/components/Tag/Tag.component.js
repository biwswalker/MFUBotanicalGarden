import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Tag.style'
import { Colors } from '../../constants'

const Tag = (props) => {

  const {
    text,
    textColor,
    backgroundColor,
  } = props

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  )
}

Tag.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Tag.defaultProps = {
  text: '',
  textColor: Colors.WHITE_FA,
  backgroundColor: Colors.BLACK_TRANSPARENT_LIGHTER,
}

export default Tag