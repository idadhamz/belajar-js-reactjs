
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/task', auth, async (req, res) => {
    try {

    } catch (e) {

    }
})

router.post('/task', auth, async (req, res) => {
    try {

    } catch (e) {
        
    }
})

module.exports = router