import React, { Component } from 'react'
import { View, Image, FlatList } from 'react-native'

import styles from './Search.styles'

const TRANSPARENCY_ICON = require('../../assets/images/icon/transparency.png')

class Search extends Component {

  constructor(props) {
    super(props)
  }

  suggestionItemKey = (item, index) => `${item.id}${index}`

  renderSuggestionItem = ({ item }) => (
    <View><Text>{item.name}</Text></View>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchFieldWarpper}>
          <Image source={TRANSPARENCY_ICON} style={styles.searchIcon} />
          <View style={styles.searchField}></View>
        </View>
        <View>
          <FlatList
            renderItem={this.renderSuggestionItem}
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