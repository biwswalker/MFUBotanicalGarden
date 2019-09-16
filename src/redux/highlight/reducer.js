import { initialState, actionTypeConst } from './constants'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeConst.getHighlight.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypeConst.getHighlight.SUCCESS:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        list: action.data,
      }
    case actionTypeConst.getHighlight.FAILURE:
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