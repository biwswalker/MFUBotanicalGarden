import axios from 'axios'
import { endpoints } from './constants'

export const fetchSearchingPlantList = () => axios.get(endpoints.search)