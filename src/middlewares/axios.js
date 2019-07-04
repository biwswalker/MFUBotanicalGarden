import axios from 'axios'
import _ from 'lodash'
import { project } from '../configs/environment'

const axiosMiddleware = ({ getState }) => next => (action) => {
  const authToken = _.get(getState()[project.name], 'user.token')
  axios.defaults.headers.common.Authorization = authToken || ''
  return next(action)
}

export default axiosMiddleware