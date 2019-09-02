
const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

let count = 0

io.on('connection', (socket) => {
    console.log('web socket is running')
    socket.emit('countUpdated', count)

    socket.on('increment', () => {
        count++
        io.emit('countUpdated', count)
    })
})

server.listen(port, () => {
    console.log('Server is running port', port)
})