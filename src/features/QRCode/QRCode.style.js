import { StyleSheet } from 'react-native'
import Colors from '@colors'
import { scale } from '@utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  absoluteFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  qrframe: {
    marginTop: scale(140, 'vertical'),
    width: scale(250),
    height: scale(250),
    borderColor: Colors.WHITE_FA,
    borderWidth: 1
  }
})

export default styles