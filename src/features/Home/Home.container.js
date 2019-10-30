import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel'

import { Card } from '@components'
import { getNavigator } from '@configs/router'
import { project } from '@constants'
import { getHighlightList } from '@redux/highlight'
import styles from './Home.styles'

const { width: screenWidth } = Dimensions.get('window')
class HomeContainer extends Component {

  static propsTypes = {
    highlightList: PropTypes.array,
    getHighlightList: PropTypes.func,
  }

  static defaultProps = {
    navigator() { },
    highlightList: [],
    getHighlightList() { },
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getHighlightList()
  }

  navigateScene = (plant) => () => {
    getNavigator().push('Information', { plantId: plant._id }, { animation: 'right', duration: 160, easing: 'ease-in-out' })
  }

  renderPlant = ({ item }, parallaxProps) => {
    return (
      <Card
        plant={item}
        key={item._id}
        parallaxProps={parallaxProps}
        onPress={this.navigateScene(item)}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Highlight</Text>
        </View>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 100}
          data={this.props.highlightList}
          renderItem={this.renderPlant}
          hasParallaxImages={true}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  highlightList: state[project.name].highlight.list
})

const mapDispatchToProps = {
  getHighlightList
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)