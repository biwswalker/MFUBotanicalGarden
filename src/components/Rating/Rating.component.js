import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Rating.style'
import { scale } from '../../utils'
import { Colors } from '../../constants'

const STAR_ACTIVE = require('../../assets/images/icon/star-active.png')
const STAR_INACTIVE = require('../../assets/images/icon/star-inactive.png')

class Rating extends Component {

  static propTypes = {
    maxRating: PropTypes.number,
    rating: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.string // medium | small
  }

  static defaultProps = {
    color: Colors.WHITE,
    maxRating: 5,
    rating: 0,
    size: 'medium',
  }

  constructor(props) {
    super(props)
  }

  renderStar = () => {
    const {
      maxRating,
      rating,
      color,
      size,
    } = this.props
    const ratingSize = [...new Array(maxRating)]
    const iconSize = size === 'small' ? scale(8) : scale(14)
    return ratingSize.map((_, index) => {
      return (
        <Image
          key={`rating-${index}`}
          source={index < rating ? STAR_ACTIVE : STAR_INACTIVE}
          style={{ tintColor: color, width: iconSize, height: iconSize }} />
      )
    })
  }

  render() {
    const { maxRating, rating, size } = this.props
    const Stars = this.renderStar
    const textSize = size === 'small' ? scale(8) : scale(14)
    const containerPaddingVertical = size === 'small' ? scale(0) : scale(5)
    const containerWidth = (maxRating * textSize) + ((maxRating - 1) * 4)
    return (
      <View style={[styles.container, { paddingVertical: containerPaddingVertical }]}>
        <View style={[styles.ratingContainer, { width: containerWidth }]}>
          <Stars />
        </View>
        <Text style={[styles.ratingAmountText, { fontSize: textSize }]}>{`${rating} Ratings`}</Text>
      </View>
    )
  }
}

export default Rating