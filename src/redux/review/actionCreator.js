import { actionTypeConst } from './constants'
import { fetchAddReview } from './service'

const requestAddReview = () => ({
  type: actionTypeConst.review.REQUEST
})

const successAddReview = ({ data, code }) => ({
  type: actionTypeConst.review.SUCCESS,
  data: data.data,
  code
})

const failureAddReview = ({ error, code }) => ({
  type: actionTypeConst.review.FAILURE,
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