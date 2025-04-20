const router = require('express').Router()
const User = require('../models/User')

router.post('/update', async (req, res) => {
  const { userId, interests, bio } = req.body
  const user = await User.findByIdAndUpdate(
    userId,
    { interests, bio },
    { new: true }
  )
  res.send(user)
})

router.get('/match/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const matches = await User.find({
    _id: { $ne: user._id },
    interests: { $in: user.interests },
  })
  res.send(matches)
})

module.exports = router
