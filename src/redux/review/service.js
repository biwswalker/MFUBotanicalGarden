import axios from 'axios'
import { endpoints } from './constants'

export const fetchAddReview = (review) => axios.post(endpoints.review, review)