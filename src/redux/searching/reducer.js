import { initialState, actionTypeConst } from './constants'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeConst.searching.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypeConst.searching.SUCCESS:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        list: action.data,
      }
    case actionTypeConst.searching.FAILURE:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        error: action.error,
      }
    default:
      return state
  }
}

export default reducer