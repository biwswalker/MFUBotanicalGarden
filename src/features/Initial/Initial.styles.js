import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerWarpper: {
    paddingTop: scale(35),
    paddingHorizontal: scale(16, 'vertical'),
    marginBottom: scale(15, 'vertical'),
    flexDirection: 'row',
  },
  leftHeaderWarpper: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  rightHeaderWarpper: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  mfuText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(20),
    lineHeight: scale(24, 'vertical'),
    color: Colors.BLACK,
    textAlign: 'right'
  },
  bgText: {
    fontFamily: Fonts.OpenSansCondensedLight,
    fontSize: scale(18),
    lineHeight: scale(22, 'vertical'),
    color: Colors.BLACK,
    textAlign: 'right'
  },
  menuIcon: {
    width: scale(32),
    height: scale(32),
  },
  contentWrapper: {
    flex: 1,
  },
  footerTabbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  searchText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(32),
    lineHeight: scale(36, 'vertical'),
    color: Colors.BLACK,
    textAlign: 'right',
    marginBottom: scale(10),
  }
}

export default StyleSheet.create(styles)