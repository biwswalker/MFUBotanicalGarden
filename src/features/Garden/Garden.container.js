import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { CardItem } from '@components'
import { getNavigator } from '@configs/router'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { getGardenList, clearGarden } from '@redux/garden'
import { project } from '@constants'

import styles from './Garden.style'
import Colors from '@colors'

const SPECIES_ICON = require('@images/icon/species.png')
const LEAVES_ICON = require('@images/icon/leaves.png')
const FLOWER_ICON = require('@images/icon/flower.png')
const FRUITS_ICON = require('@images/icon/fruits.png')

const Garden = () => {

  const dispatch = useDispatch()
  const gardenList = useSelector(state => state[project.name].garden.list)

  useEffect(() => {
    dispatch(getGardenList())
    return () => dispatch(clearGarden())
  }, [])

  const icons = [
    SPECIES_ICON,
    LEAVES_ICON,
    FLOWER_ICON,
    FRUITS_ICON,
  ]

  const gardenItemKey = (item, index) => `${item.name}${index}`

  const renderGarden = ({ item, index }) => (
    <CardItem
      title={item.name}
      image={icons[index]}
      imageSize={30}
      tintColor={Colors.GREEN_DARKNEST}
      containerStyle={styles.card}
      onPress={() => getNavigator().push('SubCategory', { gardenName: item.name, gardenId: item._id }, { animation: 'right' })} />
  )

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={renderGarden}
      keyExtractor={gardenItemKey}
      data={gardenList} />
  )
}

export default Garden