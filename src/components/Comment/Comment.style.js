import { StyleSheet } from 'react-native'
import { scale } from '../../utils'
import { Fonts, Colors } from '../../constants'

const styles = {
  container: {
    flex: 1,
    marginVertical: scale(10, 'vertical'),
  },
  nameText: {
    fontFamily: Fonts.QuarkBold,
    fontSize: scale(16),
    color: Colors.WHITE,
  },
  commentText: {
    fontFamily: Fonts.QuarkLight,
    marginTop: scale(3, 'vertical'),
    fontSize: scale(14),
    color: Colors.WHITE,
  },
}

export default StyleSheet.create(styles)