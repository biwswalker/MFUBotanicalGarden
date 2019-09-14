import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@constants'
import { scale } from '@utils'

const styles = {
    container: {
        overflow: 'hidden',
        borderRadius: scale(20),
        width: scale(270),
        height: scale(400, 'vertical'),
        marginVertical: scale(20, 'vertical'),
        marginHorizontal: scale(20),
        shadowColor: "#000",
        shadowOffset: {
            width: scale(0),
            height: scale(12, 'vertical'),
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    imageBackground: {
        width: scale(300),
        height: scale(400, 'vertical'),
        padding: scale(20),
    },
    faded: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    contentWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    labelWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    labelText: {
        fontFamily: Fonts.OpenSansCondensedBold,
        color: Colors.WHITE,
        fontSize: scale(40),
    },
    bottomWrapper: {
        height: scale(0, 'vertical')
    }
}

export default StyleSheet.create(styles)