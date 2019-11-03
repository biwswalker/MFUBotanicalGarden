import React, { Component, createRef } from 'react'
import {
  View,
  Text,
  Image,
  Linking,
  Platform,
  Animated,
  findNodeHandle,
  TouchableHighlight,
} from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import { get, isEmpty } from 'lodash'
import SafeAreaView from 'react-native-safe-area-view'
import { BlurView } from '@react-native-community/blur'
import MapView, { Marker, Callout } from 'react-native-maps'

import { project } from '@constants'
import { getNavigator } from '@configs/router'
import { IconButton, Button } from '@components'
import { clearGarden, getGardenList } from '@redux/garden'

import styles from './Map.style'
import { Colors } from '@constants'
import { garden } from '@redux'

const BACK_ICON = require('@images/icon/left-arrow.png')
const LEAF_ICON = require('@images/icon/leaf-color.png')
const DEFAULT_GARDEN_IMAGE = require('@images/cards/card-graden.jpg')

const DELTA = 0.009
const initialRegion = {
  latitude: 20.045159,
  longitude: 99.901946,
  latitudeDelta: DELTA,
  longitudeDelta: DELTA,
}

class Map extends Component {

  static defaultProps = {
    gardens: [],
    getGardenList() { },
    clearGarden() { },
  }

  constructor(props) {
    super(props)
    this.mapRef = createRef()
    this.blurRef = null
    this.state = {
      currentRegion: initialRegion,
      selectedGarden: {},
      isShowed: false,
    }
    this.animateGardenDescription = new Animated.Value(0)
  }

  componentDidMount() {
    this.props.getGardenList()
    this.blurRef = findNodeHandle(this.mapRef.current)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gardens !== this.props.gardens && !isEmpty(this.props.gardens)) {
      const garden = get(this.props.gardens, '0', initialRegion)
      this.onRegionChange({
        latitude: _.get(garden, 'location.lat', 0),
        longitude: _.get(garden, 'location.long', 0),
        latitudeDelta: DELTA,
        longitudeDelta: DELTA,
      })
    }

    if (prevState.isShowed !== this.state.isShowed) {
      if (this.state.isShowed) {
        Animated.spring(this.animateGardenDescription, { toValue: 1 }).start()
      } else {
        Animated.spring(this.animateGardenDescription, { toValue: 0 }).start()
      }
    }
  }

  onPressBack = () => {
    this.props.navigator.pop()
  }

  onPressToGarden = ({ name, _id }) => {
    getNavigator().push('SubCategory', { gardenName: name, gardenId: _id }, { animation: 'right' })
  }

  onPressToDirection = ({ name, lat, lng }) => {
    // TODO: Temporary usage
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    Linking.openURL(url);
  }

  onPressMarker = (garden) => {
    this.setState({
      selectedGarden: garden,
      isShowed: true,
    }, () => {
      const latitude = _.get(garden, 'location.lat', 0)
      const longitude = _.get(garden, 'location.long', 0)
      this.onRegionChange({
        latitude,
        longitude,
        latitudeDelta: DELTA,
        longitudeDelta: DELTA
      })
    })
  }

  onRegionChange = (region) => {
    this.mapRef.current.animateToRegion(region, 350)
  }

  onPressClose = () => {
    this.setState({ isShowed: false })
  }

  renderGardenMarker = () => this.props.gardens.map((garden, index) => {
    const latitude = _.get(garden, 'location.lat', 0)
    const longitude = _.get(garden, 'location.long', 0)
    return (
      <Marker
        key={`${index}-marker`}
        coordinate={{ latitude, longitude }}>
        <TouchableHighlight
          style={styles.markerWrapper}
          underlayColor={Colors.BLACK_TRANSPARENT_LIGHTNEST}
          onPress={() => this.onPressMarker(garden)} >
          <Image source={LEAF_ICON} style={styles.marker} />
        </TouchableHighlight>
        <Callout tooltip>
          <View style={styles.tooltipWrapper}>
            <View style={styles.tooltip}>
              <Text style={styles.tooltipText}>{garden.name}</Text>
            </View>
            <View style={styles.triangle} />
          </View>
        </Callout>
      </Marker>
    )
  })

  render() {
    const GardenMarker = this.renderGardenMarker
    const { selectedGarden, currentRegion } = this.state
    const displayImageUri = get(selectedGarden, 'images.0', '')
    const latitude = _.get(selectedGarden, 'location.lat', 0)
    const longitude = _.get(selectedGarden, 'location.long', 0)
    const showImage = !isEmpty(displayImageUri) ? { uri: displayImageUri } : DEFAULT_GARDEN_IMAGE

    const translateY = this.animateGardenDescription.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 50]
    })

    return (
      <SafeAreaView
        forceInset={{ vertical: 'always', bottom: 'never' }}
        style={styles.container}>
        <View style={styles.headerWrapper}>
          <IconButton
            icon={BACK_ICON}
            tintColor={Colors.BLACK}
            iconSize={20}
            onPress={this.onPressBack} />
          <Text style={styles.sceneText}>Map</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            mapType="satellite"
            style={styles.map}
            ref={this.mapRef}
            initialRegion={currentRegion} >
            <GardenMarker />
          </MapView>
        </View>
        <Animated.View style={[
          styles.descriptionContainer,
          { transform: [{ translateY }] }]}>
          <BlurView
            viewRef={this.blurRef}
            style={styles.blurComponent}
            blurType='light'
            blurAmount={20} />
          <View style={styles.descriptionHeaderWrapper}>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.descriptionTitle}>{selectedGarden.name}</Text>
              <Text style={styles.descriptionTitleEN}>{selectedGarden.nameEN}</Text>
            </View>
            <View style={styles.descriptionCloseWrapper}>
              <IconButton onPress={this.onPressClose} />
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.actionWrapper}>
              <Button
                onPress={() => this.onPressToDirection({ name: selectedGarden.name, lat: latitude, lng: longitude })}
                borderColor={Colors.TRANSPARENT}
                backgroundColor={Colors.BLACK_TRANSPARENT_LIGHTNESTED}
                text="Directions" />
            </View>
            <View style={styles.actionWrapper}>
              <Button
                onPress={() => this.onPressToGarden({ name: selectedGarden.name, _id: selectedGarden._id })}
                text="Garden" />
            </View>
          </View>
          <View style={styles.gardenImageContainer}>
            <Image resizeMode="cover" source={showImage} style={styles.gardenImage} />
          </View>
        </Animated.View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  gardens: state[project.name].garden.list
})

const mapDispatchToProps = {
  clearGarden,
  getGardenList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)