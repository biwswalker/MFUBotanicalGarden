import { initialState, actionTypeConst } from './constants'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeConst.getGarden.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypeConst.getGarden.SUCCESS:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        list: action.data,
      }
    case actionTypeConst.getGarden.FAILURE:
      return {
        ...state,
        isFetching: false,
        code: action.code,
        error: action.error,
      }
    case actionTypeConst.getGardenPlant.REQUEST:
      return {
        ...state,
        plantIsFetching: true,
      }
    case actionTypeConst.getGardenPlant.SUCCESS:
      return {
        ...state,
        plantIsFetching: false,
        plantCode: action.code,
        plants: action.data,
      }
    case actionTypeConst.getGardenPlant.FAILURE:
      return {
        ...state,
        plantIsFetching: false,
        plantCode: action.code,
        plantError: action.error,
      }
    case actionTypeConst.clearup:
      return initialState
    case actionTypeConst.clearupGardenPlant:
      return {
        ...state,
        plantIsFetching: initialState.plantIsFetching,
        plantError: initialState.plantError,
        plantCode: initialState.plantCode,
        plants: initialState.plants,
      }
    default:
      return state
  }
}

export default reducer