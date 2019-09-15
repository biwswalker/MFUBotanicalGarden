import React, { } from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './SubCategory.style'

const SubCategory = () => {

  const subCategoryItemKey = (item, index) => `${item.name}${index}`

  const renderSubCategory = ({ item }) => (
    <View style={styles.subCatWrapper}>
      <Text style={styles.subCategoryText}>{item.name}</Text>
    </View>
  )

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={renderSubCategory}
      keyExtractor={subCategoryItemKey}
      data={[
        { name: 'Acanthaceae' },
        { name: 'Achariaceae' },
        { name: 'Achatocarpaceae' },
        { name: 'Balanophoraceae' },
        { name: 'Balsaminaceae' },
        { name: 'Begoniaceae' },
        { name: 'Cactaceae' },
        { name: 'Campanulaceae' },
        { name: 'Cannaceae' },
        { name: 'Capparaceae' },
        { name: 'Caprifoliaceae' },
        { name: 'Celastraceae' },
      ]} />
  )
}

export default SubCategory