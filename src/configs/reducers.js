import { combineReducers } from 'redux'

import {
  user
} from '../redux'

const reducerList = {
  user
}

export default reducers = storeName =>
  combineReducers({ [storeName]: combineReducers(reducerList) })