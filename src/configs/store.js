import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import axiosMiddleware from '../middlewares/axios'
import reducers from './reducers'
import reactotronConfig from './reactotron'

const enhancer = [axiosMiddleware, thunk.withExtraArgument(axios)]

const composedEnhancer = __DEV__
  ? composeWithDevTools(applyMiddleware(...enhancer), reactotronConfig().createEnhancer())
  : composeWithDevTools(applyMiddleware(...enhancer))

const initialStoreByName = storeName => {
  const store = createStore(reducers(storeName), {}, composedEnhancer)
  return store
}

export default initialStoreByName