import { combineReducers } from 'redux'

import {
  user,
  search,
  highlight,
} from '@redux'

const reducerList = {
  user,
  search,
  highlight,
}

export default reducers = storeName =>
  combineReducers({ [storeName]: combineReducers(reducerList) })