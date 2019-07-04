import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Comment.style'
import { Rating } from '../'

const Comment = (props) => {
  const {
    name,
    rating,
    comment,
  } = props

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      {rating && <Rating rating={rating} size='small' />}
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  )
}

Comment.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  comment: PropTypes.string,
}

Comment.defaultProps = {
  name: '',
  rating: null,
  comment: '',
}

export default Comment