// src/pages/Profile.jsx

import React, { useState, useEffect } from 'react'

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Demo User',
    email: 'user@appily.com',
    interests: ['Music', 'Tech', 'Cooking'],
  })

  // TODO: Replace with real user fetch
  useEffect(() => {
    // Simulate fetching user data
    console.log('Fetching user profile...')
  }, [])

  return (
    <div className='max-w-xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>Your Profile</h2>
      <div className='bg-white shadow rounded-lg p-4'>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Interests:</strong>
        </p>
        <ul className='list-disc list-inside'>
          {user.interests.map((interest, idx) => (
            <li key={idx}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Profile
