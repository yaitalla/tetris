const fs = require('fs')
const debug = require('debug')
// const grid = require('./Process/grid');
// const shaper = require('./Process/shapes');

const nextShape = (room, index, grid) => {
  const shape = room.shapes[index+1].shape;
  for (let i=0; i<4; i++) {
    for (let j=4; j<8; j++) {
      grid[i][j] = shape[i][j-4]
    }
  }
  return {
    field: grid,
    shapeIndex: index+1
  }
}
let userlist = [];
let roomlist = [];

const logerror = debug('tetris:error')
  , loginfo = debug('tetris:log')

const initApp = (app, params, cb) => {
  const {host, port} = params
  const handler = (req, res) => {
    const file = req.url === '/bundle.js' ? '/../../build/bundle.js' : '/../../index.html'
    loginfo('file to read: ' + file)
    loginfo('ici')
    fs.readFile(__dirname + file, (err, data) => {
      if (err) {
        logerror(err)
        res.writeHead(500)
        return res.end('Error loading index.html')
      }
      res.writeHead(200)
      res.end(data)
    })
  }
  app.on('request', handler)
  app.listen({host, port}, () =>{
    loginfo(`tetris listen on ${params.url}`)
    cb()
  })
}

const initEngine = io => {
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

const create = (params) =>{
  
  const promise = new Promise( (resolve, reject) => {
    const app = require('http').createServer()
    
    initApp(app, params, () =>{
      const io = require('socket.io')(app)
      
      const stop = (cb) => {
        io.close()
        app.close( () => {
          app.unref()
        })
        loginfo(`Engine stopped.`)
        cb()
      }
      
      initEngine(io)
      resolve({stop})
    })
  })

  return promise
}

module.exports = create;