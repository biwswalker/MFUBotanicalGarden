import React, { Component, Fragment } from 'react'
import Navigator from 'react-native-easy-router'
import { Modal } from '@components'
import {
  Home,
  Search,
  QRCode,
  Initial,
  Category,
  PlantList,
  Information,
} from '@features'

const routes = {
  Initial,
  PlantList,
  Information,
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
    Category,
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