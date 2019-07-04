import axios from 'axios'
import _ from 'lodash'

const requestInterceptor = (config) => {
  const configMod = {
    ...config,
    headers: {
      ...config.headers,
    },
    
    // Replace double slash or more in url to left one slash
    // e.g. url/path//id:1234 to url/path/id:1234
    url: config.url.replace(/([^:])(\/\/)/g, '$1/'),
  }
  return configMod
}

const responseInterceptor = response => response
const errorResponseHandler = (store) => error => {
  const { dispatch } = store
  return Promise.reject(error)
}



const initService = (config, store) => {
  // Axios globals configuration
  axios.defaults.baseURL = config.baseURL || ''
  axios.defaults.responseType = 'json'
  axios.defaults.headers['Content-Type'] = 'application/json'
  /**
   * Tansform response and request before sent or get
   */
  // axios.defaults.transformRequest = transformRequest
  // axios.defaults.transformResponse = transformResponse

  // interceptors
  axios.interceptors.request.use(requestInterceptor, error => Promise.reject(error))
  axios.interceptors.response.use(responseInterceptor, errorResponseHandler(store))

  // set default fetch timeout
  axios.defaults.timeout = 60000

}

export default initService

