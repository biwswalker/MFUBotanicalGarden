import AsyncStorage from '@react-native-community/async-storage'
import { Events } from '@constants'
import { actionTypeConst } from './constants'
import { fetchSearchingPlantList } from './service'

const requestGetSearchList = (keyword) => {
  AsyncStorage.mergeItem(Events.RECENT_SERACH, [keyword])
  return {
    type: actionTypeConst.searching.REQUEST
  }
}

const successGetSearchList = ({ data, code }) => ({
  type: actionTypeConst.searching.SUCCESS,
  data: data.data,
  code
})

const failureGetSearchList = ({ error, code }) => ({
  type: actionTypeConst.searching.FAILURE,
  error,
  code,
})

const clearupSearchList = () => ({
  type: actionTypeConst.clearup
})

export const getRecentSearchPlantList = (callback = () => { }) => AsyncStorage.getItem(Events.RECENT_SERACH, callback)

export const getSearhingPlantList = (keyword) => dispatch => {
  dispatch(requestGetSearchList(keyword))
  fetchSearchingPlantList(keyword)
    .then(response => dispatch(successGetSearchList(response)))
    .catch(error => dispatch(failureGetSearchList(error)))
}

export const clearSearchList = () => dispatch => dispatch(clearupSearchList())