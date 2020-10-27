const CONSTANTS = require('./misc/constants');

const users = [];
const rooms = [];

const startEngine = io => {

    io.on('connection', (socket) => {
        if (users.indexOf(socket.id) === -1){
            users.push(socket.id)
        }
        console.log('user connected', socket.id, users)
        io.emit(CONSTANTS.USERS_UPDATE, users)
        socket.emit(CONSTANTS.YOUR_ID, socket.id)

        socket.on(CONSTANTS.UPDATE_ROOMS, (room) => {
            rooms.push(room);
            io.emit(CONSTANTS.UPDATE_ROOMS, rooms)
        })

        socket.on('disconnect', () => {
          users.splice(users.indexOf(socket.id), 1)
          console.log(socket.id, 'disconnected', users)
          io.emit(CONSTANTS.USERS_UPDATE, users)
        })
    })
}

module.exports = {
    startEngine
}