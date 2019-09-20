import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  list: [],
  code: null,
  error: null,
  isFetching: false,
}

export const endpoints = {
  search: (keyword) => `http://${apiEndpoint}/search?keyword=${keyword}`
}

export const actionTypeConst = {
  searching: redux.actionTypes('SEARCHING_PLANT_LIST'),
  clearup: 'CLEAR_SEARCH_LIST'
}