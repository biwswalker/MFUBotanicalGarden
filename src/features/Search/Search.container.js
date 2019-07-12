import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native'

import { getNavigator } from '../../configs/router'
import styles from './Search.styles'
import { Colors } from '../../constants';

const TRANSPARENCY_ICON = require('../../assets/images/icon/transparency.png')

class Search extends Component {

  constructor(props) {
    super(props)
  }

  suggestionItemKey = (item, index) => `${item.id}${index}`

  renderSearchResultHeader = () => (
    <View style={styles.searchResultHeader}>
      <View style={styles.searchResultHeaderWrapper}>
        <Text style={styles.searchResultHeaderText}>Result</Text>
      </View>
    </View>
  )

  renderSuggestionItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => getNavigator().push('Information', {}, { animation: 'bottom' })}
      style={styles.searchResultItemWrapper}
      underlayColor={Colors.BLACK_TRANS}>
      <Fragment>
        <Text style={styles.searchResultItemText}>{item.name}</Text>
      </Fragment>
    </TouchableHighlight>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchFieldWarpper}>
          <Image source={TRANSPARENCY_ICON} style={styles.searchIcon} />
          <View style={styles.searchField}></View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            ListHeaderComponent={this.renderSearchResultHeader}
            contentContainerStyle={styles.searchListContainer}
            renderItem={this.renderSuggestionItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={this.suggestionItemKey}
            data={[
              { id: 1, name: 'biwswalerk' },
              { id: 2, name: 'stfu' },
            ]} />
        </View>
      </View>
    )
  }
}

export default Search