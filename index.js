import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import {
  storeConfig,
  serviceConfig,
  projectConfig,
  router as Router
} from './src/configs'
import app from './app.json'

const store = storeConfig(projectConfig.name)
serviceConfig(projectConfig, store)

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

AppRegistry.registerComponent(app.name, () => App)
