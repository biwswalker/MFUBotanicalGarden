import axios from 'axios'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import axiosMiddleware from '../middlewares/axios'
import reducers from './reducers'

const enhancer = [axiosMiddleware, thunk.withExtraArgument(axios)]

const composedEnhancer = composeWithDevTools(applyMiddleware(...enhancer))

const initialStoreByName = storeName => {
  const store = createStore(reducers(storeName), {}, composedEnhancer)
  persistStore(store)
  return store
}

export default initialStoreByName