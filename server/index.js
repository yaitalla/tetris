const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const debug = require('debug');
const server = require('http').Server(app);
const io = require('socket.io')(server, { pingTimeout: 60000 } );
app.use(cors({"origin": "*"})); //cross origin ressource sharing
app.use(bodyParser.urlencoded({ extended: false })); //parse request bodies in a midlleware
app.use(bodyParser.json());

    let userlist = [];
    let roomlist = [];
io.on('connection', (socket) => {
  console.log("User connected: " + socket.id)
  // io.emit('SERVER_MESSAGE', 'new connection: '+socket.id)
  if (userlist.indexOf(socket.id) == -1){
      userlist.push(socket.id)
  }
  io.emit('USERS_UPDATE', {userlist, roomlist})
  socket.on('SHAPE_REQ', data => {
    roomlist[data.i].shapes = shaper(data.oldShapes);
    io.emit('ROOM_UPDATE', roomlist)
  })
  socket.on('CREATE_ROOM', roomname => {
    const data = {
      name: roomname,
      owner: socket.id,
      users: []
    }
    roomlist.push(data)
    io.emit('ROOM_CREATED', roomlist)
  })
  //io.to(socket.id).emit('USER_ID', socket.id);
  socket.emit('USER_ID', socket.id)
  socket.on('PAUSE', data => {
    io.in(data.room).emit('PAUSE', {
      playing: data.playing == true ? false : true,
    })
  })
  socket.on('START', data => {
    io.in(data.room.name).emit('START', nextShape(data.room, data.index, grid()))
  })
  socket.on('ADD_TETRI', data => {
    socket.emit('ADD_TETRI', {field: nextShape(data.room, data.index, data.field)})
  })
  socket.on('LEAVE', i => {
    roomlist[i].users.splice(roomlist[i].users.indexOf(socket.id), 1);
    socket.emit('LEAVE');
    io.emit('ROOM_UPDATE', roomlist)
  })
  socket.on('ENTER_ROOM', data => {
    let ret;
    for (let i in roomlist) {
      if (roomlist[i].name == data.name) {
        ret = i
        roomlist[i].users.push(socket.id)
       }
     }
    socket.join(data.name)
    socket.emit('ACTUAL_ROOM', {room: ret, field: grid()})
    io.emit('ROOM_UPDATE', roomlist)
  })
  socket.on('disconnect', () => {
    for (let i in roomlist) {
      for (let j in roomlist[i].users) {
        if (roomlist[i].users[j] == socket.id) {
          roomlist[i].users.splice(j, 1)
        }
      }
      if (roomlist[i].owner == socket.id){
        if (roomlist[i].users[0]) {
          roomlist[i].owner = roomlist[i].users[0]
        } else {
          roomlist.splice(i, 1)
        }
      }
     }
     userlist.splice(userlist.indexOf(socket.id), 1)
     io.emit('ROOM_UPDATE', roomlist)
     io.emit('USERS_UPDATE', {userlist, roomlist})
    console.log("User disconnected: " + socket.id)
  })
})

server.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});