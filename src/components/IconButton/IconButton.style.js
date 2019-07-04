import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { scale } from '../../utils'

const styles = {
    container: {
        width: scale(44),
        height: scale(44, 'vertical'),
        borderRadius: scale(22),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.TRANSPARENT,
    },
    warpper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.TRANSPARENT,
    },
    iconImage: {
        width: scale(16),
        height: scale(16, 'vertical'),
        tintColor: Colors.WHITE
    }
}

export default StyleSheet.create(styles)