import { StyleSheet } from 'react-native'
import { scale } from '@utils'
import fonts from '@fonts'
import { Colors } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: scale(24)
  },
  logoContainer: {
    marginTop: scale(30),
    marginBottom: scale(25)
  },
  mfuText: {
    fontFamily: fonts.OpenSansCondensedBold,
    fontSize: scale(48),
    lineHeight: scale(54, 'vertical'),
    color: Colors.GREEN_DARKFADE,
    textAlign: 'left'
  },
  botanicalText: {
    fontFamily: fonts.OpenSansCondensedLight,
    fontSize: scale(26),
    lineHeight: scale(32, 'vertical'),
    color: Colors.GREEN_DARKNEST,
    textAlign: 'left'
  },
  menuContainer: {

  },
  menuWrapper: {
    paddingVertical: scale(16),
    paddingLeft: scale(12),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginVertical: scale(5)
  },
  menuText: {
    fontFamily: fonts.OpenSansCondensedLight,
    fontSize: scale(18),
    lineHeight: scale(22, 'vertical'),
    color: Colors.BLACK_333,
    textAlign: 'left'
  },
  mfuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: scale(16)
  }
})

export default styles