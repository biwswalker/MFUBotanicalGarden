import { StyleSheet } from 'react-native'
import { scale } from '@utils'
import { Fonts, Colors } from '@constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
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
    flex: 1,
    paddingTop: scale(8),
    fontFamily: Fonts.QuarkBold,
    fontSize: scale(32),
    lineHeight: scale(36, 'vertical'),
    color: Colors.BLACK,
    textAlign: 'right',
  },
  subCategoryWrapper: {
    flex: 1,
    paddingTop: scale(16),
  },
  categoryWrapper: {
    paddingVertical: scale(8),
    paddingHorizontal: scale(32),
  },
  subCategoryText: {
    fontFamily: Fonts.QuarkLight,
    fontSize: scale(18),
    color: Colors.BLACK_333,
  },
  headerSubCategoryWrapper: {
    paddingTop: scale(4),
    backgroundColor: Colors.WHITE_FA,
    paddingHorizontal: scale(24),
  },
  headerSubCategoryText: {
    fontFamily: Fonts.QuarkBold,
    fontSize: scale(18),
    color: Colors.BLACK_666,
  }
})

export default styles