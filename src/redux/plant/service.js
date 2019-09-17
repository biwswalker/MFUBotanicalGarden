import axios from 'axios'
import { endpoints } from './constants'

export const fetchPlantInfomation = (_id) => axios.get(endpoints.plantInfo(_id))