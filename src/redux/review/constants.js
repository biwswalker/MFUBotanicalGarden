import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  code: null,
  error: null,
  isFetching: false,
}

export const endpoints = {
  review: `http://${apiEndpoint}/review`,
}

export const actionTypeConst = {
  review: redux.actionTypes('INSERT_REVIEW'),
  clearup: 'CLEAR_REVIEW'
}