import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  list: [],
  code: null,
  error: null,
  isFetching: false,
}

export const endpoints = {
  highlight: `http://${apiEndpoint}/highlight`
}

export const actionTypeConst = {
  getHighlight: redux.actionTypes('GET_HIGHLIGHT_LIST'),
  clearup: 'CLEAR_HIGHLIGHT_LIST'
}