const express = require('express')
const authRoute = require('../routes/AuthRoute') // Add this line

const User = require('../models/UserModel')
const { createSecretToken } = require('../util/SecretToken')
const bcrypt = require('bcryptjs')

const router = express.Router() // Change this line

router.post('/signup', async (req, res, next) => {
  try {
    // req.body contains the data user is submitting or filling in the form
    console.log('Request Body:', req.body)
    const { email, password, username } = req.body // Correct field names
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.json({ message: 'User already exists' })
    }

    // We'll use the values obtained from req.body to create the new user
    const user = await User.create({ email, password, username })
    const token = createSecretToken(user._id)

    // The cookie will be sent to the client with the key of "token" and value of token.
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    })

    res
      .status(201)
      .json({ message: 'User signed in successfully', success: true, user })
    next()
  } catch (error) {
    console.error(error)
    next(error) // Pass the error to the next middleware or error handler
  }
})

module.exports = router // Change this line

// module.exports.Signup = async (req, res, next) => {
//   try {
//     // req.body contains the data user is submitting or filling in the form
//     console.log('Request Body:', req.body)
//     const { email, password, username } = req.body // Correct field names
//     const existingUser = await User.findOne({ email })
//     if (existingUser) {
//       return res.json({ message: 'User already exists' })
//     }

//     // We'll use the values obtained from req.body to create the new user
//     const user = await User.create({ email, password, username })
//     const token = createSecretToken(user._id)

//     // The cookie will be sent to the client with the key of "token" and value of token.
//     res.cookie('token', token, {
//       withCredentials: true,
//       httpOnly: false,
//     })

//     res
//       .status(201)
//       .json({ message: 'User signed in successfully', success: true, user })
//     next()
//   } catch (error) {
//     console.error(error)
//     next(error) // Pass the error to the next middleware or error handler
//   }
// }
module.exports = router
