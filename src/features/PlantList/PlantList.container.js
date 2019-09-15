import React from 'react'
import {
  View,
  Text,
  FlatList,
  ImageBackground
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { IconButton, CardItem, Tag } from '@components'
import PropTypes from 'prop-types'

import styles from './PlantList.styles'
import { Colors } from '@constants'

const BACK_ICON = require('@images/icon/left-arrow.png')
const CARD_IMAGE_1 = require('@images/cards/card-graden.jpg')

const PlantList = (props) => {

  onPressBack = () => {
    props.navigator.pop()
  }

  const plantItemKey = (item, index) => `${item.id}${index}`

  const renderTags = (tags, index) => () => {
    const tagsComponent = tags.map(tag => (<Tag key={`${tag}-${index}`} text={tag} backgroundColor={Colors.BLACK_TRANSPARENT_LIGHTNEST} />))
    return (
      <View style={styles.tags}>{tagsComponent}</View>
    )
  }

  const renderPlantItem = ({ item }) => (
    <CardItem
      title={item.name}
      description={renderTags(item.tags)}
      image={CARD_IMAGE_1}
      onPress={() => props.navigator.push('Information', {}, { animation: 'bottom' })} />
  )

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
          data={[
            { id: 1, name: 'มิ้น (Mint)', tags: ['Green', 'Herb'] },
            { id: 2, name: 'มะนาว (Lemon)', tags: ['Herb', 'yellow'] },
          ]} />
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