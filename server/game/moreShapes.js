const TETRO = require('./tetrominos');
const randomShape = () => {
    const shapes = 'IJLOSTZ';
    const randomTetrimino = shapes[Math.floor(Math.random() * shapes.length)];
    return TETRO[randomTetrimino];
}

const tenMoreShapes = (shape) => {
    for (let i=0; i<10; i++) {
        shape.push(randomShape())
    }
    return shape;
}

module.exports = tenMoreShapes;