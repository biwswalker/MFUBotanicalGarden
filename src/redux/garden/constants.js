import { apiEndpoint } from '@constants'
import { redux } from '@utils'

export const initialState = {
  list: [],
  code: null,
  error: null,
  isFetching: false,
  plantIsFetching: false,
  plantCode: null,
  plants: [],
  plantError: null,
}

export const endpoints = {
  garden: `http://${apiEndpoint}/garden`,
  gardenPlant: (_id) => `http://${apiEndpoint}/garden/plant/${_id}`,
}

export const actionTypeConst = {
  getGarden: redux.actionTypes('GET_GARDEN_LIST'),
  getGardenPlant: redux.actionTypes('GET_GARDEN_PLANT_LIST'),
  clearup: 'CLEAR_GARDEN_LIST',
  clearupGardenPlant: 'CLEAR_GARDEN_PLANT_LIST',
}