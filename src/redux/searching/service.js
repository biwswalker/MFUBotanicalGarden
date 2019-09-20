import axios from 'axios'
import { endpoints } from './constants'

export const fetchSearchingPlantList = (keyword) => axios.get(endpoints.search(keyword))