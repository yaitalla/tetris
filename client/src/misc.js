import { CLEAR, MERGED } from "./constants";

export const FIELD_WIDTH = 12;
export const FIELD_HEIGHT = 20;

export const createField = () =>
    Array.from(Array(FIELD_HEIGHT), () => 
        new Array(FIELD_WIDTH).fill([0, CLEAR])
    )

export const checkCollision = (clone, field, {x: moveX, y: moveY}) => {
    for (let y = 0; y < clone.tetromino.length; y += 1) {
        for (let x = 0; x < clone.tetromino[y].length; x += 1) {
            if (clone.tetromino[y][x] !== 0) {
                if (!field[y + clone.pos.y + moveY] ||
                    !field[y + clone.pos.y + moveY][x + clone.pos.x + moveX] ||
                    field[y + clone.pos.y + moveY][x + clone.pos.x + moveX][1] !== CLEAR
                    ){
                    return true
                }
            }
        }
    }
}