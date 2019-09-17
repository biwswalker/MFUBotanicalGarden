import React, { } from 'react'
import { FlatList } from 'react-native'
import { CardItem } from '@components'
import { getNavigator } from '@configs/router'

import styles from './Category.style'
import Colors from '@colors'

const SPECIES_ICON = require('@images/icon/species.png')
const LEAVES_ICON = require('@images/icon/leaves.png')
const FLOWER_ICON = require('@images/icon/flower.png')
const FRUITS_ICON = require('@images/icon/fruits.png')

const Category = () => {

  const category = [
    { name: 'พันธุ์ไม้ตามชื่อวงศ์', category: 'species', image: SPECIES_ICON },
    { name: 'ลักษณะใบ', category: 'leaves_types', image: LEAVES_ICON },
    { name: 'ลักษณะดอก', category: 'flower_characteristics', image: FLOWER_ICON },
    { name: 'ลักษณะผล', category: 'classification_of_fruits', image: FRUITS_ICON },
  ]

  const categoryItemKey = (item, index) => `${item.name}${index}`

  const renderCategory = ({ item }) => (
    <CardItem
      title={item.name}
      image={item.image}
      imageSize={30}
      tintColor={Colors.GREEN_DARKNEST}
      containerStyle={styles.card}
      onPress={() => getNavigator().push('SubCategory', { category: item }, { animation: 'right' })} />
  )

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={renderCategory}
      keyExtractor={categoryItemKey}
      data={category} />
  )
}

export default Category