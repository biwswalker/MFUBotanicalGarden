import React, { } from 'react'
import { View, Text, Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import MapView, { Marker } from 'react-native-maps'
import { IconButton } from '@components'

import styles from './Map.style'
import { Colors } from '@constants'

const BACK_ICON = require('@images/icon/left-arrow.png')
const LEAF_ICON = require('@images/icon/leaf-color.png')

const Map = (props) => {

  onPressBack = () => {
    props.navigator.pop()
  }

  const initialRegion = {
    latitude: 20.045159,
    longitude: 99.901946,
    latitudeDelta: 0.0193,
    longitudeDelta: 0.0184,
  }

  const botanicalGardenLocation = {
    latitude: 20.039601,
    longitude: 99.895203,
  }

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
          <Marker
            coordinate={botanicalGardenLocation}>
            <Image source={LEAF_ICON} style={styles.marker} />
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  )
}

export default Map