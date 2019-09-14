import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { ModalController } from '@components'
import styles from './Drawer.style'

const { width } = Dimensions.get('window')
const Drawer = () => {
  const animatedFade = new Animated.Value(0);

  const opacity = animatedFade.interpolate({
    inputRange: [0, 0.6],
    outputRange: [0, 1]
  })

  const translateX = animatedFade.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0]
  })

  useEffect(() => {
    Animated.spring(animatedFade, {
      toValue: 1,
      duration: 200,
      delay: 150,
    }).start()

    return () => {
      log('will unmount');
    }
  }, []);

  closeModal = () => {
    Animated.timing(animatedFade, {
      toValue: 0,
      duration: 200,
    }).start(() => {
      ModalController.hide()
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backdrop} onPress={closeModal} />
      <Animated.View style={[styles.content, { opacity, transform: [{ translateX }] }]}>
        <SafeAreaView
          forceInset={{ vertical: 'always' }}
          style={styles.contentSaveArea}>
          <Text>QWERTY</Text>
        </SafeAreaView>
      </Animated.View>
    </View>
  )
}

export default Drawer