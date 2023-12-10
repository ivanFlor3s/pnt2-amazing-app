import axios from "axios"
const BASE_URL  = 'http://localhost:3000/api/v1'

export const login = async (email, password) => {
  const response = await axios.post(BASE_URL + '/auth/login', { email, password })
  return response.data
}