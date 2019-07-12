import React, { Component } from 'react'
import Navigator from 'react-native-easy-router'

import {
  Initial,
  Information,
} from '../features'

const routes = {
  Initial,
  Information,
}

let navigatorRef = null

const setNavigator = (ref) => {
  navigatorRef = ref
}

export const getNavigator = () => navigatorRef


class Router extends Component {

  constructor(props) {
    super(props)
    this.navigator = null
  }

  componentDidMount() {
    setNavigator(this.navigator)
  }

  render() {
    return <Navigator
      screens={routes}
      initialStack='Initial'
      navigatorRef={ref => (this.navigator = ref)} />
  }
}

export default Router