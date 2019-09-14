import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

// import { RouteType } from '../../constants'
import { Card } from '@components'
import { getNavigator } from '@configs/router'
import styles from './Home.styles'

const CARD_IMAGE_1 = require('@images/cards/card-graden.jpg')
const CARD_IMAGE_2 = require('@images/cards/card-flower.jpg')
const CARD_IMAGE_3 = require('@images/cards/card-flowers.jpg')

class HomeContainer extends Component {

  static propsTypes = {
  }

  static defaultProps = {
    navigator() { },
  }

  constructor(props) {
    super(props)
  }

  navigateScene = () => {
    getNavigator().push('PlantList', {}, { animation: 'right', duration: 160, easing: 'ease-in-out' })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scroll}
          showsHorizontalScrollIndicator={false} >
          <Card
            onPress={this.navigateScene}
            image={CARD_IMAGE_1}
            firstText='Highlight' />
          <Card
            image={CARD_IMAGE_2}
            firstText='Botanical' />
          <Card
            image={CARD_IMAGE_3}
            firstText='Garden' />
        </ScrollView>
      </View>
    )
  }
}

export default HomeContainer