import React from 'react'
import { 
    TouchableHighlight,
    ImageBackground, 
    View, 
    Text 
} from 'react-native'
import styles from './Card.style'

const Card = (props) => {

    const {
        image,
        onPress,
        firstText,
    } = props

    return (
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <ImageBackground source={image} style={styles.imageBackground}>
                <View style={styles.faded} />
                <View style={styles.contentWrapper}>
                    <View style={styles.labelWrapper}>
                        <Text style={styles.labelText}>{firstText}</Text>
                    </View>
                    <View style={styles.bottomWrapper}>
                    </View>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    )
}

export default Card