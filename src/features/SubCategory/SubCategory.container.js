import React, { useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { clearGardenPlant, getGardenPlantList } from '@redux/garden'
import { project } from '@constants'

import Colors from '@colors'
import { IconButton, CardItem, Tag } from '@components'
import styles from './SubCategory.style'

const BACK_ICON = require('@images/icon/left-arrow.png')
const CARD_IMAGE_1 = require('@images/cards/card-graden.jpg')
const EYE_ICON = require('@images/icon/eye.png')

const SubCategory = (props) => {

  const { gardenId, gardenName, navigator } = props

  const dispatch = useDispatch()
  const gardenPlantList = useSelector(state => state[project.name].garden.plants)

  useEffect(() => {
    dispatch(getGardenPlantList(gardenId))
    return () => dispatch(clearGardenPlant())
  }, [])

  const subCategoryItemKey = (item, index) => `${item.name}${index}`

  const renderTags = (tags) => () => {
    const tagsComponent = tags.map((tag, index) => (<Tag key={`${tag}-${index}`} text={tag} backgroundColor={Colors.BLACK_TRANSPARENT_LIGHTNEST} />))
    return (
      <View style={styles.tags}>{tagsComponent}</View>
    )
  }

  const renderResultItem = ({ item }) => {
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
        onPress={() => navigator.push('Information', { plantId: item._id }, { animation: 'bottom' })} />
    )
  }

  onPressBack = () => {
    navigator.pop()
  }

  return (
    <SafeAreaView
      forceInset={{ vertical: 'always' }}
      style={styles.container}>
      <View style={styles.headerWrapper}>
        <IconButton
          icon={BACK_ICON}
          tintColor={Colors.BLACK}
          iconSize={20}
          onPress={onPressBack} />
        <Text style={styles.sceneText} ellipsizeMode="tail">{gardenName}</Text>
      </View>
      <View style={styles.subCategoryWrapper}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          renderItem={renderResultItem}
          keyExtractor={subCategoryItemKey}
          data={gardenPlantList} />
      </View>
    </SafeAreaView>
  )
}

export default SubCategory