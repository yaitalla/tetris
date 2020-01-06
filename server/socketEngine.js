const socketEngine = (io, userlist, roomlist) => {
    io.on('connection', (socket) => {
        loginfo("User connected: " + socket.id)
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
            users: [],
            shapes: shaper([])
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
          loginfo("User disconnected: " + socket.id)
        })
      })
  }

  module.exports = socketEngine;