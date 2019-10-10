import { StyleSheet } from 'react-native'
import { scale } from '@utils'
import { Colors, Fonts } from '@constants'

const styles = StyleSheet.create({
  container: {
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
    fontFamily: Fonts.OpenSansCondensedBold,
    fontSize: scale(32),
    lineHeight: scale(36, 'vertical'),
    color: Colors.BLACK,
    textAlign: 'right',
  },
  contentContainer: {
    flex: 1,
    marginVertical: scale(30, 'vertical'),
    paddingHorizontal: scale(15),
  },
  plantDetailContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    padding: scale(15),
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  descriptionContainer: {
    paddingHorizontal: scale(15),
  },
  titleText: {
    fontFamily: Fonts.QuarkBold,
    color: Colors.BLACK_333,
    fontSize: scale(24),
  },
  ratingWarpper: {
    paddingVertical: scale(0, 'vertical')
  },
  tagsWarpper: {
    flexDirection: 'row',
    marginTop: scale(0),
  },
  reviewBoxContainer: {
    borderTopWidth: scale(1),
    borderTopColor: Colors.GRAY_EA,
  },

  commentFieldWarpper: {
    backgroundColor: Colors.GRAY_EA,
    paddingVertical: scale(8, 'vertical'),
    paddingHorizontal: scale(10),
    marginHorizontal: scale(16),
    marginVertical: scale(10, 'vertical'),
    borderRadius: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentField: {
    fontSize: scale(16),
    fontFamily: Fonts.QuarkLight,
    flex: 1,
    paddingHorizontal: scale(10)
  },

  commentRatingWrapper: {
    paddingVertical: scale(10, 'vertical'),
    paddingHorizontal: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  commentRatingDescriptWrapper: {
    paddingTop: scale(10, 'vertical'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingDescText: {
    color: Colors.BLACK_333,
    fontSize: scale(16),
    fontFamily: Fonts.OpenSansCondensedBold,
  }
})

export default styles