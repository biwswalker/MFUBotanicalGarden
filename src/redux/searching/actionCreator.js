import { actionTypeConst } from './constants'
import { fetchSearchingPlantList } from './service'

const requestGetSearchList = () => ({
  type: actionTypeConst.searching.REQUEST
})

const successGetSearchList = ({data, code}) => ({
  type: actionTypeConst.searching.SUCCESS,
  data,
  code
})

const failureGetSearchList = (error, code) => ({
  type: actionTypeConst.searching.FAILURE,
  error,
  code,
})

const clearupSearchList = () => ({
  type: actionTypeConst.clearup
})

export const getSearhingPlantList = () => dispatch => {
  dispatch(requestGetSearchList())
  fetchSearchingPlantList()
    .then(response => dispatch(successGetSearchList(response)))
    .catch(error => dispatch(failureGetSearchList(error, 500)))
}

export const clearSearchList = () => dispatch => dispatch(clearupSearchList())