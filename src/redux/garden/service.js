import axios from 'axios'
import { endpoints } from './constants'

export const fetchGardenList = () => axios.get(endpoints.garden)
export const fetchGardenPlantList = (_id) => axios.get(endpoints.gardenPlant(_id))