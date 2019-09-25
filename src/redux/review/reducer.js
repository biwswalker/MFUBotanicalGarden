import { initialState, actionTypeConst } from './constants'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeConst.review.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypeConst.review.SUCCESS:
      return {
        ...state,
        isFetching: false,
        code: action.code,
      }
    case actionTypeConst.review.FAILURE:
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