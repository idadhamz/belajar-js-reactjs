console.log('Starting App')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')
const _ = require('lodash')
console.log(_.isString(true))
console.log(_.isString('Dadi'))
const data = ['Dadi', 'Ilham', 1, 'Dadi', 1, 2, 3, 4, 5]
const filteringData = _.uniq(data)
console.log(filteringData)

// argv
const command = process.argv[2]
console.log('command: ' + command)
if(command === 'add'){
    console.log('add note')
}else if(command === 'list'){
    console.log('list note')
}else if(command === 'remove'){
    console.log('remove note')
}else if(command === 'read'){
    console.log('read note')
}else {
    console.log('tidak ada command ini')
}
// const user = os.userInfo()
// console.log(user)
// console.log(`Hello ${user.username}`)