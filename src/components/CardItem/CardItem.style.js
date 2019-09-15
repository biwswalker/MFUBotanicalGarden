import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: scale(12),
    paddingHorizontal : scale(16),
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(10),
    resizeMode: 'cover'
  },
  contentWarpper: {
    flex: 1,
    paddingLeft: scale(16),
  },
  titleWarpper: {
    flex: 1,
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: Fonts.KanitBold,
    fontSize: scale(18),
    color: Colors.BLACK_333,
  },
  descriptionWarpper: {
    justifyContent: 'center',
    flex: 1,    
  },
})

export default styles