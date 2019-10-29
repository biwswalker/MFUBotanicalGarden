import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../constants'
import { scale } from '../../utils'

const styles = {
  container: {
    borderRadius: scale(20),
  },
  warpper: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: scale(20),
    paddingVertical: scale(4),
    paddingHorizontal: scale(16),
    borderColor: Colors.WHITE_FA,
  },
  text: {
    fontSize: scale(14),
    fontFamily: Fonts.QuarkBold,
    color: Colors.WHITE_FA,
  }
}

export default StyleSheet.create(styles)