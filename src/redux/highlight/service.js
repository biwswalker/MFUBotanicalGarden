import axios from 'axios'
import { endpoints } from './constants'

export const fetchHighlightList = () => axios.get(endpoints.highlight)