import {createContext} from 'react';
import { PLAYING, STATUS, SHAPES } from '../../constants';
import { randomShape } from '../../tetrominos';

const SoloContext = createContext();

const soloState = {
    playing: false,
    shapes: randomShape([]),
    i: 0
}

const soloReducer = (soloState, action) => {
    // console.log(action.type)
    switch(action.type){
        case PLAYING:
            return {
                ...soloState,
                playing: action.playing
            }
        case SHAPES:
            return {
                ...soloState,
                shapes: action.shapes
            }
    }
}


export {
    soloState,
    soloReducer,
    SoloContext
}