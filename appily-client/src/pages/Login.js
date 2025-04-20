// src/pages/Login.jsx

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // TODO: Replace with real API call
    console.log('Logging in with', { email, password })

    // Simulate login success
    navigate('/dashboard')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-6 rounded-xl shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login to Appily</h2>

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='w-full mb-4 p-2 border rounded'
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='w-full mb-6 p-2 border rounded'
        />

        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
