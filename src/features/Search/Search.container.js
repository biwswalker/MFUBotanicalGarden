import React, { Fragment, useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  Keyboard,
  FlatList,
  TextInput,
  TouchableHighlight,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getNavigator } from '@configs/router'
import _ from 'lodash'
import { Colors, project } from '@constants'
import {
  getRecentSearchPlantList,
  getSearhingPlantList,
  clearSearchList
} from '@redux/searching'
import styles from './Search.styles'

const TRANSPARENCY_ICON = require('@images/icon/transparency.png')

const Search = () => {

  const [instate, setState] = useState({
    stage: 'recent',
    headerText: 'Recent',
    recentSearch: [],
  })

  const dispatch = useDispatch()
  const plantList = useSelector(state => state[project.name].search.list)

  useEffect(() => {
    getRecentSearchPlantList((recent) => {
      setState({ recentSearch: recent })
    })
    return () => {
      dismissKeyboard()
      dispatch(clearSearchList())
    }
  }, [])

  useEffect(() => {
    setState({ headerText: 'Result' })
  }, [plantList])

  const suggestionItemKey = (_, index) => `${index}`

  const onSearchTextChange = (text) => _.debounce(searchingPlant(text), 1500)

  const searchingPlant = (keyword) => () => {
    if (!_.isEmpty(keyword)) {
      setState({ stage: 'searching' })
      dispatch(getSearhingPlantList(keyword))
    }
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  const onPressInformationDetail = (plantId) => () => {
    dismissKeyboard()
    getNavigator().push('Information', { plantId }, { animation: 'bottom' })
  }

  const renderSearchResultHeader = () => (
    <View style={styles.searchResultHeader}>
      <View style={styles.searchResultHeaderWrapper}>
        <Text style={styles.searchResultHeaderText}>{instate.headerText}</Text>
      </View>
    </View>
  )

  const renderRecentItem = ({ item }) => (
    <TouchableHighlight
      onPress={searchingPlant(item)}
      style={styles.searchResultItemWrapper}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Text style={styles.searchResultItemText}>{item}</Text>
      </Fragment>
    </TouchableHighlight>
  )

  const renderSearchItem = ({ item }) => (
    <TouchableHighlight
      onPress={onPressInformationDetail(item._id)}
      style={styles.searchResultItemWrapper}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Text style={styles.searchResultItemText}>{item.name}</Text>
      </Fragment>
    </TouchableHighlight>
  )

  const SearchList = () => {
    if (instate.stage === 'searching') {
      return (
        <FlatList
          ListHeaderComponent={renderSearchResultHeader}
          contentContainerStyle={styles.searchListContainer}
          renderItem={renderSearchItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={suggestionItemKey}
          data={plantList} />
      )
    }
    return (
      <FlatList
        ListHeaderComponent={renderSearchResultHeader}
        contentContainerStyle={styles.searchListContainer}
        renderItem={renderRecentItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={suggestionItemKey}
        data={instate.recentSearch} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchFieldWarpper}>
        <Image source={TRANSPARENCY_ICON} style={styles.searchIcon} />
        <TextInput
          style={styles.searchField}
          onBlur={dismissKeyboard}
          onChangeText={onSearchTextChange} />
      </View>
      <View style={styles.listContainer}>
        <SearchList />
      </View>
    </View>
  )
}

export default Search