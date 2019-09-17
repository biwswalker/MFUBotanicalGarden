import { combineReducers } from 'redux'

import {
  user,
  plant,
  search,
  highlight,
} from '@redux'

const reducerList = {
  user,
  plant,
  search,
  highlight,
}

export default reducers = storeName =>
  combineReducers({ [storeName]: combineReducers(reducerList) })