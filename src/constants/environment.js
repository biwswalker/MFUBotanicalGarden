const env = __DEV__ ? 'dev' : 'production'
const api = {
  dev: '127.0.0.1:4000/api',
  production: 'mfubg-bmo.herokuapp.com/api'
}

export const apiEndpoint = api[env]

export const project = {
  name: 'mfubg'
}