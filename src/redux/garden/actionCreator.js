import { actionTypeConst } from './constants'
import { fetchGardenList, fetchGardenPlantList } from './service'

const requestGetGardenList = () => ({
  type: actionTypeConst.getGarden.REQUEST
})

const successGetGardenList = ({ data, code }) => ({
  type: actionTypeConst.getGarden.SUCCESS,
  data: data.data,
  code
})

const failureGetGardenList = ({error, code}) => ({
  type: actionTypeConst.getGarden.FAILURE,
  error,
  code,
})

const requestGetGardenPlantList = () => ({
  type: actionTypeConst.getGardenPlant.REQUEST
})

const successGetGardenPlantList = ({ data, code }) => ({
  type: actionTypeConst.getGardenPlant.SUCCESS,
  data: data.data,
  code
})

const failureGetGardenPlantList = ({error, code}) => ({
  type: actionTypeConst.getGardenPlant.FAILURE,
  error,
  code,
})

const clearGardenList = () => ({
  type: actionTypeConst.clearup
})

const clearGardenPlantList = () => ({
  type: actionTypeConst.clearupGardenPlant
})

export const getGardenList = () => dispatch => {
  dispatch(requestGetGardenList())
  fetchGardenList()
    .then(response => dispatch(successGetGardenList(response)))
    .catch(error => dispatch(failureGetGardenList(error)))
}

export const getGardenPlantList = (_id) => dispatch => {
  dispatch(requestGetGardenPlantList())
  fetchGardenPlantList(_id)
    .then(response => dispatch(successGetGardenPlantList(response)))
    .catch(error => dispatch(failureGetGardenPlantList(error)))
}

export const clearGarden = () => dispatch => dispatch(clearGardenList())
export const clearGardenPlant = () => dispatch => dispatch(clearGardenPlantList())