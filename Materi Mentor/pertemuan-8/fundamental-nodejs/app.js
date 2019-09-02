console.log('Starting App')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')
const _ = require('lodash')
console.log(_.isString(true))
console.log(_.isString('Randy'))
const data = ['Randy', 'Vianda', 1, 'Randy', 1, 2, 3, 4, 5, 6]
const filteredArray = _.uniq(data)
console.log(filteredArray)

// argv
const command = process.argv[2]
console.log('Command: ', command)
if (command === 'add') {
  console.log('Add note')
} else if (command === 'list') {
  console.log('list note')
} else if (command === 'remove') {
  console.log('remove note')
} else if (command === 'read') {
  console.log('read note')
} else {
  console.log('command not recognized')
}

// const user = os.userInfo()
// notes.addNote()
// fs.appendFile(
//   'greeting.txt',
//   `Hello ${user.username} saya sedang belajar nodejs`,
// )
