import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  data: {},
  code: null,
  error: null,
  isFetching: false,
}

export const endpoints = {
  plantInfo: (_id) => `http://${apiEndpoint}/plant/${_id}`
}

export const actionTypeConst = {
  getPlantInfo: redux.actionTypes('GET_PLANT_INFO'),
  clearup: 'CLEAR_PLANT_INFO'
}