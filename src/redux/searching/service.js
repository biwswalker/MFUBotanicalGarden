import axios from 'axios'
import { endpoints } from './constants'

export const fetchSearchingPlantList = (keyword) => axios.get(endpoints.suggestionSearch(keyword))
export const fetchSearchPlantList = (keyword) => axios.get(endpoints.search(keyword))