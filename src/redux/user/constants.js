import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  username: '',
  email: '',
  code: null,
  error: null,
  isFetching: false,
}

export const endpoints = {
  me: `http://${apiEndpoint}/user/me`,
  user: `http://${apiEndpoint}/user`,
}

export const actionTypeConst = {
  getUser: redux.actionTypes('GET_USER'),
  anonymousSignin: redux.actionTypes('ANONYMOUS_SIGNIN'),
  clearup: 'CLEAR_USER'
}