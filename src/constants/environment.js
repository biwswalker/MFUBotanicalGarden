const env = __DEV__ ? 'dev' : 'production'
const api = {
  dev: 'localhost:4000/api',
  production: '/api'
}

export const apiEndpoint = api[env]

export const project = {
  name: 'mfubg'
}