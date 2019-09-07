import { combineReducers } from 'redux'

import {
  user,
  search,
} from '@redux'

const reducerList = {
  user,
  search,
}

export default reducers = storeName =>
  combineReducers({ [storeName]: combineReducers(reducerList) })