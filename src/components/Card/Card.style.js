import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = {
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: scale(20),
    width: scale(300),
    height: scale(460, 'vertical'),
    marginVertical: scale(20, 'vertical'),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    paddingTop: scale(10, 'vertical'),
    paddingHorizontal: scale(10),
  },
  imageContainer: {
    borderRadius: scale(12),
    width: scale(280),
    height: scale(300, 'vertical'),
    backgroundColor: Colors.GREEN_DARKFADE,
    overflow: 'hidden'
  },

  gardenImageContainer: {
    flex: 1,
    width: scale(300),
    height: scale(200, 'vertical'),
  },
  gardenImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },

  titleWrapper: {
    marginTop: scale(24, 'vertical'),
    paddingHorizontal: scale(20),
    overflow: 'hidden'
  },
  titleText: {
    textAlign: 'left',
    fontFamily: Fonts.QuarkBold,
    color: Colors.BLACK_333,
    fontSize: scale(32),
  },
  tags: {
    paddingTop: scale(8, 'vertical'),
    flexDirection: 'row',
  },
  buttonWrapper: {
    paddingHorizontal: scale(70)
  }
}

export default StyleSheet.create(styles)