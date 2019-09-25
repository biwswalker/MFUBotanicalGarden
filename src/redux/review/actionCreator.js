import { actionTypeConst } from './constants'
import { fetchAddReview } from './service'

const requestAddReview = () => ({
  type: actionTypeConst.search.REQUEST
})

const successAddReview = ({ data, code }) => ({
  type: actionTypeConst.search.SUCCESS,
  data: data.data,
  code
})

const failureAddReview = ({ error, code }) => ({
  type: actionTypeConst.search.FAILURE,
  error,
  code,
})

const clearupReview = () => ({
  type: actionTypeConst.clearup
})


export const addReview = (review) => dispatch => {
  dispatch(requestAddReview())
  fetchAddReview(review)
    .then(response => dispatch(successAddReview(response)))
    .catch(error => dispatch(failureAddReview(error)))
}

export const clearReview = () => dispatch => dispatch(clearupReview())