const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

//connects to the top html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

//connects the users through the server using socket.io
io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

//sets the server to activate on port 3001
server.listen(3001, () => {
  console.log('active on port:3001')
})