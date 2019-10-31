import React, { Component, createRef } from 'react'
import { View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { getNavigator } from '@configs/router'
import styles from './QRCode.style'

const DEFAULT_CAMERA_TYPE = RNCamera.Constants.Type.back
const DEFAULT_FLASH_MODE = RNCamera.Constants.FlashMode.off

class QRCode extends Component {

  constructor(props) {
    super(props)
    this.cameraRef = createRef()
  }

  onBarCodeRead = ({ barcodes }) => {
    if (barcodes) {
      getNavigator().push('Information', { plantId: barcodes }, { animation: 'bottom' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <RNCamera
            ref={this.cameraRef}
            style={styles.camera}
            type={DEFAULT_CAMERA_TYPE}
            flashMode={DEFAULT_FLASH_MODE}
            onGoogleVisionBarcodesDetected={this.onBarCodeRead}
          />
        </View>
        <View style={styles.absoluteFrame}>
          <View style={styles.qrframe}></View>
        </View>
      </View>
    )
  }
}

export default QRCode