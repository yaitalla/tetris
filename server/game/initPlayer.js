const createStage = require('./createStage');
const CONSTANT = require('../constants');
const initPlayer = socket => {
    socket.emit(CONSTANT.PLAYER_STATUS, {
        id: socket.id, 
        pos: {x: 0, y: 0}, 
        tetromino: 0, 
        collided: false,
        dropTime: null,
        score: 0,
        rows: 0,
        level: 0,
        stage: createStage()
    })
}

module.exports = initPlayer;