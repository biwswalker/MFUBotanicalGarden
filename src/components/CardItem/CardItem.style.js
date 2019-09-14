import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(10),
    resizeMode: 'cover'
  },
  contentWarpper: {
    flex: 1,
    paddingLeft: scale(8),
  },
  titleWarpper: {
  },
  titleText: {
    fontFamily: Fonts.KanitBold,
    fontSize: scale(24),
    color: Colors.BLACK_333,
  },
  descriptionWarpper: {
    
  },
})

export default styles