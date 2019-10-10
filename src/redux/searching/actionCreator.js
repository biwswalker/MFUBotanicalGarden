import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'
import { Events } from '@constants'
import { actionTypeConst } from './constants'
import { fetchSearchingPlantList, fetchSearchPlantList } from './service'

const requestGetSearchList = () => ({ type: actionTypeConst.searching.REQUEST })

const requestGetSearchListWithSaveRecent = (keyword) => {
  AsyncStorage.getItem(Events.RECENT_SERACH, (err, result) => {
    const recents = JSON.parse(result)
    if (_.isEmpty(recents)) {
      AsyncStorage.setItem(Events.RECENT_SERACH, JSON.stringify([keyword]))
    } else {
      if (typeof recents === 'object') {
        if (!_.includes(recents, keyword)) {
          recents.push(keyword)
          const firstReverse = _.reverse(recents)
          const chunked = _.chunk(firstReverse, 5)[0]
          const actureResult = _.reverse(chunked)
          AsyncStorage.setItem(Events.RECENT_SERACH, JSON.stringify(actureResult))
        }
      } else {
        AsyncStorage.setItem(Events.RECENT_SERACH, JSON.stringify([keyword]))
      }
    }
  })
  return {
    type: actionTypeConst.search.REQUEST
  }
}

const successGetSearchList = (type, { data, code }) => ({
  type,
  data: data.data,
  code
})

const failureGetSearchList = (type, { error, code }) => ({
  type,
  error,
  code,
})

const clearupSearchList = () => ({
  type: actionTypeConst.clearup
})

export const getRecentSearchPlantList = (callback = () => { }) => {
  AsyncStorage.getItem(Events.RECENT_SERACH, callback)
}

export const getSearhingPlantList = (keyword) => dispatch => {
  dispatch(requestGetSearchList())
  fetchSearchingPlantList(keyword)
    .then(response => dispatch(successGetSearchList(actionTypeConst.searching.SUCCESS, response)))
    .catch(error => dispatch(failureGetSearchList(actionTypeConst.searching.FAILURE, error)))
}

export const getSearhPlantList = (keyword) => dispatch => {
  dispatch(requestGetSearchListWithSaveRecent(keyword))
  fetchSearchPlantList(keyword)
    .then(response => dispatch(successGetSearchList(actionTypeConst.search.SUCCESS, response)))
    .catch(error => dispatch(failureGetSearchList(actionTypeConst.search.FAILURE, error)))
}

export const clearSearchList = () => dispatch => dispatch(clearupSearchList())