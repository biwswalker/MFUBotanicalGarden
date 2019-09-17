import { actionTypeConst } from './constants'
import { fetchPlantInfomation } from './service'

const requestGetPlantInfo = () => ({
  type: actionTypeConst.getPlantInfo.REQUEST
})

const successGetPlantInfo = ({ data, code }) => ({
  type: actionTypeConst.getPlantInfo.SUCCESS,
  data: data.data,
  code
})

const failureGetPlantInfo = ({error, code}) => ({
  type: actionTypeConst.getPlantInfo.FAILURE,
  error,
  code,
})

const clearupPlant = () => ({
  type: actionTypeConst.clearup
})

export const getPlantInfo = (_id) => dispatch => {
  dispatch(requestGetPlantInfo())
  fetchPlantInfomation(_id)
    .then(response => dispatch(successGetPlantInfo(response)))
    .catch(error => dispatch(failureGetPlantInfo(error)))
}

export const clearPlant = () => dispatch => dispatch(clearupPlant())