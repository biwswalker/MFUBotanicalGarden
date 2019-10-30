import React, { Fragment } from 'react'
import { get, isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import {
  TouchableHighlight,
  View,
  Text
} from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel'
import { Colors } from '@constants'
import { Tag } from '../Tag'
import styles from './Card.style'

const Card = (props) => {

  const {
    plant,
    onPress,
    parallaxProps,
  } = props

  const image = get(plant, 'images.0', '')

  const TagComponents = () => {
    if (isEmpty(plant.tags)) { return }
    const TagsComponent = () => plant.tags.map((tag, index) => (<Tag key={`${tag}-${index}`} text={tag} backgroundColor={Colors.BLACK_TRANSPARENT_LIGHTNEST} />))
    return (
      <View style={styles.tags}><TagsComponent /></View>
    )
  }

  return (
    <TouchableHighlight
      underlayColor={Colors.WHITE_FA}
      onPress={onPress}
      style={styles.container}>
      <Fragment>
        <View style={styles.imageContainer}>
          <ParallaxImage
            source={{ uri: image }}
            containerStyle={styles.gardenImageContainer}
            style={styles.gardenImage}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{plant.name}</Text>
          <TagComponents />
        </View>
      </Fragment>
    </TouchableHighlight>
  )
}

Card.propTypes = {
  plant: PropTypes.object,
  onPress: PropTypes.func,
  parallaxProps: PropTypes.object,
}

Card.defaultProps = {
  plant: {},
  onPress() { },
  parallaxProps: {},
}

export default Card