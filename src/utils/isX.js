import { Dimensions, Platform } from 'react-native'

// Dimision
const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window')
// Width and height iPhone X and XS
const X_WIDTH = 375
const X_HEIGHT = 812
// Width and height iPhone XS Max and XR
const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

export default isX = (() => {
  if (Platform.OS === 'web') return false

  return (
    Platform.OS === 'ios' &&
    (((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) || (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)) ||
    ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) || (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)))
  )
})()