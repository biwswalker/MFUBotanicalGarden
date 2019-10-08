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
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    width: scale(45),
    height: scale(45),
  }
})

export default styles