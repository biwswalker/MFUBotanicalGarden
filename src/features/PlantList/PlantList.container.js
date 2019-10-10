import React, { useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  ImageBackground,
} from 'react-native'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'
import { IconButton, CardItem, Tag } from '@components'
import PropTypes from 'prop-types'
import { getHighlightList, clearHighlight } from '@redux/highlight'
import styles from './PlantList.styles'
import { Colors, project } from '@constants'

const BACK_ICON = require('@images/icon/left-arrow.png')
const CARD_IMAGE_1 = require('@images/cards/card-graden.jpg')
const EYE_ICON = require('@images/icon/eye.png')

const PlantList = (props) => {

  const dispatch = useDispatch()
  const plantList = useSelector(state => state[project.name].highlight.list)

  useEffect(() => {
    dispatch(getHighlightList())
    return () => dispatch(clearHighlight())
  }, [])

  onPressBack = () => {
    props.navigator.pop()
  }

  const plantItemKey = (item, index) => `${item.id}${index}`

  const renderTags = (tags) => () => {
    if (_.isEmpty(tags)) { return }
    const tagsComponent = tags.map((tag, index) => (<Tag key={`${tag}-${index}`} text={tag} backgroundColor={Colors.BLACK_TRANSPARENT_LIGHTNEST} />))
    return (
      <View style={styles.tags}>{tagsComponent}</View>
    )
  }

  const renderPlantItem = ({ item }) => {
    const rawImage = _.head(_.get(item, 'images', []))
    const image = _.isEmpty(rawImage)
      ? CARD_IMAGE_1
      : { uri: rawImage }
    return (
      <CardItem
        title={item.name}
        description={renderTags(item.tags)}
        image={image}
        rightIcon={EYE_ICON}
        onPress={() => props.navigator.push('Information', { plantId: item._id }, { animation: 'bottom' })} />
    )
  }

  return (
    <SafeAreaView
      forceInset={{ vertical: 'always', top: 'never' }}
      style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={CARD_IMAGE_1} style={styles.imageBackground}>
          <View style={styles.faded} />
          <View style={styles.headerWrapper}>
            <IconButton
              icon={BACK_ICON}
              iconSize={20}
              onPress={onPressBack} />
            <Text style={styles.titleText}>Heightlight</Text>
          </View>
        </ImageBackground>
        <FlatList
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={renderPlantItem}
          keyExtractor={plantItemKey}
          data={plantList} />
      </View>
    </SafeAreaView>
  )
}

export default PlantList

PlantList.propTypes = {
  navigator: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
}

PlantList.defaultProps = {
  navigator() { },
}