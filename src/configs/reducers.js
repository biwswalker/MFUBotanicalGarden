import { combineReducers } from 'redux'

import {
  user,
  plant,
  garden,
  review,
  search,
  highlight,
} from '@redux'

const reducerList = {
  user,
  plant,
  garden,
  review,
  search,
  highlight,
}

export default (storeName) =>
  combineReducers({ [storeName]: combineReducers(reducerList) })