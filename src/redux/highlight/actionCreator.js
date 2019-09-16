import { actionTypeConst } from './constants'
import { fetchHighlightList } from './service'

const requestGetHighlightList = () => ({
  type: actionTypeConst.getHighlight.REQUEST
})

const successGetHighlightList = ({ data, code }) => ({
  type: actionTypeConst.getHighlight.SUCCESS,
  data: data.data,
  code
})

const failureGetHighlightList = (error, code) => ({
  type: actionTypeConst.getHighlight.FAILURE,
  error,
  code,
})

const clearHighlightList = () => ({
  type: actionTypeConst.clearup
})

export const getHighlightList = () => dispatch => {
  dispatch(requestGetHighlightList())
  fetchHighlightList()
    .then(response => dispatch(successGetHighlightList(response)))
    .catch(error => dispatch(failureGetHighlightList(error, 500)))
}

export const clearHighlight = () => dispatch => dispatch(clearHighlightList())