
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const { generateMessage } = require('./utils/messages')
const { addUser, getUser, getUserInGroup } = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = 3000
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

let count = 0

io.on('connection', (socket) => {
  console.log('Web socket is running')

  // socket.emit('countUpdated', count)
  
  // socket.on('increment', () => {
  //   count++
  //   io.emit('countUpdated', count)
  // })

  // join 
  socket.on('join', (options, callback) => {
    const {error, user} = addUser({ id: socket.id, ...options })
    socket.join(user.group)
    
    socket.emit('message', generateMessage(user.username, 'Selamat Datang'))
    socket.broadcast.to(user.group).emit('message', generateMessage(user.username, `${user.username} has joined`))
    io.to(user.group).emit('groupList', {
      group: user.group,
      users: getUserInGroup(user.group)
    })
  })

  // on read message
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.group).emit('message', generateMessage(user.username, message))

    callback()
  })

  // check if user left
  socket.on('disconnect', () => {
    const user = getUser(socket.id)
    io.emit('message', generateMessage(user.username, 'Ada user yg keluar'))
  })
})

server.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})