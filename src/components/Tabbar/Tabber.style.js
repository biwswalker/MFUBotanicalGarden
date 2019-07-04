import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../constants'
import { scale, isX } from '../../utils'

const containerHeight = isX ? 24 : 0

const styles = {
  container: {
    height: scale((containerHeight + 80), 'vertical'),
    backgroundColor: Colors.WHITE_FA,
    paddingBottom: containerHeight,
    flexDirection: 'row',
    flex: 1,
  },
  iconContainer: {
    paddingVertical: scale(8, 'vertical'),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    height: scale(28),
    width: scale(28),
  },
  tabText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    lineHeight: scale(14, 'vertical'),
    color: Colors.BLACK_333,
    fontSize: scale(14),
  }
}

export default StyleSheet.create(styles)