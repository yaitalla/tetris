const checkCollision = require('./checkCollision');
const rotate = require('./rotate');
const rotation = (player, stage, dir) => {
    const clone = JSON.parse(JSON.stringify(player));
    const pos = clone.pos.x;
    let offset = 1;
    clone.tetromino = rotate(clone.tetromino, dir)
    while(checkCollision(clone, stage, {x: 0, y: 0})){
        clone.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > clone.tetromino[0].length){
            rotate(clone.tetromino, -dir);
            clone.pos.x = pos;
            return;
        }
    }
    return;
}

module.exports = rotation;