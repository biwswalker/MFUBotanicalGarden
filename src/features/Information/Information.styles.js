import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = {
  container: {
    flex: 1,
  },
  backgroundContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Colors.BLACK,
  },
  imageBackground: {
    flex: 1,
  },
  emptyBackground: {
    flex: 1,
  },
  transparentSpace: {
    flex: 2,
  },
  linearSpace: {
    flex: 1,
  },
  navbarContainer: {
    height: scale(60, 'vertical'),
    marginTop: scale(25),
    paddingRight: scale(15),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    margin: scale(25),
    overflow: 'hidden',
    marginTop: scale(80),
    marginBottom: scale(0),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
  blurComponent: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  informationContainer: {
    paddingHorizontal: scale(30),
    paddingTop: scale(20),
    paddingBottom: scale(30),
    flex: 1,
  },
  nameText: {
    fontFamily: Fonts.QuarkBold,
    paddingTop: scale(5),
    fontSize: scale(28),
    color: Colors.WHITE,
  },
  titleWarpper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ratingWarpper: {
    paddingVertical: scale(10, 'vertical')
  },
  tagsWarpper: {
    flexDirection: 'row',
    marginTop: scale(0),
  },
  infoWarpper: {
    flex: 1,
    marginTop: scale(16, 'vertical'),
    paddingTop: scale(8, 'vertical')
  },
  infoText: {
    fontFamily: Fonts.QuarkLight,
    fontSize: scale(18),
    color: Colors.WHITE,
    textAlign: 'justify',
  },
  contentButtonWarper: {
    height: 44,
    width: 44,
  },
  contentDataWarpper: {
    flexDirection: 'row',
    flex: 1,
  },
  panIndicatorWarpper: {
    zIndex: 999,
    paddingVertical: scale(10),
    position: 'absolute',
    alignItems: 'center',
    right: 0,
    left: 0,
    top: 0,
  },
  panIndicator: {
    zIndex: 999,
    backgroundColor: Colors.BLACK_TRANSPARENT_LIGHTER,
    borderRadius: scale(4),
    alignSelf: 'center',
    height: scale(8),
    width: scale(50),
  },
  imageBackgroundWarpper: {
    flex: 4,
  },
  buttonWrapper: {
    width: scale(55),
    alignItems: 'center'
  },
  imageIndicatorWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  imageDirectionIndicatorWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabsWrapper: {
    paddingVertical: scale(0, 'vertical')
  },
  tabsContainer: {
    borderRadius: 5,
    height: scale(28, 'vertical'),
    backgroundColor: Colors.WHITE_FA_TRANSPARENTER,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTextWrapper: {
    borderRadius: scale(3),
    paddingTop: scale(5),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: Colors.WHITE_FA,
    fontSize: scale(16),
    lineHeight: scale(20),
    fontFamily: Fonts.QuarkBold,
  },
  activeTab: {
    backgroundColor: Colors.WHITE_FA_TRANSPARENT,
    position: 'absolute',
    top: scale(2, 'vertical'),
    left: scale(2),
    borderRadius: scale(3),
    height: scale(24, 'vertical'),
  }
}

export default StyleSheet.create(styles)