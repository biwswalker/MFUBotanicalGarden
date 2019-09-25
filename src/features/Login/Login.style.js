import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.TRANSPARENT,
  },
  content: {
    width: (width - (scale(40) * 2)),
    borderRadius: 10,
    paddingVertical: scale(30),
    backgroundColor: Colors.WHITE_FA,

    shadowColor: "#000",
    shadowOffset: {
      width: 8,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 11,
    elevation: 17,
  },
  titleWrapper: {
    paddingVertical: scale(12),
    marginBottom: scale(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: Fonts.OpenSansCondensedBold,
    lineHeight: scale(22, 'vertical'),
    paddingVertical: scale(8),
    color: Colors.BLACK_333,
    fontSize: scale(18),
    textAlign: 'left'
  },
  nameWrapper: {
    marginVertical: scale(10),
  },
  inputWrapper: {
    marginVertical: scale(10),
  },
  submitWrapper: {
    paddingVertical: scale(10)
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: scale(40),
    backgroundColor: Colors.GREEN_DARKFADE,
    marginHorizontal: scale(24),
    marginTop: scale(24),
  },
  submitText: {
    fontSize: scale(18),
    color: Colors.WHITE,
    fontFamily: Fonts.OpenSansCondensedBold,
    paddingHorizontal: scale(10)
  },
  cancelWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: scale(18),
    color: Colors.GREEN_DARKNEST,
    fontFamily: Fonts.OpenSansCondensedLight,
    paddingHorizontal: scale(10)
  },
  inputFieldWarpper: {
    backgroundColor: Colors.GRAY_EA,
    paddingHorizontal: scale(10),
    marginHorizontal: scale(24),
    borderRadius: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    height: scale(40),
  },
  inputIcon: {
    width: scale(20),
    height: scale(20),
    tintColor: Colors.BLACK_TRANSPARENT_LIGHTNEST,
  },
  input: {
    fontSize: scale(18),
    fontFamily: Fonts.QuarkLight,
    flex: 1,
    paddingHorizontal: scale(10)
  },

  plantsIcon: {
    width: scale(64),
    height: scale(64),
  }
})

export default styles