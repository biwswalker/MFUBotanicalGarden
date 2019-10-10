import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import MapView, { Marker } from 'react-native-maps'
import { IconButton } from '@components'
import { clearGarden, getGardenList } from '@redux/garden'
import { useDispatch, useSelector } from 'react-redux'
import { project } from '@constants'
import _ from 'lodash'

import styles from './Map.style'
import { Colors } from '@constants'

const BACK_ICON = require('@images/icon/left-arrow.png')
const LEAF_ICON = require('@images/icon/leaf-color.png')

const Map = (props) => {

  const dispatch = useDispatch()
  const gardens = useSelector(state => state[project.name].garden.list)

  useEffect(() => {
    dispatch(getGardenList())
    return () => dispatch(clearGarden())
  }, [])

  onPressBack = () => {
    props.navigator.pop()
  }

  const initialRegion = {
    latitude: 20.045159,
    longitude: 99.901946,
    latitudeDelta: 0.0193,
    longitudeDelta: 0.0184,
  }

  const RenderGardenMarker = () => gardens.map((garden, index) => {
    const latitude = _.get(garden, 'location.lat', 0)
    const longitude = _.get(garden, 'location.long', 0)
    return (
      <Marker
        key={`${index}-marker`}
        coordinate={{ latitude, longitude }}>
        <Image source={LEAF_ICON} style={styles.marker} />
      </Marker>
    )
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
          onPress={onPressBack} />
        <Text style={styles.sceneText}>Map</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          mapType="satellite"
          style={styles.map}
          initialRegion={initialRegion}>
          <RenderGardenMarker />
        </MapView>
      </View>
    </SafeAreaView>
  )
}

export default Map