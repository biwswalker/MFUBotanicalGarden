import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: scale(12),
    paddingHorizontal : scale(16),
    alignItems: 'center',
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(10),
    resizeMode: 'cover',
    backgroundColor: Colors.GRAY_EA,
  },
  contentWarpper: {
    flex: 1,
    paddingLeft: scale(16),
    marginRight: scale(10),
    overflow: 'hidden',
  },
  titleWarpper: {
    flex: 1,
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: Fonts.QuarkBold,
    fontSize: scale(18),
    color: Colors.BLACK_333,
  },
  descriptionWarpper: {
    justifyContent: 'center',
    flex: 1,    
  },
  rightIcon: {
    width: scale(20),
    height: scale(20),
    opacity: 0.3,
  }
})

export default styles