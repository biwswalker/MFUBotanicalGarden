import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
  backdrop: {
    backgroundColor: Colors.BLACK_TRANSPARENT_LIGHTNEST,
    flex: 1,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: -15,
    bottom: 0,
    right: scale(60),
    paddingLeft: 15,
    backgroundColor: Colors.WHITE_FA,

    shadowColor: "#000",
    shadowOffset: {
      width: 8,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 11,
    elevation: 17,
  },
  contentSaveArea: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
})

export default styles