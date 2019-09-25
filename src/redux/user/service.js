import axios from 'axios'
import { endpoints } from './constants'

export const fetchGetUser = () => axios.get(endpoints.me)
export const fetchAnonymousSignin = (data) => axios.post(endpoints.user, data)