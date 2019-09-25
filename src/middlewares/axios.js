import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { Events } from '@constants'

const getToken = (callback = () => { }) => {
  AsyncStorage.getItem(Events.ACCESS_TOKEN, (err, result) => {
    callback(result)
  })
}

const axiosMiddleware = ({ getState }) => next => (action) => {
  getToken((token) => {
    axios.defaults.headers.common.Authorization = token || ''
    return next(action)
  })
}

export default axiosMiddleware