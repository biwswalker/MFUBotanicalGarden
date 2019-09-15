import React, { Fragment, useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getNavigator } from '@configs/router'
import { Colors, project } from '@constants';
import { getSearhingPlantList, clearSearchList } from '@redux/searching'
import styles from './Search.styles';

const TRANSPARENCY_ICON = require('@images/icon/transparency.png')

const Search = () => {

  const [instate, setState] = useState({ headerText: 'Result' })

  const dispatch = useDispatch()
  const plantList = useSelector(state => state[project.name].search.list)

  useEffect(() => {
    dispatch(getSearhingPlantList())

    return () => dispatch(clearSearchList())
  }, [])

  const suggestionItemKey = (item, index) => `${item.id}${index}`

  const renderSearchResultHeader = () => (
    <View style={styles.searchResultHeader}>
      <View style={styles.searchResultHeaderWrapper}>
        <Text style={styles.searchResultHeaderText}>{instate.headerText}</Text>
      </View>
    </View>
  )

  const renderSuggestionItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => getNavigator().push('Information', {}, { animation: 'bottom' })}
      style={styles.searchResultItemWrapper}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Text style={styles.searchResultItemText}>{item.name}</Text>
      </Fragment>
    </TouchableHighlight>
  )

  return (
    <View style={styles.container}>
      <View style={styles.searchFieldWarpper}>
        <Image source={TRANSPARENCY_ICON} style={styles.searchIcon} />
        <View style={styles.searchField}></View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          ListHeaderComponent={renderSearchResultHeader}
          contentContainerStyle={styles.searchListContainer}
          renderItem={renderSuggestionItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={suggestionItemKey}
          data={[
            { id: 1, name: 'lemon' },
            { id: 2, name: 'weed' },
          ]} />
      </View>
    </View>
  )
}

export default Search