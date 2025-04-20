// src/pages/Dashboard.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Appily 🎉</h1>
      <p className='mb-6 text-gray-700'>Choose what you'd like to do:</p>

      <div className='space-y-4'>
        <Link
          to='/match'
          className='block bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition'>
          Find People With Similar Interests
        </Link>
        <Link
          to='/profile'
          className='block bg-indigo-500 text-white px-4 py-2 rounded shadow hover:bg-indigo-600 transition'>
          View Your Profile
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
