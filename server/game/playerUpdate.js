const CONSTANT = require('../constants');


const playerUpdate = (player, room) => {
    player.pos = {x: CONSTANT.STAGE_WIDTH / 2 - 2, y: 0};
    player.collided = false;
    player.dropTime = 1000;
    const newStage = player.stage.map(row =>
        row.map(cell => {
            console.log(cell)
            return(
                cell[1] === 'clear' ? [0, 'clear'] : cell
            )
        })
    );
    room.shapes[player.tetromino].shape.forEach((row, y) => {
        row.forEach((value, x) => {
                if (value !== 0) {
                    console.log(value, x, player.pos.x, player.pos.y)    
                    newStage[y + player.pos.y][x + player.pos.x] = [
                        value,
                        `${player.collided ? 'merged' : 'clear'}`,
                    ];
            }
        });
    });
    return player;
}

module.exports = playerUpdate;