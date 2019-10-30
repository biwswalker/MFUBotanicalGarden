import { StyleSheet } from 'react-native'
import { scale, isX } from '../../utils'
import { Colors, Fonts } from '../../constants'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  scroll: {
    paddingLeft: scale(30),
    paddingBottom: ((isX ? 20 : 0) + scale(70, 'vertical')),
    alignSelf: 'center'
  },
  headerWrapper: {
    paddingLeft: scale(55),
    paddingTop: scale(30, 'vertical'),
    marginBottom: scale(10, 'vertical'),
  },
  headerText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    lineHeight: scale(36, 'vertical'),
    fontSize: scale(32),
    color: Colors.BLACK,
  }
}

export default StyleSheet.create(styles)