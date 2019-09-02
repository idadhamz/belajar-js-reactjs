// init mongoose
const mongoose = require('mongoose')
// init validator
const validator = require('validator')
// connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
})
