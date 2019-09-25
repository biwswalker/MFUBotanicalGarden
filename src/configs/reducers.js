import { combineReducers } from 'redux'

import {
  user,
  plant,
  review,
  search,
  highlight,
} from '@redux'

const reducerList = {
  user,
  plant,
  review,
  search,
  highlight,
}

export default reducers = storeName =>
  combineReducers({ [storeName]: combineReducers(reducerList) })