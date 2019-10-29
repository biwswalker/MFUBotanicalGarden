import { StyleSheet, Dimensions } from 'react-native'
import { scale } from '@utils'
import { Colors, Fonts } from '@constants'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionContainer: {
    marginTop: scale(5, 'vertical'),
    flexDirection: 'row',
  },
  actionWrapper: {
    marginRight: scale(8)
  },
  descriptionHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  descriptionWrapper: {

  },
  descriptionCloseWrapper: {

  },
  blurComponent: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    right: 12,
    height: 400,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: scale(20),
    paddingTop: scale(12),
  },
  descriptionTitle: {
    fontFamily: Fonts.QuarkBold,
    fontSize: scale(28),
    color: Colors.WHITE,
  },
  descriptionTitleEN: {
    fontFamily: Fonts.QuarkLight,
    fontSize: scale(16),
    color: Colors.WHITE,
  },
  gardenImageContainer: {
    marginTop: scale(10, 'vertical')
  },
  gardenImage: {
    borderRadius: 10,
    width: width - (24 + 40),
    height: scale(210),
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
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerWrapper: {
    padding: 5,
    borderRadius: 25,
  },
  marker: {
    width: 40,
    height: 40,
  },
  tooltipWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltip: {
    paddingVertical: scale(8, 'vertical'),
    paddingHorizontal: scale(8),
    backgroundColor: Colors.WHITE,
    height: scale(42, 'vertical'),
    borderRadius: 10,
    alignSelf: 'center',
    width: 150,
  },
  tooltipText: {
    textAlign: 'center',
    fontFamily: Fonts.QuarkBold,
    color: Colors.BLACK_333,
    fontSize: scale(20),
    lineHeight: scale(26)
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    transform: [
      { rotate: '180deg' }
    ]
  }
})

export default styles