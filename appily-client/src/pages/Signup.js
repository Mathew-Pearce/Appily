import { useState } from 'react'
import axios from 'axios'

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/api/auth/signup', form)
    alert('Signup successful')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='username' onChange={handleChange} placeholder='Username' />
      <input name='email' onChange={handleChange} placeholder='Email' />
      <input
        name='password'
        onChange={handleChange}
        type='password'
        placeholder='Password'
      />
      <button type='submit'>Sign Up</button>
    </form>
  )
}
