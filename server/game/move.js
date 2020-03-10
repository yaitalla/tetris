const checkCollision = require('./checkCollision');

const updatePosition = (dir, player, stage) => {
    if (!checkCollision(player, stage, {x: dir, y: 0})) {
        move({x: dir, y: 0})
    }
}

module.exports = updatePosition;