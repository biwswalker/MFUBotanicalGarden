import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
  user
} from '../redux'

const reducerList = {
  user
}


export const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
}


export default reducers = storeName =>
  combineReducers({ [storeName]: persistReducer(persistConfig, combineReducers(reducerList)) })