const startEngine = async io => {

    io.on('connection', (socket) => {
        console.log('user connected', socket.id)
       
        socket.on('disconnect', () => {
          console.log(socket.id, 'disconnected')
        })
    })
}

module.exports = {
    startEngine
}