import React, { Component, Fragment } from 'react'
import {
    View,
    Image,
    Text,
    TouchableHighlight,
} from 'react-native'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Colors } from '../../constants'
import styles from './Tabber.style'

class Tabbar extends Component {

    static propTypes = {
        tabs: PropTypes.array,
        callbackOnPress: PropTypes.func,
        activeScene: PropTypes.string.isRequired,
    }

    static defaultProps = {
        tabs: [],
        callbackOnPress() { },
    }

    isActive = (sceneName) => _.isEqual(sceneName, this.props.activeScene) ? Colors.GREEN_DARKFADE : Colors.BLACK

    callbackOnPress = (scene) => () => this.props.callbackOnPress(scene)

    renderTabButton = () => this.props.tabs.map((tab, index) =>
        <TouchableHighlight
            key={`${tab.name}-${index}`}
            style={styles.iconContainer}
            underlayColor={Colors.BLACK_TRANS}
            disabled={_.isEqual(this.props.activeScene, tab.name)}
            onPress={this.props.callbackOnPress(tab.name)}>
            <Fragment>
                <View style={styles.iconWrapper}>
                    <Image source={tab.icon} style={[styles.icon, { tintColor: this.isActive(tab.name) }]} />
                    <Text style={[styles.tabText, { color: this.isActive(tab.name) }]}>{tab.name}</Text>
                </View>
            </Fragment>
        </TouchableHighlight>
    )

    render() {
        const Tabs = this.renderTabButton
        return (<View style={styles.container}><Tabs /></View>)
    }
}

export default Tabbar