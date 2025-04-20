const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body
  const hashed = await bcrypt.hash(password, 10)
  const user = new User({ username, email, password: hashed })
  await user.save()
  res.send({ message: 'User created' })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: 'Invalid credentials' })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.send({ token, user })
})

module.exports = router
