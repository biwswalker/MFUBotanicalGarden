
import React, { Fragment, useRef } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Drawer, IconButton, ModalController } from '@components'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Colors from '@colors'
import { getNavigator } from '@configs/router'
import styles from './Menu.style'

const BACK_ICON = require('@images/icon/left-arrow.png')

const Menu = (props) => {

  const {
    onChangeScene,
    activeScene,
    router,
  } = props

  let drawerRef = useRef(null)

  const onPressMenu = (scene) => () => {
    drawerRef.current.close(() => {
      ModalController.hide()
      if (['Map', 'About'].includes(scene)) {
        return getNavigator().push(scene, {})
      }
      onChangeScene(scene)
      router.push(scene, {}, { animation: 'none' })
    })
  }

  const Menus = ({ name }) => {
    const backgroundColor = _.isEqual(name, activeScene)
      ? Colors.GREEN_DARKFADE
      : Colors.WHITE
    const color = _.isEqual(name, activeScene)
      ? Colors.WHITE
      : Colors.BLACK_333
    return (
      <TouchableHighlight
        style={[styles.menuWrapper, { backgroundColor }]}
        underlayColor={Colors.GREEN_DARKFADE}
        onPress={onPressMenu(name)}>
        <Fragment>
          <Text style={[styles.menuText, { color }]}>{name}</Text>
        </Fragment>
      </TouchableHighlight>
    )
  }

  const onPressBack = () => {
    drawerRef.current.close(() => {
      ModalController.hide()
    })
  }

  return (
    <Drawer ref={drawerRef} onPressBackdrop={onPressBack}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.mfuWrapper}>
            <Text style={styles.mfuText}>MFU</Text>
            <IconButton
              icon={BACK_ICON}
              iconSize={20}
              tintColor={Colors.GREEN_DARKFADE}
              onPress={onPressBack} />
          </View>
          <Text style={styles.botanicalText}>Biotanical Garden</Text>
        </View>
        <View style={styles.menuContainer}>
          <Menus name="Home" />
          <Menus name="Garden" />
          <Menus name="QRCode" />
          <Menus name="Map" />
          <Menus name="About" />
        </View>
      </View>
    </Drawer>
  )
}

export default Menu

Menu.propTypes = {
  activeScene: PropTypes.string,
  onChangeScene: PropTypes.func,
}

Menu.defaultProps = {
  activeScene: '',
  onChangeScene() { },
}