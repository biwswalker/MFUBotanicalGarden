import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  storeConfig,
  serviceConfig,
  projectConfig,
  router as Router
} from '@configs'
import app from './app.json'

const store = storeConfig(projectConfig.name)
serviceConfig(projectConfig, store)

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  </Provider>
)

AppRegistry.registerComponent(app.name, () => App)
