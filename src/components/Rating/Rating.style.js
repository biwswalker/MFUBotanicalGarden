import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../constants'
import { scale } from '../../utils'

const styles = {
  container: {
    paddingVertical: scale(5, 'vertical'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingAmountText: {
    fontFamily: Fonts.QuarkLight,
    marginHorizontal: scale(10),
    color: Colors.WHITE_FA,
    paddingTop: scale(4),
    fontSize: scale(14),
  }
}

export default StyleSheet.create(styles)