import React, { Component, Fragment } from 'react'
import {
  Text,
  View,
  Image,
  Animated,
} from 'react-native'
import _ from 'lodash'
import Navigator from 'react-native-easy-router'
import SafeAreaView from 'react-native-safe-area-view'

import { RouteType, Colors } from '@constants'
import { Tabbar, IconButton, ModalController } from '@components'
import { routeChilds } from '@configs/router'
import styles from './Initial.styles'

const MENU_ICON = require('@images/hamburger/hamburger.png')
const HOME_ICON = require('@images/icon/home.png')
const LEAF_ICON = require('@images/icon/leaf.png')
const QR_ICON = require('@images/icon/qr-code.png')
const TRANSPARENCY_ICON = require('@images/icon/transparency.png')

class Initial extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeScene: 'Home'
    }
    this.router = null
    this.animatedText = new Animated.Value(1)
  }

  onPressTab = (scene) => () => {
    this.animatedTitleText(0)
    this.router.push(scene, {}, { animation: 'none' })
    setTimeout(() => {
      this.setState({ activeScene: scene })
      this.animatedTitleText(1)
    }, 270)
  }

  animatedTitleText = (toValue) => Animated.timing(this.animatedText, { toValue, duration: 270 }).start()

  onPressOpenDrawer = () => {
    log('onPressOpenDrawer')
    const drawer = () => (
      <View style={{ width: 100, height: 400, backgroundColor: 'red' }}></View>
    )
    ModalController.show({ child: drawer })
  }

  renderSceneNameComponent = () => {
    const HomeText = () => (
      <Fragment>
        <Text style={styles.mfuText}>MAE FAH LUANG</Text>
        <Text style={styles.bgText}>Botanical Garden</Text>
      </Fragment>
    )
    const BotanicalText = () => (<Text style={styles.mfuText}>Botanical</Text>)
    const SearchText = () => (<Text style={styles.searchText}>Search</Text>)

    switch (this.state.activeScene) {
      case 'Home':
        return <HomeText />
      case 'Botanical':
        return <BotanicalText />
      case 'Search':
        return <SearchText />
      default:
        return <HomeText />
    }
  }

  render() {
    const { activeScene } = this.state
    const TitleName = this.renderSceneNameComponent

    const animations = {
      [RouteType.SKEW]: [{ transform: [{ skewX: '90deg' }] }, { transform: [{ skewX: '0deg' }] }, false],
    }

    const tabs = [
      { name: 'Home', icon: HOME_ICON },
      { name: 'Botanical', icon: LEAF_ICON },
      { name: 'QRCode', icon: QR_ICON },
      { name: 'Search', icon: TRANSPARENCY_ICON },
    ]

    const opacityTitle = this.animatedText.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

    const translateXTitle = this.animatedText.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 0]
    })

    return (
      <SafeAreaView
        forceInset={{ vertical: 'always' }}
        style={styles.container}>
        <View style={styles.headerWarpper}>
          <View style={styles.leftHeaderWarpper}>
            <IconButton
              icon={MENU_ICON}
              iconSize={32}
              tintColor={Colors.BLACK}
              onPress={this.onPressOpenDrawer} />
          </View>
          <Animated.View style={[styles.rightHeaderWarpper, { opacity: opacityTitle, transform: [{ translateX: translateXTitle }] }]}>
            <TitleName />
          </Animated.View>
        </View>
        <View style={styles.contentWrapper}>
          <Navigator
            screens={routeChilds.Initial}
            initialStack='Home'
            navigatorRef={router => (this.router = router)} />
        </View>
        <View style={styles.footerTabbar}>
          <Tabbar activeScene={activeScene} tabs={tabs} callbackOnPress={this.onPressTab} />
        </View>
      </SafeAreaView>
    )
  }
}

export default Initial