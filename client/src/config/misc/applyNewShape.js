import { ADD_TETRI, GAME_OVER } from '../constants';
import playsound from '../misc/playSound';
import checkForLine from './clearline';

const nextShape = (room, index, grid/*, user*/) => {
  const ret = checkForLine(grid, room/*, user*/)
    const shape = room.shapes[index+1].shape;
    for (let i=0; i<2; i++) {
      for (let j=3; j<7; j++) {
          if (shape[i][j-3] == 2){
            if (ret.field[i][j] == 1) {
              return { type: GAME_OVER }
            }
            ret.field[i][j] = shape[i][j-3]
            console.log('x')
          }
      }
    //  console.log(ret.field[i], shape)
    }
  // console.log(ret.field)
    // for (let i in shape) {
    //   console.log(i, ret.field[i])
    //   Array.prototype.splice.apply(ret.field[i], [4, 4].concat(shape[i]))
    //   console.log(i, ret.field[i])
    // }
    playsound(ret.score == 0 ? "landed" : "clear line")
    return {
        type: ADD_TETRI,
        field: ret.field,
        shapeIndex: index+1,
        score: ret.score
    }
  }

export default nextShape;
