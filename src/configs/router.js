import React from 'react'
import Router from 'react-native-easy-router'

import {
  Initial,
  Information,
} from '../features'

const routes = {
  Initial,
  Information,
}

const animations = {
  [RouteType.SKEW]: [{ transform: [{ skewX: '90deg' }] }, { transform: [{ skewX: '0deg' }] }, false],
}

export default () =>
  <Router
    routes={routes}
    initialRoute='Initial'
    animations={animations}
    disableHardwareBack={false}
    router={router => (this.router = router)} />