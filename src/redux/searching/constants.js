import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  list: [],
  code: null,
  error: null,
  isFetching: false,
}

export const endpoints = {
  search: `http://${apiEndpoint}/search`
}

export const actionTypeConst = {
  searching: redux.actionTypes('SEARCHING_PLANT_LIST'),
  clearup: 'CLEAR_SEARCH_LIST'
}