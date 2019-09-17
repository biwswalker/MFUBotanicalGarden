import React, { Fragment } from 'react'
import {
  View,
  Text,
  SectionList,
  TouchableHighlight
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import Colors from '@colors'
import { IconButton } from '@components'
import styles from './SubCategory.style'

const BACK_ICON = require('@images/icon/left-arrow.png')

const SubCategory = (props) => {

  const { category, navigator } = props

  const subCategorys = [
    {
      title: 'A', data: [
        { _id: '', name: 'Acanthaceae' },
        { _id: '', name: 'Achariaceae' },
        { _id: '', name: 'Achatocarpaceae' },
      ]
    },
    {
      title: 'B', data: [
        { _id: '', name: 'Balanophoraceae' },
        { _id: '', name: 'Balsaminaceae' },
        { _id: '', name: 'Begoniaceae' },
      ]
    },
    {
      title: 'C', data: [
        { _id: '', name: 'Cactaceae' },
        { _id: '', name: 'Campanulaceae' },
        { _id: '', name: 'Cannaceae' },
        { _id: '', name: 'Capparaceae' },
        { _id: '', name: 'Caprifoliaceae' },
        { _id: '', name: 'Celastraceae' },
      ]
    }
  ]

  const subCategoryItemKey = (item, index) => `${item.name}${index}`

  const renderHeaderSubCategory = ({ section }) => (
    <View style={styles.headerSubCategoryWrapper}>
      <Text style={styles.headerSubCategoryText}>{section.title}</Text>
    </View>
  )

  const renderSubCategory = ({ item }) => (
    <TouchableHighlight
      style={styles.categoryWrapper}
      underlayColor={Colors.BLACK_TRANS}
      onPress={() => navigator.push('Information', { plantId: item._id }, { animation: 'bottom' })}>
      <Fragment>
        <Text style={styles.subCategoryText}>{item.name}</Text>
      </Fragment>
    </TouchableHighlight>
  )

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
        <Text style={styles.sceneText} ellipsizeMode="tail">{category.name}</Text>
      </View>
      <View style={styles.subCategoryWrapper}>
        <SectionList
          sections={subCategorys}
          renderItem={renderSubCategory}
          renderSectionHeader={renderHeaderSubCategory}
          keyExtractor={subCategoryItemKey}
        />
      </View>
    </SafeAreaView>
  )
}

export default SubCategory