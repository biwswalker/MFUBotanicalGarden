import React, { } from 'react'
import { View, FlatList } from 'react-native'
import { CardItem } from '@components'

import styles from './Category.style'
import Colors from '@colors'

const HIGHLIGHT_ICON = require('@images/icon/highlight.png')
const SPECIES_ICON = require('@images/icon/species.png')
const LEAVES_ICON = require('@images/icon/leaves.png')
const FLOWER_ICON = require('@images/icon/flower.png')
const FRUITS_ICON = require('@images/icon/fruits.png')
const Category = () => {

  const categoryItemKey = (item, index) => `${item.name}${index}`

  const renderCategory = ({ item }) => (
    <CardItem
      title={item.name}
      image={item.image}
      imageSize={30}
      tintColor={Colors.GREEN_DARKNEST}
      onPress={() => {}} />
      // props.navigator.push('Information', {}, { animation: 'bottom' })
  )

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={renderCategory}
      keyExtractor={categoryItemKey}
      data={[
        { name: 'Species', image: SPECIES_ICON },
        { name: 'Leaves types', image: LEAVES_ICON },
        { name: 'Flower characteristics', image: FLOWER_ICON },
        { name: 'Classification of Fruits', image: FRUITS_ICON },
      ]} />
  )
}

export default Category