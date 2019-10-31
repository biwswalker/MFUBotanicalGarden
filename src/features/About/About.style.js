import { StyleSheet } from 'react-native'
import { scale } from '@utils'
import { Colors } from '@constants'
import Fonts from '@fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    marginTop: scale(28),
    paddingLeft: scale(10),
    paddingRight: scale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scale(40, 'vertical'),
  },
  sceneText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(32),
    lineHeight: scale(36, 'vertical'),
    color: Colors.BLACK,
    textAlign: 'right',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
  },
  logoContainer: {
    marginTop: scale(30),
    marginBottom: scale(25)
  },
  mfuText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(48),
    lineHeight: scale(52, 'vertical'),
    color: Colors.GREEN_DARKFADE,
    textAlign: 'left'
  },
  mfuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: scale(16)
  },
  botanicalText: {
    fontFamily: Fonts.OpenSansCondensedLight,
    fontSize: scale(26),
    lineHeight: scale(26, 'vertical'),
    color: Colors.GREEN_DARKNEST,
    textAlign: 'left'
  },
  aboutusWrapper: {
    paddingRight: scale(10),
  },
  aboutusText: {
    fontFamily: Fonts.QuarkLight,
    color: Colors.GREEN_DARKNEST,
    textAlign: 'justify',
    fontSize: scale(18),
  }
})

export default styles