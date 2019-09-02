
const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })
  
  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})


router.get('/tasks', auth, async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).send(tasks)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router