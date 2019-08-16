import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

// import { RouteType } from '../../constants'
import { Card } from '../../components'
import styles from './Home.styles'

const CARD_IMAGE_1 = require('../../assets/images/cards/card-graden.jpg')
const CARD_IMAGE_2 = require('../../assets/images/cards/card-flower.jpg')
const CARD_IMAGE_3 = require('../../assets/images/cards/card-flowers.jpg')

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
    // const { router } = this.props
    // navigator.push.Information({}, RouteType.MODAL)
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