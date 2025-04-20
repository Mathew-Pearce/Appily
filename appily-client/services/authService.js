import axios from 'axios'

const API_URL = 'http://localhost:5000/api/auth' // or your deployed backend URL

// POST /api/auth/login
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials)
  return response.data
}

// GET /api/auth/profile (protected route)
export const fetchProfile = async (token) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
