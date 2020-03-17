const debug = require('debug')
const tenMoreShapes = require('./game/moreShapes');
const playerUpdate = require('./game/playerUpdate');
const initPlayer = require('./game/initPlayer');
const CONSTANT = require('./constants');
let users = [];
let roomlist = [];

const logerror = debug(CONSTANT.LOG_ERROR)
  , loginfo = debug(CONSTANT.LOGINFO)


const socketEngine = io => {
    io.on(CONSTANT.CONNECTION, (socket) => {
        loginfo("User connected: " + socket.id)
        if (users.indexOf(socket.id) == -1){
            users.push(socket.id)
        }
        io.emit(CONSTANT.USERS_UPDATE, users)
        initPlayer(socket);
        socket.emit(CONSTANT.ROOMS_UPDATE, roomlist)
        
        socket.on(CONSTANT.CREATE_ROOM, roomname => { //CREATE_ROOM
            const data = {
                status: CONSTANT.NEW,
                name: roomname,
                owner: socket.id,
                users: [],
                shapes: tenMoreShapes([]),
            }
            roomlist.push(data)
            io.emit(CONSTANT.ROOMS_UPDATE, roomlist)
        })

        socket.on(CONSTANT.ACTUAL_ROOM, data => { //ACTUAL_ROOM
            // console.log(roomlist[data])
            roomlist[data].users.push(socket.id)
            socket.join(roomlist[data].name)
            io.in(roomlist[data].name).emit(CONSTANT.ACTUAL_ROOM, roomlist[data])
            io.emit(CONSTANT.ROOMS_UPDATE, roomlist) //ROOM UPDATE
        })
        socket.on(CONSTANT.WAITING, room => {
          const newRoom = {
            ...room,
            status: CONSTANT.WAITING
          }
          io.in(room.name).emit(CONSTANT.ACTUAL_ROOM, newRoom)
        })
        socket.on(CONSTANT.MULTI, data => { //MULTI
          for(let i in data.room.users){
            if(data.room.users[i] !== socket.id){
              io.to(data.room.users[i]).emit(CONSTANT.MULTI, data.stage)
            }
          }
        })

        socket.on(CONSTANT.MORE_SHAPES, room => { //MORE SHAPES
          const newShapes = tenMoreShapes(room.shapes)
          room.shapes = newShapes;
          io.in(room.name).emit(CONSTANT.MORE_SHAPES, room)
        })
        socket.on(CONSTANT.START, (room) => { //START
            let newStatus = room.status === CONSTANT.NEW || room.status === CONSTANT.WAITING ? CONSTANT.PLAYING 
                          : room.status === CONSTANT.PAUSE ? CONSTANT.PLAYING : CONSTANT.PAUSE;
            room.status = newStatus
            roomlist.map((elem, i) => {
                if (elem.name === room.name){
                  elem.status = newStatus
                }
            })
            io.in(room.name).emit(CONSTANT.ACTUAL_ROOM, room)
            io.emit(CONSTANT.ROOMS_UPDATE, roomlist)
        })

        socket.on(CONSTANT.DISCONNECT, () => {
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
               users.splice(users.indexOf(socket.id), 1)
            io.emit(CONSTANT.USERS_UPDATE, users)
            loginfo("User disconnected: " + socket.id)
        })

      })
    }

module.exports = socketEngine;