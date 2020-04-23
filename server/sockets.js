const debug = require('debug')
const tenMoreShapes = require('./game/moreShapes');
const playerUpdate = require('./game/playerUpdate');
const initPlayer = require('./game/initPlayer');
const newquickplay = require('./game/quickplay');
const CONSTANT = require('./constants');
let users = [];
let roomlist = [];
let quickies = [];


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
        socket.on(CONSTANT.LEAVE_ENDURO, room => { //LEAVE_ENDURO
          let index = room.users.indexOf(socket.id)
          room.users.splice(index, 1)
          socket.leave(room.name)
          socket.emit(CONSTANT.ACTUAL_ROOM, "")
          if (room.owner === socket.id){
            room.owner = room.users[0]
          }
          io.in(room.name).emit(CONSTANT.ACTUAL_ROOM, room)
        })
        socket.on(CONSTANT.WAITING, room => {
          const newRoom = {
            ...room,
            status: CONSTANT.WAITING
          }
          io.in(room.name).emit(CONSTANT.ACTUAL_ROOM, newRoom)
        })
        socket.on(CONSTANT.QUICK_PLAY, () => { //QUICK_PLAY
          let i = quickies.length, data = {};
          if (i === 0){ //NO QUIPLAY YET
            data = newquickplay(i+1, socket.id)
            quickies.push(data)
            socket.join(data.name)
            socket.emit(CONSTANT.ACTUAL_ROOM, quickies[i])
            console.log(quickies[i])
        } else {
            if (quickies[i-1].users.length < 5){
              quickies[i-1].users.push({token: socket.id, stage: []})
              socket.join(quickies[i-1])
              io.in(quickies[i-1]).emit(CONSTANT.ACTUAL_ROOM, quickies[i-1])
              console.log(quickies[i-1])
            } else {
              quickies.push(newquickplay(i+1, socket.id))
              socket.join(quickies[i])
              socket.emit(CONSTANT.ACTUAL_ROOM, quickies[i])
              console.log(quickies[i])
            }
          }
        })
        socket.on(CONSTANT.MULTI, dataObj => { //MULTI
          for(let i in dataObj.room.users){
            if(dataObj.room.users[i] !== socket.id){
              io.to(dataObj.room.users[i]).emit(CONSTANT.MULTI, dataObj)
            }
          }
        })
        socket.on(CONSTANT.WINNER, data => { //WINNER
          for(let i in data.room.users){
            if(data.room.users[i] !== socket.id){
              io.to(data.room.users[i]).emit(CONSTANT.WINNER, data)
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