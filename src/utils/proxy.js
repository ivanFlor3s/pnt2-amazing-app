import axios from "axios"
const BASE_URL  = 'http://localhost:3000/api/v1'

export const login = async (email, password) => {
  const response = await axios.post(BASE_URL + '/auth/login', { email, password })
  return response.data
}

export const register = async (name, lastName, email, password) => {
    const response = await axios.post(BASE_URL + '/auth/register', { name, lastName, email, password })
    return response.data
}

export const updateUser = async (id, name, lastName, email) => {
  const response = await axios.put(BASE_URL + '/users/' + id, { name, lastName, email })
  return response.data
}