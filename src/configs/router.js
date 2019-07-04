import React from 'react'

import {
  Initial,
  Home,
  Search,
} from '../features'

const routes = {
  Home,
  Search,
}

export default () =>
  <Initial routes={routes} />