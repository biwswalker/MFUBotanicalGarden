import { StyleSheet } from 'react-native'
import { scale, isX } from '../../utils'
import { Colors } from '../../constants'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  scroll: {
    paddingLeft: scale(30),
    paddingBottom: ((isX ? 20 : 0) + scale(70, 'vertical')),
    alignSelf: 'center'
  },
}

export default StyleSheet.create(styles)