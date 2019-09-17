import React, { } from 'react'
import { View, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { IconButton } from '@components'

import styles from './About.style'
import { Colors } from '@constants'

const BACK_ICON = require('@images/icon/left-arrow.png')

const About = (props) => {

  onPressBack = () => {
    props.navigator.pop()
  }
  
  return (
    <SafeAreaView
      forceInset={{ vertical: 'always' }}
      style={styles.container}>
      <View style={styles.headerWrapper}>
        <IconButton
          icon={BACK_ICON}
          tintColor={Colors.BLACK}
          iconSize={20}
          onPress={onPressBack} />
        <Text style={styles.sceneText}>About</Text>
      </View>
    </SafeAreaView>
  )
}

export default About