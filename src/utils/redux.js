const actionTypes = (type) => ({
  REQUEST: `${type}_REQUEST`.toLocaleUpperCase(),
  SUCCESS: `${type}_SUCCESS`.toLocaleUpperCase(),
  FAILURE: `${type}_FAILURE`.toLocaleUpperCase(),
})

export default {
  actionTypes
}