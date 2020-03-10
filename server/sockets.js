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
            roomlist[data].users.push(socket.id)
            socket.join(roomlist[data].name)
            io.in(roomlist[data].name).emit(CONSTANT.ACTUAL_ROOM, roomlist[data])
            io.emit(CONSTANT.ROOMS_UPDATE, roomlist)
        })

        // socket.on(CONSTANT.START, ({room, player}) => { //START
        //     let newStatus = room.status === CONSTANT.NEW ? CONSTANT.PLAYING 
        //                   : room.status === CONSTANT.PAUSE ? CONSTANT.PLAYING : CONSTANT.PAUSE;
        //     room.status = newStatus
        //     const newPlayer = playerUpdate(player, room)
        //     const enemi = playerUpdate(player, room);
        //     io.in(room.name).emit(CONSTANT.START, {room, newPlayer, enemi})
        // })

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