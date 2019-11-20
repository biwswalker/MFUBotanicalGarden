import { StyleSheet, Platform } from 'react-native'
import { scale } from '@utils'
import { Colors, Fonts } from '@constants'

const styles = {
  container: {
    flex: 1,
  },
  searchFieldWarpper: {
    backgroundColor: Colors.GRAY_EA,
    paddingHorizontal: scale(10),
    marginHorizontal: scale(16),
    borderRadius: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    height: scale(40),
  },
  searchIcon: {
    width: scale(20),
    height: scale(20),
    tintColor: Colors.BLACK_TRANSPARENT_LIGHTER,
  },
  searchField: {
    fontSize: Platform.OS === 'android' ? scale(14) : scale(18),
    lineHeight: scale(26),
    fontFamily: Fonts.QuarkLight,
    flex: 1,
    paddingHorizontal: scale(10)
  },
  listContainer: {
    flex: 1,
  },
  searchResultHeader: {
    paddingLeft: scale(16),
  },
  searchResultHeaderWrapper: {
    paddingBottom: scale(5),
    borderBottomWidth: 1,
    borderBottomColor: Colors.BLACK_TRANS,
  },
  searchResultHeaderText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(20),
    lineHeight: scale(24, 'vertical'),
    color: Colors.BLACK,
  },
  searchListContainer: {
    marginTop: scale(25),
  },
  searchResultItemWrapper: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(12)
  },
  searchResultItemText: {
    fontFamily: Fonts.QuarkLight,
    fontSize: scale(20),
    lineHeight: scale(24, 'vertical'),
    color: Colors.GREEN_DARKNEST,
    textAlign: 'left'
  },
  tags: {
    flexDirection: 'row',
  },
  emptyContainer: {
    flex: 1,
    paddingTop: scale(60),
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: Fonts.QuarkLight,
    fontSize: scale(24),
    lineHeight: scale(30, 'vertical'),
    color: Colors.BLACK_666,
  }
}

export default StyleSheet.create(styles)