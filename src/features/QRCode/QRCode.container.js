import React, { Component, createRef } from 'react'
import { includes, split, get } from 'lodash'
import { View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { getNavigator } from '@configs/router'
import styles from './QRCode.style'

const DEFAULT_CAMERA_TYPE = RNCamera.Constants.Type.back
const DEFAULT_FLASH_MODE = RNCamera.Constants.FlashMode.off

let isDetectCode = false
class QRCode extends Component {

  constructor(props) {
    super(props)
    this.cameraRef = createRef()
  }

  onPressBackCallback = () => {
    isDetectCode = false
  }

  onBarCodeRead = ({ data: barcodes }) => {
    if (barcodes && includes(barcodes, 'MFUBG') && !isDetectCode) {
      isDetectCode = true
      setTimeout(() => {
        const plantId = get(split(barcodes, 'MFUBG-', 2), '1', '');
        getNavigator().push('Information', { plantId, onPresBackCallback: this.onPressBackCallback }, { animation: 'bottom' })
      }, 270)
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
            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
            onBarCodeRead={this.onBarCodeRead}
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