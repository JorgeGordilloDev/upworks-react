import axios from 'axios'
export const BASE_URL = 'https://upworks-api.herokuapp.com'

export default axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
})
