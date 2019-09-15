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

    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
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
    marginTop: scale(24),
    paddingLeft: scale(10),
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(26),
    lineHeight: scale(30, 'vertical'),
    color: Colors.WHITE,
    textAlign: 'left',
  },
  listContainer: {
    flex: 1,
    paddingTop: scale(16),
  },
  tags: {
    flexDirection: 'row',
  }
})

export default styles