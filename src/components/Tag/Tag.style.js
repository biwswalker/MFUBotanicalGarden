import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../constants'
import { scale } from '../../utils'

const styles = {
  container: {
    backgroundColor: Colors.BLACK_TRANSPARENT_LIGHTER,
    paddingVertical: scale(3, 'vertical'),
    paddingHorizontal: scale(10),
    borderRadius: scale(3),
    marginRight: scale(8),
  },
  text: {
    fontFamily: Fonts.QuarkLight,
    color: Colors.WHITE_FA,
    fontSize: scale(14),
  }
}

export default StyleSheet.create(styles)