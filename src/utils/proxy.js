import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1'

export const login = async (email, password) => {
  const response = await axios.post(BASE_URL + '/auth/login', { email, password })
  return response.data
}

export const register = async (name, lastName, email, password) => {
  const response = await axios.post(BASE_URL + '/auth/register', {
    name,
    lastName,
    email,
    password
  })
  return response.data
}

export const updateUser = async (id, name, lastName, email) => {
  const response = await axios.put(BASE_URL + '/users/' + id, { name, lastName, email })
  return response.data
}

export const getUsers = async (filter) => {
  const url = filter ? BASE_URL + '/users?filter=' + filter : BASE_URL + '/users'
  const response = await axios.get(url, {
    headers: { Authorization: sessionStorage.getItem('token') }
  })
  return response.data
}

export const updateUserRole = async (id, role) => {
  const response = await axios.put(
    BASE_URL + '/users/' + id + '/changeRol',
    { role },
    {
      headers: { Authorization: sessionStorage.getItem('token') }
    }
  )
  return response.data
}

export const deleteUser = async (id) => {
  const response = await axios.delete(BASE_URL + '/users/' + id, {
    headers: { Authorization: sessionStorage.getItem('token') }
  })
  return response.data
}

export const createGame = async (name, maxScore) => {
  const response = await axios.post(
    BASE_URL + '/games',
    { name, scoreMax: maxScore },
    {
      headers: { Authorization: sessionStorage.getItem('token') }
    }
  )
  return response.data
}

export const getCurrentGame = async () => {
  const response = await axios.get(BASE_URL + '/games/current', {
    headers: { Authorization: sessionStorage.getItem('token') }
  })
  return response.data
}
