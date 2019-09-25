import { initialState, actionTypeConst } from './constants'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeConst.getUser.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypeConst.getUser.SUCCESS:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        email: action.data.email,
        username: action.data.name,
      }
    case actionTypeConst.getUser.FAILURE:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        error: action.error,
      }
    case actionTypeConst.anonymousSignin.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypeConst.anonymousSignin.SUCCESS:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        email: action.data.email,
        username: action.data.name,
      }
    case actionTypeConst.anonymousSignin.FAILURE:
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