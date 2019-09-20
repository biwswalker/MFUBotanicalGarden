import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  list: [],
  code: null,
  error: null,
  searchResult: [],
  isFetching: false,
}

export const endpoints = {
  suggestionSearch: (keyword) => `http://${apiEndpoint}/suggestion_search?keyword=${keyword}`,
  search: (keyword) => `http://${apiEndpoint}/search?keyword=${keyword}`
}

export const actionTypeConst = {
  searching: redux.actionTypes('SEARCHING_PLANT_LIST'),
  search: redux.actionTypes('SEARCH_PLANT_LIST'),
  clearup: 'CLEAR_SEARCH_LIST'
}