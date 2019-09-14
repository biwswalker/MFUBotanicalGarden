import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: scale(200, 'vertical'),
    paddingVertical: scale(20),
    paddingHorizontal: scale(10),

    shadowColor: "#000",
    shadowOffset: {
      width: scale(0),
      height: scale(12, 'vertical'),
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  faded: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  headerWrapper: {
    marginTop: 50,
    flex: 1,
    height: scale(40, 'vertical'),
  },
  titleText: {
    paddingLeft: scale(10),
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(20),
    lineHeight: scale(24, 'vertical'),
    color: Colors.WHITE,
    textAlign: 'left',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: scale(16),
  }
})

export default styles