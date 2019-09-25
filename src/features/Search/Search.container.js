import React, {
  useEffect,
  Fragment,
  useState,
  useRef,
} from 'react'
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
  getSearhPlantList,
  clearSearchList
} from '@redux/searching'
import { IconButton, CardItem, Tag } from '@components'
import styles from './Search.styles'

const TRANSPARENCY_ICON = require('@images/icon/transparency.png')
const CLEAR_ICON = require('@images/icon/close.png')
const CARD_IMAGE_1 = require('@images/cards/card-graden.jpg')
const EYE_ICON = require('@images/icon/eye.png')

const Search = () => {

  const searchInputRef = useRef(null)

  const [stage, setStage] = useState('recent')
  const [headerText, setHeaderText] = useState('Recent')
  const [recentSearch, setRecentSearch] = useState([])
  const [searchText, setSearchText] = useState('')

  const dispatch = useDispatch()
  const plantList = useSelector(state => state[project.name].search.list)
  const resultSearch = useSelector(state => state[project.name].search.searchResult)

  useEffect(() => {
    getRecentSearchPlantList((_err, recent) => {
      const recents = JSON.parse(recent)
      if (!_.isEmpty(recents)) {
        setStage('recent')
        setHeaderText('Recent')
        setRecentSearch(_.reverse(recents))
      }
    })
    return () => {
      dismissKeyboard()
      dispatch(clearSearchList())
    }
  }, [])

  useEffect(() => {
    setStage('result')
    setHeaderText('Results')
  }, [resultSearch]);

  const suggestionItemKey = (_, index) => `${index}`

  const searchingPlant = (keyword) => {
    if (_.isEmpty(keyword)) {
      getRecentSearchPlantList((_err, recent) => {
        const recents = JSON.parse(recent)
        if (!_.isEmpty(recents)) {
          setStage('recent')
          setHeaderText('Recent')
          setRecentSearch(_.reverse(recents))
        }
      })
    } else {
      setSearchText(keyword)
      setStage('searching')
      setHeaderText('Keywords')
      dispatch(getSearhingPlantList(keyword))
    }
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  const onSearchFinal = (keyword) => () => {
    dispatch(getSearhPlantList(keyword))
  }

  const onSubmitEditing = onSearchFinal(searchText)

  const onPressInformationDetail = (plantId) => () => {
    dismissKeyboard()
    getNavigator().push('Information', { plantId }, { animation: 'bottom' })
  }

  const renderSearchResultHeader = () => (
    <View style={styles.searchResultHeader}>
      <View style={styles.searchResultHeaderWrapper}>
        <Text style={styles.searchResultHeaderText}>{headerText}</Text>
      </View>
    </View>
  )

  const renderRecentItem = ({ item }) => (
    <TouchableHighlight
      onPress={onSearchFinal(item)}
      style={styles.searchResultItemWrapper}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Text style={styles.searchResultItemText}>{item}</Text>
      </Fragment>
    </TouchableHighlight>
  )

  const renderSearchItem = ({ item }) => (
    <TouchableHighlight
      onPress={onSearchFinal(item.name)}
      style={styles.searchResultItemWrapper}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Text style={styles.searchResultItemText}>{item.name}</Text>
      </Fragment>
    </TouchableHighlight>
  )

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
        onPress={onPressInformationDetail(item._id)} />
    )
  }

  const renderTags = (tags) => () => {
    const tagsComponent = tags.map((tag, index) => (<Tag key={`${tag}-${index}`} text={tag} backgroundColor={Colors.BLACK_TRANSPARENT_LIGHTNEST} />))
    return (
      <View style={styles.tags}>{tagsComponent}</View>
    )
  }

  const renderEmptyResult = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>There are no plants</Text>
    </View>
  )

  const SearchList = () => {
    if (stage === 'searching') {
      return (
        <FlatList
          ListHeaderComponent={renderSearchResultHeader}
          contentContainerStyle={styles.searchListContainer}
          renderItem={renderSearchItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={suggestionItemKey}
          data={plantList} />
      )
    } else if (stage === 'result') {
      return (
        <FlatList
          ListEmptyComponent={renderEmptyResult}
          ListHeaderComponent={renderSearchResultHeader}
          contentContainerStyle={styles.searchListContainer}
          renderItem={renderResultItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={suggestionItemKey}
          data={resultSearch} />
      )
    }
    return (
      <FlatList
        ListHeaderComponent={renderSearchResultHeader}
        contentContainerStyle={styles.searchListContainer}
        renderItem={renderRecentItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={suggestionItemKey}
        data={recentSearch} />
    )
  }

  renderClearButton = () => {
    if (!searchInputRef.current) {
      return <Fragment />
    } else if (searchText.length <= 0) {
      return <Fragment />
    }
    return (
      <IconButton
        tintColor={Colors.BLACK_TRANSPARENT_LIGHTER}
        icon={CLEAR_ICON}
        onPress={onClearText}
        iconSize={10}
        size={20} />
    )
  }

  const onClearText = () => {
    setSearchText('')
    searchInputRef.current.clear()
    getRecentSearchPlantList((_err, recent) => {
      const recents = JSON.parse(recent)
      if (!_.isEmpty(recents)) {
        setStage('recent')
        setHeaderText('Recent')
        setRecentSearch(_.reverse(recents))
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchFieldWarpper}>
        <Image source={TRANSPARENCY_ICON} style={styles.searchIcon} />
        <TextInput
          ref={searchInputRef}
          style={styles.searchField}
          onBlur={dismissKeyboard}
          onSubmitEditing={onSubmitEditing}
          onChangeText={searchingPlant} />
        {renderClearButton()}
      </View>
      <View style={styles.listContainer}>
        <SearchList />
      </View>
    </View>
  )
}

export default Search