import { StyleSheet } from 'react-native'
import { scale } from '../../utils'
import { Colors } from '../../constants'

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
    flex: 1,
  },
}

export default StyleSheet.create(styles)