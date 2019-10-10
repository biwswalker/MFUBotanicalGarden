import AsyncStorage from '@react-native-community/async-storage'
import { Events } from '@constants'
import { actionTypeConst } from './constants'
import { fetchGetUser, fetchAnonymousSignin } from './service'

const requestGetUser = () => ({
  type: actionTypeConst.getUser.REQUEST
})

const successGetUser = ({ data, code }) => ({
  type: actionTypeConst.getUser.SUCCESS,
  data: data.data,
  code
})

const failureGetUser = ({ error, code }) => ({
  type: actionTypeConst.getUser.FAILURE,
  error,
  code,
})

const requestAnonynousSignin = () => ({
  type: actionTypeConst.anonymousSignin.REQUEST
})

const successAnonynousSignin = ({ data, code }) => {
  AsyncStorage.setItem(Events.ACCESS_TOKEN, data.data.token)
  return ({
    type: actionTypeConst.anonymousSignin.SUCCESS,
    data: data.data,
    code
  })
}

const failureAnonynousSignin = ({ error, code }) => ({
  type: actionTypeConst.anonymousSignin.FAILURE,
  error,
  code,
})

const clearupUser = () => ({
  type: actionTypeConst.clearup
})

export const getUser = () => dispatch => {
  dispatch(requestGetUser())
  fetchGetUser()
    .then(response => dispatch(successGetUser(response)))
    .catch(error => dispatch(failureGetUser(error)))
}

export const anonynousSignin = (data) => dispatch => {
  dispatch(requestAnonynousSignin())
  fetchAnonymousSignin(data)
    .then(response => dispatch(successAnonynousSignin(response)))
    .catch(error => dispatch(failureAnonynousSignin(error)))
}

export const clearUser = () => dispatch => dispatch(clearupUser())