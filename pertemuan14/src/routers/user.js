
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/users', auth, async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).send(users)
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user)
})

router.get('/users/get-token', auth, async (req, res) => {
  res.send({ token: req.token })
})


router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.status(200).send({ user, token })
  } catch (e) {
    res.status(422).send({
      message: 'Login Gagal'
    })
  }
})

router.post('/users/logout', auth, async (req, res) => {
  try {

  } catch (e) {
    res.status(422).send({
      message: 'Logout Berhasil'
    })
  }
})

router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    
  } catch (e) {
    res.status(422).send({
      message: 'Logout All Berhasil'
    })
  }
})

module.exports = router