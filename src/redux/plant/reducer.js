import { initialState, actionTypeConst } from './constants'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeConst.getPlantInfo.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypeConst.getPlantInfo.SUCCESS:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        data: action.data,
      }
    case actionTypeConst.getPlantInfo.FAILURE:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        error: action.error,
      }
    case actionTypeConst.clearup:
      return initialState
    default:
      return state
  }
}

export default reducer