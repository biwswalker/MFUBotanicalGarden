import React, { Component, Fragment } from 'react'
import { StatusBar } from 'react-native'
import Navigator from 'react-native-easy-router'
import { Modal } from '@components'
import {
  Map,
  Home,
  About,
  Garden,
  Search,
  Review,
  QRCode,
  Initial,
  Information,
  SubCategory,
} from '@features'

const routes = {
  Map,
  About,
  Review,
  Initial,
  Information,
  SubCategory,
}

let navigatorRef = null

const setNavigator = (ref) => {
  navigatorRef = ref
}

export const getNavigator = () => navigatorRef

export const routeChilds = {
  Initial: {
    Home,
    Search,
    QRCode,
    Garden,
  }
}

class Router extends Component {

  constructor(props) {
    super(props)
    this.navigator = null
  }

  componentDidMount() {
    setNavigator(this.navigator)
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle='dark-content' />
        <Navigator
          screens={routes}
          initialStack='Initial'
          navigatorRef={ref => (this.navigator = ref)} />
        <Modal />
      </Fragment>
    )
  }
}

export default Router