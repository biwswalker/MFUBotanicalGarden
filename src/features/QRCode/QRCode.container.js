import React, { } from 'react'
import { View } from 'react-native'
import styles from './QRCode.style'

const QRCode = () => {

  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <View style={styles.qrframe}></View>
      </View>
    </View>
  )
}

export default QRCode